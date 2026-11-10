"use client";

import { useEffect, useId, useState, type FormEvent, type ReactNode } from "react";
import site from "@/data/site.json";
import { useLocale } from "@/components/providers";
import { CAT_ICON, CAT_TONE, priceLabel } from "@/components/PieceCard";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { pieceOf, type Piece } from "@/lib/catalogue";
import { isPhone, recap, waLink } from "@/lib/whatsapp";

function Field({ id, label, optional, error, children, hint }: { id: string; label: string; optional?: string; error?: string; children: ReactNode; hint?: string }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
        {optional && <span className="ms-2 text-[0.8125rem] text-muted">({optional})</span>}
      </label>
      {children}
      {hint && <p className="mt-2 text-[0.8125rem] text-muted">{hint}</p>}
      {error && (
        <p id={`${id}-err`} className="mt-2 text-[0.875rem] text-[#9b2f2f]">
          {error}
        </p>
      )}
    </div>
  );
}

/** Après l'envoi : WhatsApp s'est ouvert ; on propose de le rouvrir ou d'appeler. */
function Sent({ text, url, call }: { text: string; url: string; call: string }) {
  return (
    <div role="status" className="mt-8 border border-sage bg-sage/15 p-6">
      <p className="leading-relaxed">{text}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={url} target="_blank" rel="noopener" className="btn-solid">
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a href={`tel:${site.tel}`} className="btn-line text-ink">
          <PhoneIcon /> {call}
        </a>
      </div>
    </div>
  );
}

const send = (text: string) => {
  const url = waLink(text);
  window.open(url, "_blank", "noopener");
  return url;
};

/** Réservation d'une pièce : pièce (pré-remplie depuis la carte), taille, nom, téléphone, message → récapitulatif WhatsApp. */
export function ReserveForm() {
  const { lang, d } = useLocale();
  const r = d.reserve;
  const uid = useId();
  const [piece, setPiece] = useState<Piece | null>(null);
  const [v, setV] = useState({ piece: "", size: "", name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("piece");
    const p = id ? pieceOf(id) : undefined;
    if (!p) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- pièce choisie sur une carte, lue dans l'URL après hydratation
    setPiece(p);
    setV((x) => ({ ...x, size: p.size === "Unique" ? d.arrivals.unique : p.size }));
  }, [d.arrivals.unique]);

  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV((x) => ({ ...x, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!piece && !v.piece.trim()) err.piece = r.errors.piece;
    if (!v.name.trim()) err.name = r.errors.name;
    if (!isPhone(v.phone)) err.phone = r.errors.phone;
    setErrors(err);
    if (Object.keys(err).length) {
      document.getElementById(`${uid}-${Object.keys(err)[0]}`)?.focus();
      return;
    }
    const c = lang === "fr" ? " :" : ":";
    const m = r.recap;
    const text = recap(
      r.recapTitle,
      [
        [
          [m.piece, piece ? `${piece.name[lang]} (${priceLabel(piece, lang, d)})` : v.piece],
          [m.ref, piece?.ref ?? ""],
          [m.size, v.size],
        ],
        [
          [m.name, v.name],
          [m.phone, v.phone],
          [m.message, v.message],
        ],
        [[m.from, `${site.url}/${lang}`]],
      ],
      c,
    );
    setSentUrl(send(text));
  };

  const id = (k: string) => `${uid}-${k}`;
  const inv = (k: string) => (errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${id(k)}-err` } : {});

  return (
    <form onSubmit={submit} noValidate className="space-y-7">
      {piece ? (
        <div className="flex items-center gap-5 border border-line bg-cream-soft p-4">
          <div className={`slot tone-${CAT_TONE[piece.category]} grid size-20 shrink-0 place-items-center`} aria-hidden="true">
            {CAT_ICON[piece.category]("size-10")}
          </div>
          <div className="min-w-0 flex-1">
            <p className="eyebrow">{r.chosen}</p>
            <p className="display mt-1 text-[1.35rem]">{piece.name[lang]}</p>
            <p className="mt-0.5 text-[0.875rem] text-muted">
              {d.arrivals.ref} {piece.ref} · {priceLabel(piece, lang, d)}
            </p>
          </div>
          <button type="button" className="link-line shrink-0 text-[0.875rem]" onClick={() => setPiece(null)}>
            {r.change}
          </button>
        </div>
      ) : (
        <Field id={id("piece")} label={r.fields.piece} error={errors.piece}>
          <input id={id("piece")} className="field" value={v.piece} onChange={set("piece")} placeholder={r.fields.piecePh} {...inv("piece")} />
        </Field>
      )}
      <div className="grid gap-7 sm:grid-cols-2">
        <Field id={id("size")} label={r.fields.size} optional={r.fields.optional}>
          <input id={id("size")} className="field" value={v.size} onChange={set("size")} placeholder={r.fields.sizePh} />
        </Field>
        <Field id={id("name")} label={r.fields.name} error={errors.name}>
          <input id={id("name")} className="field" value={v.name} onChange={set("name")} autoComplete="name" {...inv("name")} />
        </Field>
      </div>
      <Field id={id("phone")} label={r.fields.phone} error={errors.phone}>
        <input id={id("phone")} className="field" type="tel" inputMode="tel" value={v.phone} onChange={set("phone")} autoComplete="tel" {...inv("phone")} />
      </Field>
      <Field id={id("message")} label={r.fields.message} optional={r.fields.optional}>
        <textarea id={id("message")} className="field min-h-28" value={v.message} onChange={set("message")} placeholder={r.fields.messagePh} />
      </Field>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
        <button type="submit" className="btn-solid">
          <WhatsAppIcon /> {r.submit}
        </button>
        <a href={`tel:${site.tel}`} className="btn-line text-ink">
          <PhoneIcon /> {d.nav.call}
        </a>
      </div>
      <p className="text-[0.875rem] text-muted">{r.note}</p>
      {sentUrl && <Sent text={r.sent} url={sentUrl} call={d.nav.call} />}
    </form>
  );
}

const TYPES = ["femme", "homme", "enfant", "bijoux", "sacs", "chaussures", "vintage"] as const;
const QTY = ["few", "some", "lot"] as const;
const PHOTOS = ["yes", "later"] as const;

/** Dépôt-vente : type de vêtements, quantité, photos (envoyées dans WhatsApp), nom, téléphone, précisions. */
export function DepotForm() {
  const { lang, d } = useLocale();
  const t = d.depot;
  const fl = t.fields;
  const uid = useId();
  const [types, setTypes] = useState<string[]>([]);
  const [qty, setQty] = useState("");
  const [photos, setPhotos] = useState<string>("yes");
  const [v, setV] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const id = (k: string) => `${uid}-${k}`;
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV((x) => ({ ...x, [k]: e.target.value }));
  const inv = (k: string) => (errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${id(k)}-err` } : {});

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!types.length) err.types = t.errors.types;
    if (!qty) err.quantity = t.errors.quantity;
    if (!v.name.trim()) err.name = t.errors.name;
    if (!isPhone(v.phone)) err.phone = t.errors.phone;
    setErrors(err);
    if (Object.keys(err).length) {
      document.getElementById(`${uid}-${Object.keys(err)[0]}`)?.focus();
      return;
    }
    const m = t.recap;
    const text = recap(
      t.recapTitle,
      [
        [
          [m.types, types.map((x) => fl.typeList[x as keyof typeof fl.typeList]).join(", ")],
          [m.quantity, fl.quantityList[qty as keyof typeof fl.quantityList]],
          [m.photos, fl.photosList[photos as keyof typeof fl.photosList]],
        ],
        [
          [m.name, v.name],
          [m.phone, v.phone],
          [m.message, v.message],
        ],
        [[m.from, `${site.url}/${lang}`]],
      ],
      lang === "fr" ? " :" : ":",
    );
    setSentUrl(send(text));
  };

  const errText = (k: string) =>
    errors[k] && (
      <p id={`${id(k)}-err`} className="mt-3 text-[0.875rem] text-[#9b2f2f]">
        {errors[k]}
      </p>
    );

  return (
    <form onSubmit={submit} noValidate className="space-y-8">
      <fieldset {...(errors.types ? { "aria-describedby": `${id("types")}-err` } : {})}>
        <legend className="label">{fl.types}</legend>
        <div className="flex flex-wrap gap-2">
          {TYPES.map((x, i) => (
            <label key={x} className="chip" data-on={types.includes(x)}>
              <input
                id={i === 0 ? id("types") : undefined}
                type="checkbox"
                className="sr-only"
                checked={types.includes(x)}
                onChange={(e) => setTypes((s) => (e.target.checked ? [...s, x] : s.filter((y) => y !== x)))}
              />
              {fl.typeList[x]}
            </label>
          ))}
        </div>
        {errText("types")}
      </fieldset>
      <fieldset>
        <legend className="label">{fl.quantity}</legend>
        <div className="flex flex-wrap gap-2">
          {QTY.map((x, i) => (
            <label key={x} className="chip" data-on={qty === x}>
              <input id={i === 0 ? id("quantity") : undefined} type="radio" name={id("q")} className="sr-only" checked={qty === x} onChange={() => setQty(x)} />
              {fl.quantityList[x]}
            </label>
          ))}
        </div>
        {errText("quantity")}
      </fieldset>
      <fieldset>
        <legend className="label">{fl.photos}</legend>
        <div className="flex flex-wrap gap-2">
          {PHOTOS.map((x) => (
            <label key={x} className="chip" data-on={photos === x}>
              <input type="radio" name={id("p")} className="sr-only" checked={photos === x} onChange={() => setPhotos(x)} />
              {fl.photosList[x]}
            </label>
          ))}
        </div>
        <p className="mt-3 text-[0.8125rem] text-muted">{fl.photosHint}</p>
      </fieldset>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field id={id("name")} label={fl.name} error={errors.name}>
          <input id={id("name")} className="field" value={v.name} onChange={set("name")} autoComplete="name" {...inv("name")} />
        </Field>
        <Field id={id("phone")} label={fl.phone} error={errors.phone}>
          <input id={id("phone")} className="field" type="tel" inputMode="tel" value={v.phone} onChange={set("phone")} autoComplete="tel" {...inv("phone")} />
        </Field>
      </div>
      <Field id={id("message")} label={fl.message} optional={fl.optional}>
        <textarea id={id("message")} className="field min-h-28" value={v.message} onChange={set("message")} placeholder={fl.messagePh} />
      </Field>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
        <button type="submit" className="btn-solid">
          <WhatsAppIcon /> {t.submit}
        </button>
        <a href={`tel:${site.tel}`} className="btn-line text-ink">
          <PhoneIcon /> {d.nav.call}
        </a>
      </div>
      {sentUrl && <Sent text={d.reserve.sent} url={sentUrl} call={d.nav.call} />}
    </form>
  );
}
