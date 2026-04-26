import { Link } from "react-router-dom";
import {
  MapPin,
  Search,
  Star,
  ShieldCheck,
  Compass,
  ClipboardList,
  Building2,
  Utensils,
  Scale,
  ShoppingBag,
  Hotel,
  Wrench,
  GraduationCap,
  Sparkles,
  Check,
  Infinity as InfinityIcon,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { orgSchema, websiteSchema, serviceSchema, faqSchema } from "@/lib/schema";
import googleMapVideo from "@/assets/google-map-hero.mp4.asset.json";

const REALITY = [
  {
    tag: "Fact",
    tone: "fact",
    title: "76% of local mobile searches result in a visit within 24 hours",
    body: "Local search is the highest-intent channel in existence. The person searching \"dentist near me\" is not browsing — they need someone today.",
  },
  {
    tag: "Impact",
    tone: "impact",
    title: "The Local 3-Pack takes 80% of all local clicks",
    body: "If you are not in the top three results on Google Maps for your category in your city, you are invisible to the majority of local buyers — even if you have been in business for decades.",
  },
  {
    tag: "Risk",
    tone: "risk",
    title: "Your competitors are optimising while you read this",
    body: "Local search authority compounds over time. Every month without optimisation is a month competitors entrench their position further. The gap only widens.",
  },
  {
    tag: "Impact",
    tone: "impact",
    title: "85% of Sri Lankans discover businesses via Google",
    body: "Sri Lanka's mobile-first population uses Google — particularly Maps — as the primary way to find and evaluate local businesses in every city on the island.",
  },
];

const WHO = [
  {
    icon: Building2,
    type: "Healthcare & Medical",
    desc: "Clinics, dental practices, pharmacies, physiotherapists — patients search the moment they need care.",
    impact: "Healthcare local searches convert at over 30%",
  },
  {
    icon: Utensils,
    type: "Restaurants & Hospitality",
    desc: "Every dining decision in Sri Lanka begins with a Google Maps search. Ranking here is not optional.",
    impact: "92% of diners check Google before visiting",
  },
  {
    icon: Scale,
    type: "Professional Services",
    desc: "Law firms, accountants, consultancies — trust is built before first contact. It starts with visibility.",
    impact: "Page one ranking is a credibility signal",
  },
  {
    icon: ShoppingBag,
    type: "Retail & Showrooms",
    desc: "Furniture, electronics, clothing — foot traffic begins with a Maps search for \"near me\".",
    impact: "28% of local searches end in same-day purchase",
  },
  {
    icon: Hotel,
    type: "Hotels & Guesthouses",
    desc: "From Galle Fort boutiques to Kandy city hotels — travellers find you on Maps, or they don't find you.",
    impact: "Maps drives 40%+ of direct bookings",
  },
  {
    icon: Wrench,
    type: "Trades & Services",
    desc: "Plumbers, electricians, AC repair — emergency searches happen on Google. Be the first answer.",
    impact: "Urgency searches convert at near 100%",
  },
  {
    icon: GraduationCap,
    type: "Education & Training",
    desc: "Tuition centres, language schools, training institutes — parents and students search locally first.",
    impact: "Local education searches growing 35% YoY",
  },
  {
    icon: Sparkles,
    type: "Wellness & Beauty",
    desc: "Spas, salons, gyms, yoga studios — your next client is searching right now.",
    impact: "Repeat visits driven by Maps trust signals",
  },
];

const PILLARS = [
  {
    n: "01",
    when: "Week 1",
    title: "Local Search Audit & Competitive Intelligence",
    body: "Before a single change is made, we conduct a full diagnostic of your local presence — Google Business Profile health, competitor positioning, keyword landscape and ranking gaps specific to your city and category in Sri Lanka.",
  },
  {
    n: "02",
    when: "Week 2",
    title: "Google Business Profile Architecture",
    body: "Your GBP is rebuilt from the ground up — correct primary and secondary categories, keyword-rich business description, full attribute selection, services catalogue, geo-tagged photos, and Q&A seeding. Every signal Google uses to evaluate relevance, addressed.",
  },
  {
    n: "03",
    when: "Week 3",
    title: "Google Maps Ranking Signal Build",
    body: "We implement the prominence signals that push your listing into the 3-Pack — local authority building, NAP consistency across Sri Lankan directories, review acquisition framework design, and proximity optimisation for your target service area.",
  },
  {
    n: "04",
    when: "Week 3–4",
    title: "Reputation Foundation & Review Strategy",
    body: "We design and install a sustainable system for generating authentic Google reviews — the most powerful ranking factor in local search. You receive a custom review playbook your team can run independently, indefinitely, without us.",
  },
  {
    n: "05",
    when: "Week 4",
    title: "Handover, Documentation & Advisory Session",
    body: "A complete Local Search Health Document — everything we built, why we built it, and exactly how to maintain your rankings without an agency. Plus a 60-minute advisory session walking through your position and answering every question.",
  },
];

const INCLUDED = [
  "Complete Google Business Profile setup or overhaul",
  "Category, attribute and service architecture",
  "Geo-tagged photo strategy and professional upload",
  "Google Maps ranking signal implementation",
  "NAP consistency audit across 30+ Sri Lankan directories",
  "Review acquisition system design and installation",
  "Competitor gap analysis and positioning report",
  "60-minute handover advisory session",
  "Local Search Health Document — full documentation",
  "30-day post-handover email support",
];

const WALK_AWAY = [
  "A fully optimised Google Business Profile that ranks",
  "A clear position in or approaching the Local 3-Pack",
  "A review system your team runs without us",
  "Complete ownership — no dependency on an agency",
  "Full documentation your team can maintain and build on",
  "Visibility that compounds — the longer it stands, the stronger it gets",
  "Customers finding you every day, without spending on ads",
];

const TIMELINE = [
  {
    when: "Week 1–4 · During the engagement",
    title: "The foundations are built",
    body: "Your Google Business Profile is rebuilt. Ranking signals are implemented. Your review system is live and running. Google begins re-evaluating your listing against every competitor in your city.",
  },
  {
    when: "Days 30–60 · The momentum phase",
    title: "Visibility begins climbing",
    body: "Your listing starts ranking for more local queries. New reviews arrive through the system we built. Google Maps position improves. You begin receiving calls and direction requests from people who previously had no idea you existed.",
  },
  {
    when: "Days 60–90 · The breakthrough",
    title: "Local 3-Pack entry",
    body: "For most businesses in Sri Lanka's market, 60 to 90 days is when the 3-Pack position is reached. This is where the step-change in inbound calls, clicks, and walk-ins becomes undeniable — the 80% of local searchers who only click the top three results can now find you.",
  },
  {
    when: "Month 6 and beyond · The compounding years",
    title: "Your investment keeps working — without you touching it",
    body: "This is what separates local SEO from every other marketing channel. The foundations we built continue accumulating authority. Each new review strengthens your position. Each month in the 3-Pack makes your ranking harder for competitors to displace.",
  },
];

const WHY_NOW = [
  {
    n: "01",
    title: "Authority compounds over time",
    body: "A Google Business Profile optimised and accumulating reviews for 12 months is structurally stronger than one optimised today — even if built identically. Time in market is a ranking signal. Starting sooner is starting stronger.",
  },
  {
    n: "02",
    title: "Competitors are entering the market every month",
    body: "Categories that had two optimised competitors 18 months ago now have eight. The businesses that hold top positions now will hold them longest — and the cost to displace them rises every month they hold rank.",
  },
  {
    n: "03",
    title: "The cost of delay is measured in customers lost",
    body: "Every day your business is invisible in local search, a competitor receives a customer that should have been yours. There is no neutral position — you are either capturing local demand or someone else is.",
  },
];

const FAQS = [
  {
    q: "What is Google Map Optimization and how is it different from regular SEO?",
    a: "Google Map Optimization is the discipline of ranking your business in Google Maps and the Local 3-Pack — the boxed map results that appear at the top of local searches. It is fundamentally different from traditional website SEO. Map rankings are driven by your Google Business Profile, proximity to the searcher, prominence signals like reviews and citations, and the architecture of your listing. SeoFX builds all of this once, correctly, so your business shows up when nearby customers search for what you offer.",
  },
  {
    q: "Why is this a one-time investment and not a monthly retainer?",
    a: "Because local search authority is a built asset — not a campaign. Once your Google Business Profile is properly architected, ranking signals are implemented, and a review acquisition system is in place, the work compounds on its own. We do the heavy strategic and technical work in one focused engagement, hand it over with full documentation, and your team maintains it. No agency dependency. No monthly bill that never ends.",
  },
  {
    q: "How much does Google Map Optimization in Sri Lanka cost?",
    a: "The Foundation Package starts from LKR 35,000 as a one-time investment — covering Google Business Profile rebuild, category and attribute architecture, NAP citation cleanup across 30+ Sri Lankan directories, ranking signal implementation, review system installation, a Local Search Health Document, and a 60-minute advisory session. Larger or multi-location businesses may require a custom scope, which we confirm during the discovery call.",
  },
  {
    q: "How long before I see ranking improvements on Google Maps?",
    a: "The build itself takes approximately four weeks. Initial ranking improvements typically begin within 30–60 days as Google re-evaluates your listing. For most Sri Lankan businesses in moderate-competition categories, the Local 3-Pack position is reached between days 60 and 90. From month six onwards, your authority continues compounding — without further investment from you.",
  },
  {
    q: "Will my listing keep ranking after the engagement ends?",
    a: "Yes — that is the entire point. Local search authority does not depreciate the way ad spend does. Once a Google Business Profile is correctly built, citations are aligned, and a review system is generating fresh reviews, the listing continues to gain strength on its own. Many businesses we optimised years ago are still ranking today without any further work from us.",
  },
  {
    q: "Do you also offer Google My Business (GMB) profile management?",
    a: "Google My Business was renamed to Google Business Profile (GBP), but the work is the same. We handle the complete profile setup, optimisation, content architecture, photo strategy, services catalogue, Q&A seeding, and review framework. After handover, your team manages day-to-day posts and review responses — using the playbook we provide.",
  },
  {
    q: "What if my business has multiple locations in Sri Lanka?",
    a: "Multi-location businesses require an extended engagement scope. Each location needs its own optimised profile, location-specific content, individual citation alignment, and a per-location review strategy. We confirm pricing and timeline for multi-location work during the discovery call — typically running between two and three months end-to-end.",
  },
  {
    q: "Is this only for Colombo businesses, or does it work everywhere in Sri Lanka?",
    a: "It works for any Sri Lankan business serving a local or regional customer base — Colombo, Kandy, Galle, Negombo, Jaffna, Matara, Kurunegala, Anuradhapura, Trincomalee, Batticaloa and beyond. In fact, businesses outside Colombo often see faster results because the local competition is less mature.",
  },
];

const GoogleMapOptimization = () => {
  const svcSchema = serviceSchema({
    name: "Google Map Optimization Sri Lanka",
    description:
      "One-time Google Map Optimization and Google Business Profile consultancy for Sri Lankan businesses. Rank in the Local 3-Pack, capture local demand, and build visibility that compounds for years — without a monthly retainer.",
    url: `${SITE.url}/google-map-optimization`,
    serviceType: "Local Search Optimization",
    offers: [
      {
        name: "Google Map Optimization — Foundation Package",
        url: `${SITE.url}/google-map-optimization`,
        price: "35000",
        priceCurrency: "LKR",
        description:
          "One-time Google Business Profile rebuild, Maps ranking signal implementation, citation alignment, review system installation, and full documentation.",
      },
    ],
  });

  const faqJsonLd = faqSchema(FAQS, {
    pageUrl: `${SITE.url}/google-map-optimization`,
  });

  return (
    <Layout>
      <SEO
        title="Google Map Optimization Sri Lanka | Google My Business SEO Services"
        description="Boost your local visibility with Google Map Optimization in Sri Lanka. Rank higher on Google Maps, optimize your Google My Business profile, get more calls, traffic & local leads."
        canonical="/google-map-optimization"
        keywords="google map optimization sri lanka, google maps seo sri lanka, google my business sri lanka, google business profile sri lanka, local seo sri lanka, gmb optimization sri lanka, local 3-pack sri lanka, near me seo sri lanka"
        jsonLd={[orgSchema(), websiteSchema(), svcSchema, faqJsonLd]}
      />

      <Breadcrumbs items={[{ label: "Google Map Optimization" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero py-20 sm:py-28">
        {/* Background video */}
        <video
          src={googleMapVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        {/* Dark overlay for text legibility */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-hero via-hero/85 to-hero/40"
          aria-hidden
        />
        {/* Google-colored ambient glows */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-google-blue/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-10 h-[400px] w-[400px] rounded-full bg-google-red/15 blur-3xl"
          aria-hidden
        />
        {/* Google brand accent strip */}
        <div className="pointer-events-none absolute top-0 left-0 h-[3px] w-full" aria-hidden>
          <div className="flex h-full w-full">
            <div className="h-full flex-1 bg-google-blue" />
            <div className="h-full flex-1 bg-google-red" />
            <div className="h-full flex-1 bg-google-yellow" />
            <div className="h-full flex-1 bg-google-green" />
          </div>
        </div>

        <div className="container-tight relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-google-red" />
              Google Map Optimization · Sri Lanka
            </span>
            <h1 className="mt-7 max-w-2xl font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl">
              One investment.{" "}
              <span className="text-white/50">Years of</span>{" "}
              <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                Google Maps
              </span>{" "}
              visibility.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              SeoFX is Sri Lanka's local search consultancy. We rebuild your Google Business Profile,
              install the ranking signals that win the Local 3-Pack, and hand you a system that keeps
              generating customers — without a monthly retainer.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact-us">Book a Discovery Call</Link>
              </Button>
              <a
                href="#investment"
                className="text-sm font-medium text-white/60 underline-offset-4 hover:text-accent hover:underline"
              >
                See the one-time investment ↓
              </a>
            </div>
          </div>

          {/* Mock Google Maps 3-Pack card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-google-blue/30 via-transparent to-google-red/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-google-red" />
                <span className="size-2.5 rounded-full bg-google-yellow" />
                <span className="size-2.5 rounded-full bg-google-green" />
                <div className="ml-3 flex-1 truncate rounded-full border border-border bg-soft px-3 py-1 text-[11px] text-muted-foreground">
                  <span className="font-medium text-foreground">google.com/maps</span>
                  <span className="ml-1">— "best dentist in Colombo"</span>
                </div>
              </div>
              <div className="bg-soft p-3">
                <p className="px-1.5 pb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Local 3-Pack · Colombo
                </p>
                {[
                  { rank: "1", name: "Your Business · SeoFX optimised", rating: "4.9", reviews: "248", live: true },
                  { rank: "2", name: "Competitor A", rating: "4.6", reviews: "112", live: false },
                  { rank: "3", name: "Competitor B", rating: "4.4", reviews: "87", live: false },
                ].map((b) => (
                  <div
                    key={b.rank}
                    className={
                      "flex items-start gap-3 rounded-lg border-b border-border/60 bg-white p-3 last:border-b-0 " +
                      (b.live ? "ring-2 ring-google-blue/40" : "")
                    }
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-google-red text-xs font-bold text-white">
                      <MapPin className="size-4" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-semibold text-foreground">{b.name}</p>
                        {b.live && (
                          <span className="shrink-0 rounded-full bg-google-green/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-google-green">
                            #1
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                        <span className="font-semibold text-foreground">{b.rating}</span>
                        <Star className="size-3 fill-google-yellow text-google-yellow" aria-hidden />
                        <span>({b.reviews})</span>
                        <span className="mx-1.5 text-border">·</span>
                        <span>Dental clinic · Open now</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container-tight relative mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          {[
            { num: "80%", label: "Of local clicks go to the top 3 Maps results" },
            { num: "76%", label: "Of local mobile searches lead to a visit in 24h" },
            { num: "85%", label: "Of Sri Lankans discover businesses via Google" },
            { num: "1×", label: "Built once. Compounds for years." },
          ].map((s) => (
            <div key={s.label} className="border-l border-white/10 pl-5 first:border-l-0 first:pl-0 sm:pl-6">
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">{s.num}</div>
              <div className="mt-1.5 text-xs leading-relaxed text-white/40 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-b border-border bg-soft py-20 sm:py-24">
        <div className="container-tight max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            The truth about local search
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Someone in your city is searching for exactly what you offer right now.{" "}
            <span className="text-muted-foreground">Can they find you?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            If your business does not appear in Google Maps when a nearby customer searches —{" "}
            that customer goes to your competitor.{" "}
            <strong className="font-semibold text-foreground">Not because they prefer your competitor. Simply because they found them first.</strong>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Local search visibility is not a marketing luxury. It is the most fundamental piece of
            commercial infrastructure a Sri Lankan business can have today. And unlike advertising,
            you only have to build it once.
          </p>
        </div>
      </section>

      {/* REALITY */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-tight grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Why this matters
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              What Google Maps actually means for your revenue
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The businesses at the top of Google Maps are not there by chance. They are there
              because someone made deliberate, strategic decisions about how their local presence
              is structured.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The opportunity: those decisions do not require an ongoing agency. They require one
              expert consultation, executed precisely, once — and the results compound indefinitely.
            </p>
          </div>
          <div className="space-y-3">
            {REALITY.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-display text-base font-bold text-foreground">{r.title}</h4>
                  <span
                    className={
                      "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider " +
                      (r.tone === "fact"
                        ? "bg-accent/10 text-accent"
                        : r.tone === "impact"
                        ? "bg-primary/10 text-primary"
                        : "bg-google-red/10 text-google-red")
                    }
                  >
                    {r.tag}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="bg-hero py-20 sm:py-24">
        <div className="container-tight">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Every business · Every category
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            If customers can walk through your door, they should be able to find you on Google.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/45">
            This is not industry-specific advice. Local search visibility is the baseline
            requirement for any business that serves a local market — in any city, in any category.
          </p>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WHO.map((w) => (
              <div
                key={w.type}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <w.icon className="size-7 text-accent" aria-hidden />
                <h3 className="mt-4 font-display text-sm font-bold text-white">{w.type}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">{w.desc}</p>
                <p className="mt-4 border-t border-white/10 pt-3 text-xs text-white/35">
                  <span className="font-semibold text-accent">{w.impact}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-white/10 bg-primary/10 p-7">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            <p className="text-sm leading-relaxed text-white/65 sm:text-base">
              If you are reading this and wondering whether Google Map Optimization applies to your
              business —{" "}
              <strong className="font-semibold text-white">it does.</strong>{" "}
              The only businesses that cannot benefit from Google Maps visibility are those with no
              physical or service-area presence. Every other business is quietly leaving customers
              on the table without it.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-soft py-20 sm:py-24">
        <div className="container-tight">
          <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">The work</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                One month of focused expert work. Built to last.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              We do not sell you an ongoing dependency. We come in, do the work correctly, and build
              a local search presence that works for your business every day without us. Here is
              exactly what that looks like.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            {PILLARS.map((p, i) => (
              <div
                key={p.n}
                className={
                  "grid items-center gap-6 p-7 transition-colors hover:bg-soft sm:grid-cols-[60px_1fr_auto] sm:p-8 " +
                  (i < PILLARS.length - 1 ? "border-b border-border" : "")
                }
              >
                <div className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {p.n}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {p.when}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="bg-hero py-20 sm:py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
              The investment
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Pay once. Rank for years.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/45">
              No retainer. No monthly fee. No lock-in. One investment, one month of work, a local
              search presence that compounds in value every single day after we are done.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl bg-card shadow-elegant">
            <div className="grid items-center gap-8 border-b border-border bg-hero p-9 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white/35">
                  SeoFX Local Search Consultancy
                </p>
                <h3 className="mt-2.5 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  The Foundation Package
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">
                  Everything a Sri Lankan business needs to establish dominant, lasting Google Maps
                  visibility — done once, done correctly, built to work without ongoing agency
                  involvement.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent">
                  <Check className="size-3.5" /> One-Time Investment · No Monthly Fees
                </span>
              </div>
              <div className="lg:text-right">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/35">
                  One-time investment from
                </p>
                <p className="mt-1 font-display text-5xl font-extrabold text-white">
                  <span className="text-2xl align-top font-semibold">LKR </span>35,000
                </p>
                <p className="mt-1.5 text-xs text-white/35">
                  No monthly fees · No retainer · No surprises
                </p>
              </div>
            </div>

            <div className="grid gap-12 p-9 sm:p-12 lg:grid-cols-2">
              <div>
                <h4 className="font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  What is included
                </h4>
                <ul className="mt-5 space-y-3.5">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check className="size-3 text-accent" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  What you walk away with
                </h4>
                <ul className="mt-5 space-y-3.5">
                  {WALK_AWAY.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check className="size-3 text-accent" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-lg border-l-4 border-primary bg-soft p-5 text-sm leading-relaxed text-muted-foreground">
                  <strong className="font-semibold text-foreground">Our commitment:</strong> we do
                  not consider the engagement complete until your Google Business Profile is
                  verified, fully optimised, and indexed — regardless of how long that process
                  takes on Google's side.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-5 border-t border-border bg-soft px-9 py-7 sm:px-12">
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">
                  Ready to invest once in your business's long-term local visibility?
                </strong>{" "}
                Book a 20-minute discovery call. We review your current position and confirm this
                is the right fit before you commit to anything.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact-us">
                  Book Discovery Call <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-tight">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            What happens after
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            The compounding return on a one-time investment
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Local search authority does not depreciate. Unlike advertising — which stops the moment
            you stop paying — a well-built local presence grows stronger with every passing month.
          </p>

          <div className="relative mt-14 border-l border-border pl-8 sm:pl-10">
            {TIMELINE.map((t, i) => (
              <div key={t.title} className={i < TIMELINE.length - 1 ? "pb-12" : ""}>
                <span
                  className="absolute -left-2 mt-1 inline-block size-4 rounded-full border-[1.5px] border-muted-foreground bg-background"
                  aria-hidden
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  {t.when}
                </p>
                <h4 className="mt-2 font-display text-xl font-bold text-foreground">{t.title}</h4>
                <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
                {i === TIMELINE.length - 1 && (
                  <div className="mt-5 flex max-w-xl items-start gap-4 rounded-xl bg-hero p-6">
                    <InfinityIcon className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden />
                    <p className="text-sm leading-relaxed text-white/70">
                      A business we optimise today will still be benefiting from that same work{" "}
                      <strong className="font-semibold text-white">
                        three, five, ten years from now
                      </strong>{" "}
                      — with no further investment required. That is the nature of local search
                      authority. It is an asset on your balance sheet, not a marketing expense.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="bg-soft py-20 sm:py-24">
        <div className="container-tight grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Why act now
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              The window to rank easily is closing
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Sri Lanka's local search landscape is maturing fast. Three years ago, most categories
              in most cities had almost no optimised competition. Today, the most competitive
              Colombo markets are genuinely difficult to enter.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              In two years, the same will be true of Kandy, Galle, Negombo and beyond. The
              businesses that move now — even in moderately competitive markets — will entrench
              positions that become exponentially harder and more expensive to displace over time.
            </p>
          </div>
          <div className="space-y-4">
            {WHY_NOW.map((w) => (
              <div
                key={w.n}
                className="flex gap-5 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-card"
              >
                <div className="font-display text-3xl font-extrabold text-border">{w.n}</div>
                <div>
                  <h4 className="font-display text-base font-bold text-foreground">{w.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WITHOUT */}
      <section className="border-t border-border bg-background py-20 sm:py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              What does a business look like without local search visibility?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Not failed. Not closed. Just quietly leaving significant revenue on the table, every
              single day, without knowing it.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl overflow-hidden rounded-2xl md:grid-cols-3">
            <div className="bg-soft p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                Today — without it
              </p>
              <h4 className="mt-3 font-display text-base font-bold text-foreground">
                Invisible to the majority of local buyers
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A potential customer searches "your category + your city" on Google. Your business
                does not appear. They call your competitor. They may never know you exist. This is
                happening dozens of times every week.
              </p>
            </div>
            <div className="bg-google-red/5 p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-google-red">
                The real cost
              </p>
              <h4 className="mt-3 font-display text-base font-bold text-foreground">
                The numbers are uncomfortable
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                If your average customer is worth LKR 5,000 and you are missing just 10 customers a
                month from local search — that is{" "}
                <strong className="font-semibold">LKR 600,000 a year</strong> going to a competitor.
                The investment to stop that is LKR 35,000. Once. Ever.
              </p>
            </div>
            <div className="bg-soft p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                With SeoFX — for years
              </p>
              <h4 className="mt-3 font-display text-base font-bold text-foreground">
                Every local search becomes an opportunity
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Once your local presence is built correctly, you capture that demand permanently.
                No ad budget required. No monthly agency fee. Consistent, compounding visibility
                that turns local searches into customers, year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-soft py-20 sm:py-24">
        <div className="container-tight max-w-3xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-primary">
            Frequently asked
          </p>
          <h2 className="mt-4 text-center font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Google Map Optimization questions, answered
          </h2>

          <div className="mt-12 space-y-4">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-6 open:shadow-card"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-bold text-foreground">
                  {f.q}
                  <span className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-hero py-24 text-center sm:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
        <div className="container-tight relative max-w-3xl">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Your business deserves to be found.{" "}
            <span className="text-white/40">Let's make it visible.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/45 sm:text-lg">
            One conversation. We review where you stand today, show you exactly what needs to be
            done, and give you an honest assessment of what is possible. No sales pressure. No
            obligation.
          </p>

          <div className="mt-12">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/30">
              One-time investment from
            </p>
            <p className="mt-2 font-display text-6xl font-extrabold text-white sm:text-7xl">
              LKR 35,000
            </p>
            <p className="mt-2 text-sm text-white/30">
              One month of work · Lifetime of results · Zero monthly fees
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3.5">
            <Button asChild size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90">
              <Link to="/contact-us">Book a Discovery Call →</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href={`mailto:${SITE.email}`}>Send us a message</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GoogleMapOptimization;
