/**
 * Logo typographique provisoire de Fripes Merveilles (pas de logo connu à ce jour) :
 * un petit cintre au trait et une étoile qui scintille au bout du crochet, « FRIPES MERVEILLES » en capitales
 * de style rétro (Fraunces), « Friperie · Amiens » en petit. Le texte prend la couleur courante (currentColor).
 * Pour le remplacer : changer ce composant, public/logo.svg et app/icon.svg (même dessin).
 */
export const HOOK = "M24 17.5v-2.2c2.6-.3 4.3-2.2 4.3-4.6A4.3 4.3 0 0 0 24 6.4a4.3 4.3 0 0 0-4.2 3.3";
export const BODY = "M24 17.5 5.6 32.3c-1.5 1.2-.7 3.6 1.2 3.6h34.4c1.9 0 2.7-2.4 1.2-3.6L24 17.5Z";
export const STAR = "M0-5c.4 3.4 1.6 4.6 5 5-3.4.4-4.6 1.6-5 5-.4-3.4-1.6-4.6-5-5 3.4-.4 4.6-1.6 5-5Z";

export function Emblem({ className = "", mono = false }: { className?: string; mono?: boolean }) {
  return (
    <svg viewBox="0 0 48 44" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <g transform="translate(0 4)">
        <path d={HOOK} />
        <path d={BODY} />
      </g>
      <path d={STAR} transform="translate(35 6)" fill={mono ? "currentColor" : "var(--color-mustard, #D9A441)"} stroke="none" />
    </svg>
  );
}

export function Logo({ className = "", title, mono = false, tagline = true }: { className?: string; title?: string; mono?: boolean; tagline?: boolean }) {
  return (
    <svg viewBox={tagline ? "0 0 320 94" : "0 0 320 76"} className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <g transform="translate(140 2) scale(0.84)" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d={HOOK} />
        <path d={BODY} />
      </g>
      <path d={STAR} transform="translate(171.5 6) scale(1.05)" fill={mono ? "currentColor" : "var(--color-mustard, #D9A441)"} />
      <text x="160" y="66" textAnchor="middle" fill="currentColor" style={{ fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif", fontWeight: 500, fontSize: 25, letterSpacing: "0.1em" }}>
        FRIPES MERVEILLES
      </text>
      {tagline && (
        <text x="160" y="88" textAnchor="middle" fill="currentColor" opacity="0.78" style={{ fontFamily: "var(--font-jost), Jost, 'Helvetica Neue', Arial, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.34em" }}>
          FRIPERIE · AMIENS
        </text>
      )}
    </svg>
  );
}
