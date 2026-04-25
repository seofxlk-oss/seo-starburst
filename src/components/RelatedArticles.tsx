import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import type { InterlinkRef } from "@/lib/blogInterlinks";

interface RelatedArticlesProps {
  related: InterlinkRef[];
  next: InterlinkRef;
}

/**
 * Renders a keyword-anchored "Related reading" grid + a strong "Next read" CTA card.
 * Anchors deliberately match each destination's primary keyword so internal links
 * reinforce that page's topical signal.
 */
export const RelatedArticles = ({ related, next }: RelatedArticlesProps) => {
  return (
    <section aria-labelledby="related-articles-heading" className="mt-14">
      <div className="flex items-center gap-2">
        <BookOpen className="size-5 text-accent" aria-hidden />
        <h2
          id="related-articles-heading"
          className="font-display text-2xl font-extrabold text-foreground sm:text-3xl"
        >
          Related Reading
        </h2>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Continue your SEO research with these related guides for Sri Lankan business owners.
      </p>

      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {related.map((r) => (
          <li key={r.slug}>
            <Link
              to={`/blog/${r.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
            >
              <span className="font-display text-base font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                {r.anchor}
              </span>
              <span className="mt-2 flex-1 text-sm text-muted-foreground">{r.blurb}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                Read guide <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to={`/blog/${next.slug}`}
        aria-label={`Next read: ${next.anchor}`}
        className="group mt-8 flex flex-col gap-3 rounded-3xl border-2 border-accent/40 bg-accent/5 p-6 transition-all hover:border-accent hover:bg-accent/10 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
      >
        <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-gradient text-accent-foreground shadow-glow">
          <Sparkles className="size-5" aria-hidden />
        </div>
        <div className="flex-1">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
            Next Read
          </span>
          <p className="mt-1 font-display text-lg font-extrabold leading-snug text-foreground transition-colors group-hover:text-accent sm:text-xl">
            {next.anchor}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{next.blurb}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 self-start text-sm font-semibold text-accent sm:self-center">
          Continue <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </section>
  );
};
