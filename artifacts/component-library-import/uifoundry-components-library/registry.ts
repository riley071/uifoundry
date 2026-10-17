import type { CategoryId, CategoryMeta, ComponentItem } from "./types";

import {
  HeroSplitProduct, HeroCenteredType, HeroSearchFirst, HeroBentoCollage,
  HeroVideoPoster, HeroAnnouncement, HeroStatsUnder, HeroDarkImmersive, HeroAsymmetricEditorial,
} from "./sections/heroes";
import {
  NavStickyGlass, NavFloatingPill, NavMegaMenu, NavMinimalCta, NavUnderlineActive,
  NavSidebarTrigger, NavDarkSolid, NavSearchCentric, NavTwoTier,
} from "./sections/navbars";
import {
  FooterFourColumn, FooterCenteredMinimal, FooterCtaLinks, FooterNewsletterHeavy,
  FooterSocialStrip, FooterSitemapDense, FooterBrandStory, FooterAppDownload, FooterLegalFirst,
} from "./sections/footers";
import {
  PricingTwoPlanToggle, PricingThreeTier, PricingComparisonTable, PricingSingleFeatured,
  PricingUsageSlider, PricingDarkPremium, PricingChecklistHeavy, PricingAnnualOnly, PricingWithGuarantees,
} from "./sections/pricing";
import {
  FeatureBentoGrid, FeatureIconGrid, FeatureAlternatingRows, FeatureNumberedSteps,
  FeatureQuotePlus, FeatureTabsPanel, FeatureTimeline, FeatureComparisonColumns, FeatureLogoPlus,
} from "./sections/features";
import {
  TestimonialLargeQuote, TestimonialCarousel, TestimonialAvatarStack, TestimonialLogoMarquee,
  TestimonialVideoPlaceholder, TestimonialGridSix, TestimonialBeforeAfter, TestimonialWall, TestimonialMetricQuote,
} from "./sections/testimonials";
import {
  CtaDarkBand, CtaSplit, CtaFloatingCard, CtaAnnouncementBar, CtaNewsletterInline,
  CtaDualChoice, CtaSoftUrgency, CtaWithIllustration, CtaStickyBottom,
} from "./sections/ctas";
import {
  FormContactBlock, FormNewsletterCompact, FormMultiStep, FormSearchFilters, FormLoginCard,
  FormSignupBenefits, FormFileDropzone, FormInlineValidation, FormPreferencesToggles,
} from "./sections/forms";
import {
  CardProduct, CardBlog, CardPricingMini, CardFeatureIcon, CardTeamMember,
  CardStat, CardEmptyState, CardHorizontal, CardTilt,
} from "./sections/cards";
import {
  UtilSpinner, UtilSkeleton, UtilProgress, UtilToast, UtilEmpty,
  UtilModalShell, UtilTooltip, UtilBadges, UtilDividerLabel,
} from "./sections/utilities";

export const categories: CategoryMeta[] = [
  { id: "heroes", title: "Heroes", description: "Opening sections with clear promise and CTA" },
  { id: "navbars", title: "Navigation", description: "Headers, sticky bars, mega menus" },
  { id: "footers", title: "Footers", description: "Closing bands, sitemaps, newsletter" },
  { id: "pricing", title: "Pricing", description: "Plans, toggles, comparison tables" },
  { id: "features", title: "Features", description: "Bento, steps, timelines, comparisons" },
  { id: "testimonials", title: "Testimonials", description: "Quotes, logos, social proof" },
  { id: "ctas", title: "CTAs", description: "Bands, dual choice, sticky bars" },
  { id: "forms", title: "Forms", description: "Contact, auth, filters, toggles" },
  { id: "cards", title: "Cards", description: "Product, blog, stats, tilt" },
  { id: "utilities", title: "Utilities", description: "Loaders, toasts, badges, shells" },
];

function src(name: string, body: string) {
  return `// ${name} — React + Tailwind (UIFoundry)
// Sample content is illustrative. Adapt tokens to your brand.

${body}
`;
}

export const componentRegistry: ComponentItem[] = [
  // ——— Heroes (9) ———
  {
    id: "hero-split-product",
    category: "heroes",
    title: "Split product",
    description: "Headline and dual CTA on the left; floating product mockup on the right with soft glow.",
    tags: ["split", "product", "cta"],
    isPremium: false,
    a11yNotes: "Primary and secondary links are focusable; mockup is decorative.",
    frame: { defaultBg: "light", minHeight: 380 },
    Component: HeroSplitProduct,
    source: src("HeroSplitProduct", `export function HeroSplitProduct() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">
            Open a layout. Test it. Take the code.
          </h1>
          <p className="mt-5 max-w-md text-slate-600">Every section runs live in the browser.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#start" className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white">Browse sections</a>
            <a href="#docs" className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700">View source model</a>
          </div>
        </div>
        {/* product mockup */}
      </div>
    </section>
  );
}`),
  },
  {
    id: "hero-centered-type",
    category: "heroes",
    title: "Centered typographic",
    description: "Large Syne headline, short subcopy, single primary button and text link. Soft radial glow.",
    tags: ["centered", "type", "minimal"],
    frame: { defaultBg: "light", minHeight: 360 },
    a11yNotes: "Single clear primary action; secondary is a text link.",
    Component: HeroCenteredType,
    source: src("HeroCenteredType", `export function HeroCenteredType() { /* centered headline + CTA */ }`),
  },
  {
    id: "hero-search-first",
    category: "heroes",
    title: "Search-first",
    description: "Travel / real-estate pattern: location, dates, guests, and a strong search button.",
    tags: ["search", "travel", "form"],
    frame: { defaultBg: "light", minHeight: 320 },
    a11yNotes: "Each field has a visible label; form submit is prevented in the sample.",
    Component: HeroSearchFirst,
    source: src("HeroSearchFirst", `export function HeroSearchFirst() { /* search form hero */ }`),
  },
  {
    id: "hero-bento-collage",
    category: "heroes",
    title: "Bento collage",
    description: "Headline left; overlapping image/text cards on the right with gentle hover lift.",
    tags: ["bento", "collage", "hover"],
    isPremium: true,
    frame: { defaultBg: "light", minHeight: 380 },
    a11yNotes: "Cards remain readable without hover; motion is CSS-only.",
    Component: HeroBentoCollage,
    source: src("HeroBentoCollage", `export function HeroBentoCollage() { /* bento hero */ }`),
  },
  {
    id: "hero-video-poster",
    category: "heroes",
    title: "Video / poster",
    description: "Full-bleed dark poster, decorative play control, headline and CTA in the lower third.",
    tags: ["dark", "poster", "video"],
    frame: { defaultBg: "dark", minHeight: 420 },
    a11yNotes: "Play control is decorative in the sample; label it when wiring real media.",
    Component: HeroVideoPoster,
    source: src("HeroVideoPoster", `export function HeroVideoPoster() { /* dark poster hero */ }`),
  },
  {
    id: "hero-announcement",
    category: "heroes",
    title: "Announcement + hero",
    description: "Thin top bar for news, then a classic split content block underneath.",
    tags: ["announcement", "split"],
    frame: { defaultBg: "light", minHeight: 400 },
    a11yNotes: "Announcement link is keyboard reachable.",
    Component: HeroAnnouncement,
    source: src("HeroAnnouncement", `export function HeroAnnouncement() { /* bar + split */ }`),
  },
  {
    id: "hero-stats-under",
    category: "heroes",
    title: "Stats under hero",
    description: "Centered promise and CTA, then a tight row of four large metrics.",
    tags: ["stats", "centered", "metrics"],
    frame: { defaultBg: "light", minHeight: 400 },
    a11yNotes: "Metrics use a description list for structure.",
    Component: HeroStatsUnder,
    source: src("HeroStatsUnder", `export function HeroStatsUnder() { /* stats row */ }`),
  },
  {
    id: "hero-dark-immersive",
    category: "heroes",
    title: "Dark immersive",
    description: "Full brand-950 field, soft violet orbs, white type, single white button.",
    tags: ["dark", "immersive", "orb"],
    isPremium: true,
    frame: { defaultBg: "dark", minHeight: 400 },
    a11yNotes: "Sufficient contrast on white button against brand-950.",
    Component: HeroDarkImmersive,
    source: src("HeroDarkImmersive", `export function HeroDarkImmersive() { /* dark hero */ }`),
  },
  {
    id: "hero-asymmetric-editorial",
    category: "heroes",
    title: "Asymmetric editorial",
    description: "Oversized display type that breaks the grid, supporting copy, vertical media column.",
    tags: ["editorial", "type", "asymmetric"],
    isPremium: true,
    frame: { defaultBg: "light", minHeight: 420 },
    a11yNotes: "Heading hierarchy remains a single h1.",
    Component: HeroAsymmetricEditorial,
    source: src("HeroAsymmetricEditorial", `export function HeroAsymmetricEditorial() { /* editorial */ }`),
  },

  // ——— Navbars (9) ———
  {
    id: "nav-sticky-glass",
    category: "navbars",
    title: "Sticky glass",
    description: "Blurred translucent bar with logo, links, and CTA. Pair with scroll solidification on the live site.",
    tags: ["sticky", "glass", "blur"],
    frame: { defaultBg: "light", minHeight: 80 },
    a11yNotes: "Primary navigation labelled; CTA is a link.",
    Component: NavStickyGlass,
    source: src("NavStickyGlass", `export function NavStickyGlass() { /* sticky glass header */ }`),
  },
  {
    id: "nav-floating-pill",
    category: "navbars",
    title: "Floating pill",
    description: "Centered floating capsule — works on light and dark heroes.",
    tags: ["pill", "floating", "minimal"],
    frame: { defaultBg: "light", minHeight: 100 },
    a11yNotes: "Compact nav; ensure mobile drawer in production.",
    Component: NavFloatingPill,
    source: src("NavFloatingPill", `export function NavFloatingPill() { /* floating pill */ }`),
  },
  {
    id: "nav-mega-menu",
    category: "navbars",
    title: "Mega menu",
    description: "Desktop two-column dropdown with feature cards. Toggle is keyboard expandable.",
    tags: ["mega", "dropdown"],
    isPremium: true,
    frame: { defaultBg: "light", minHeight: 200 },
    a11yNotes: "aria-expanded on the trigger; close on outside click in production.",
    Component: NavMegaMenu,
    source: src("NavMegaMenu", `export function NavMegaMenu() { /* mega menu */ }`),
  },
  {
    id: "nav-minimal-cta",
    category: "navbars",
    title: "Minimal logo + CTA",
    description: "Logo left, single Get started right — maximum calm.",
    tags: ["minimal", "cta"],
    frame: { defaultBg: "light", minHeight: 80 },
    a11yNotes: "One primary action only.",
    Component: NavMinimalCta,
    source: src("NavMinimalCta", `export function NavMinimalCta() { /* minimal */ }`),
  },
  {
    id: "nav-underline-active",
    category: "navbars",
    title: "Underline active",
    description: "Horizontal links with a solid underline on the current page.",
    tags: ["underline", "active"],
    frame: { defaultBg: "light", minHeight: 80 },
    a11yNotes: "aria-current on the active item.",
    Component: NavUnderlineActive,
    source: src("NavUnderlineActive", `export function NavUnderlineActive() { /* underline nav */ }`),
  },
  {
    id: "nav-sidebar-trigger",
    category: "navbars",
    title: "Sidebar trigger",
    description: "Top bar with menu button that reveals a simple slide list — docs pattern.",
    tags: ["sidebar", "docs", "mobile"],
    frame: { defaultBg: "light", minHeight: 160 },
    a11yNotes: "Button has aria-expanded and aria-label.",
    Component: NavSidebarTrigger,
    source: src("NavSidebarTrigger", `export function NavSidebarTrigger() { /* sidebar trigger */ }`),
  },
  {
    id: "nav-dark-solid",
    category: "navbars",
    title: "Dark solid",
    description: "brand-950 bar, muted links, gradient CTA.",
    tags: ["dark", "solid"],
    frame: { defaultBg: "dark", minHeight: 80 },
    a11yNotes: "White text on brand-950 meets contrast.",
    Component: NavDarkSolid,
    source: src("NavDarkSolid", `export function NavDarkSolid() { /* dark nav */ }`),
  },
  {
    id: "nav-search-centric",
    category: "navbars",
    title: "Search-centric",
    description: "Logo, large center search field, account chip.",
    tags: ["search", "header"],
    frame: { defaultBg: "light", minHeight: 80 },
    a11yNotes: "Search input has a visible accessible name.",
    Component: NavSearchCentric,
    source: src("NavSearchCentric", `export function NavSearchCentric() { /* search nav */ }`),
  },
  {
    id: "nav-two-tier",
    category: "navbars",
    title: "Two-tier",
    description: "Thin utility bar (sign in / language) over the main navigation row.",
    tags: ["utility", "two-tier"],
    frame: { defaultBg: "light", minHeight: 100 },
    a11yNotes: "Two landmark regions; keep utility links secondary.",
    Component: NavTwoTier,
    source: src("NavTwoTier", `export function NavTwoTier() { /* two-tier */ }`),
  },

  // ——— Footers (9) ———
  {
    id: "footer-four-column",
    category: "footers",
    title: "Four-column classic",
    description: "Brand blurb, Product, Resources, newsletter field.",
    tags: ["classic", "newsletter"],
    frame: { defaultBg: "light", minHeight: 280 },
    a11yNotes: "Newsletter input labelled; submit is illustrative.",
    Component: FooterFourColumn,
    source: src("FooterFourColumn", `export function FooterFourColumn() { /* 4-col footer */ }`),
  },
  {
    id: "footer-centered-minimal",
    category: "footers",
    title: "Centered minimal",
    description: "Logo, short link row, copyright only.",
    tags: ["minimal", "centered"],
    frame: { defaultBg: "light", minHeight: 160 },
    a11yNotes: "Footer nav labelled.",
    Component: FooterCenteredMinimal,
    source: src("FooterCenteredMinimal", `export function FooterCenteredMinimal() { /* minimal footer */ }`),
  },
  {
    id: "footer-cta-links",
    category: "footers",
    title: "CTA + links",
    description: "Dark band with headline and button, then a compact link row.",
    tags: ["cta", "dark"],
    frame: { defaultBg: "light", minHeight: 280 },
    a11yNotes: "Strong contrast on the dark band CTA.",
    Component: FooterCtaLinks,
    source: src("FooterCtaLinks", `export function FooterCtaLinks() { /* cta footer */ }`),
  },
  {
    id: "footer-newsletter-heavy",
    category: "footers",
    title: "Newsletter heavy",
    description: "Large email form with honest disabled submit, compact legal links.",
    tags: ["newsletter"],
    frame: { defaultBg: "light", minHeight: 260 },
    a11yNotes: "Submit disabled with clear coming-soon state.",
    Component: FooterNewsletterHeavy,
    source: src("FooterNewsletterHeavy", `export function FooterNewsletterHeavy() { /* newsletter footer */ }`),
  },
  {
    id: "footer-social-strip",
    category: "footers",
    title: "Social strip",
    description: "Compact copyright, social text links, legal links.",
    tags: ["social", "compact"],
    frame: { defaultBg: "light", minHeight: 100 },
    a11yNotes: "Text links preferred over icon-only for clarity in the sample.",
    Component: FooterSocialStrip,
    source: src("FooterSocialStrip", `export function FooterSocialStrip() { /* social strip */ }`),
  },
  {
    id: "footer-sitemap-dense",
    category: "footers",
    title: "Sitemap dense",
    description: "Five columns of small links for large product sites.",
    tags: ["sitemap", "dense"],
    frame: { defaultBg: "light", minHeight: 240 },
    a11yNotes: "Column headings are plain text, not fake buttons.",
    Component: FooterSitemapDense,
    source: src("FooterSitemapDense", `export function FooterSitemapDense() { /* sitemap */ }`),
  },
  {
    id: "footer-brand-story",
    category: "footers",
    title: "Brand story",
    description: "Large Syne wordmark, short manifesto, links on brand-950.",
    tags: ["brand", "dark", "manifesto"],
    isPremium: true,
    frame: { defaultBg: "dark", minHeight: 280 },
    a11yNotes: "Manifesto is a paragraph, not a heading overload.",
    Component: FooterBrandStory,
    source: src("FooterBrandStory", `export function FooterBrandStory() { /* brand story */ }`),
  },
  {
    id: "footer-app-download",
    category: "footers",
    title: "App download",
    description: "Store badges and QR placeholder — clearly illustrative.",
    tags: ["app", "download"],
    frame: { defaultBg: "light", minHeight: 180 },
    a11yNotes: "Badges are spans, not fake store links.",
    Component: FooterAppDownload,
    source: src("FooterAppDownload", `export function FooterAppDownload() { /* app footer */ }`),
  },
  {
    id: "footer-legal-first",
    category: "footers",
    title: "Legal-first",
    description: "Privacy and terms prominent; free-tier note and copyright.",
    tags: ["legal", "compliance"],
    frame: { defaultBg: "light", minHeight: 120 },
    a11yNotes: "Legal links first in reading order.",
    Component: FooterLegalFirst,
    source: src("FooterLegalFirst", `export function FooterLegalFirst() { /* legal footer */ }`),
  },

  // ——— Pricing (9) ———
  {
    id: "pricing-two-plan-toggle",
    category: "pricing",
    title: "Two-plan billing toggle",
    description: "Quarterly / Yearly switch with save badge; Pro and Pro+ with Most complete.",
    tags: ["toggle", "yearly", "two-plan"],
    isPremium: true,
    frame: { defaultBg: "light", minHeight: 480 },
    a11yNotes: "Billing switch uses role=switch; checkout buttons disabled honestly.",
    Component: PricingTwoPlanToggle,
    source: src("PricingTwoPlanToggle", `export function PricingTwoPlanToggle() { /* toggle pricing */ }`),
  },
  {
    id: "pricing-three-tiers",
    category: "pricing",
    title: "Three-tier cards",
    description: "Free / Pro / Team with popular ring on the middle plan.",
    tags: ["three-tier", "cards"],
    frame: { defaultBg: "light", minHeight: 400 },
    a11yNotes: "Disabled CTAs show coming soon.",
    Component: PricingThreeTier,
    source: src("PricingThreeTier", `export function PricingThreeTier() { /* 3 tiers */ }`),
  },
  {
    id: "pricing-comparison-table",
    category: "pricing",
    title: "Comparison table",
    description: "Feature matrix with sticky first column on small screens.",
    tags: ["table", "compare"],
    frame: { defaultBg: "light", minHeight: 320 },
    a11yNotes: "Table headers associate features with plans.",
    Component: PricingComparisonTable,
    source: src("PricingComparisonTable", `export function PricingComparisonTable() { /* matrix */ }`),
  },
  {
    id: "pricing-single-featured",
    category: "pricing",
    title: "Single featured",
    description: "One large plan card plus a dashed Team contact panel.",
    tags: ["single", "featured"],
    frame: { defaultBg: "light", minHeight: 360 },
    a11yNotes: "Contact path is clearly secondary.",
    Component: PricingSingleFeatured,
    source: src("PricingSingleFeatured", `export function PricingSingleFeatured() { /* single plan */ }`),
  },
  {
    id: "pricing-usage-slider",
    category: "pricing",
    title: "Usage slider",
    description: "Seat slider that updates an illustrative monthly total.",
    tags: ["usage", "slider"],
    isPremium: true,
    frame: { defaultBg: "light", minHeight: 360 },
    a11yNotes: "Range input labelled; price is illustrative.",
    Component: PricingUsageSlider,
    source: src("PricingUsageSlider", `export function PricingUsageSlider() { /* usage */ }`),
  },
  {
    id: "pricing-dark-premium",
    category: "pricing",
    title: "Dark premium",
    description: "Two plans on brand-950 with white type and muted borders.",
    tags: ["dark", "premium"],
    frame: { defaultBg: "dark", minHeight: 360 },
    a11yNotes: "Contrast checked for white on brand-950.",
    Component: PricingDarkPremium,
    source: src("PricingDarkPremium", `export function PricingDarkPremium() { /* dark pricing */ }`),
  },
  {
    id: "pricing-checklist-heavy",
    category: "pricing",
    title: "Checklist heavy",
    description: "Long feature list with a single clear price and disabled CTA.",
    tags: ["checklist"],
    frame: { defaultBg: "light", minHeight: 420 },
    a11yNotes: "List is a real ul.",
    Component: PricingChecklistHeavy,
    source: src("PricingChecklistHeavy", `export function PricingChecklistHeavy() { /* checklist */ }`),
  },
  {
    id: "pricing-annual-only",
    category: "pricing",
    title: "Annual only",
    description: "Two yearly cards, no monthly toggle — simpler decision.",
    tags: ["annual", "simple"],
    frame: { defaultBg: "light", minHeight: 340 },
    a11yNotes: "Yearly billing stated in the price line.",
    Component: PricingAnnualOnly,
    source: src("PricingAnnualOnly", `export function PricingAnnualOnly() { /* annual */ }`),
  },
  {
    id: "pricing-with-guarantees",
    category: "pricing",
    title: "With guarantees",
    description: "Two plans plus a strip of cancel / keep code / free tier assurances.",
    tags: ["guarantees", "trust"],
    frame: { defaultBg: "light", minHeight: 380 },
    a11yNotes: "Guarantees are plain text, not fake badges of authority.",
    Component: PricingWithGuarantees,
    source: src("PricingWithGuarantees", `export function PricingWithGuarantees() { /* guarantees */ }`),
  },

  // ——— Features (9) ———
  { id: "feature-bento-grid", category: "features", title: "Bento grid", description: "Mixed card sizes; one large story card plus supporting tiles.", tags: ["bento", "grid"], isPremium: true, frame: { defaultBg: "light", minHeight: 400 }, a11yNotes: "Heading hierarchy preserved inside cards.", Component: FeatureBentoGrid, source: src("FeatureBentoGrid", `export function FeatureBentoGrid() {}`) },
  { id: "feature-icon-grid", category: "features", title: "Icon grid 3×2", description: "Six equal cards with consistent icon treatment.", tags: ["icons", "grid"], frame: { defaultBg: "light", minHeight: 320 }, a11yNotes: "Icons are text initials in the sample for clarity.", Component: FeatureIconGrid, source: src("FeatureIconGrid", `export function FeatureIconGrid() {}`) },
  { id: "feature-alternating-rows", category: "features", title: "Alternating rows", description: "Image / text pairs that flip direction each row.", tags: ["rows", "editorial"], frame: { defaultBg: "light", minHeight: 480 }, a11yNotes: "Reading order stays content-first on mobile.", Component: FeatureAlternatingRows, source: src("FeatureAlternatingRows", `export function FeatureAlternatingRows() {}`) },
  { id: "feature-numbered-steps", category: "features", title: "Numbered steps", description: "01 / 02 / 03 process with short labels.", tags: ["steps", "process"], frame: { defaultBg: "light", minHeight: 240 }, a11yNotes: "Ordered list semantics.", Component: FeatureNumberedSteps, source: src("FeatureNumberedSteps", `export function FeatureNumberedSteps() {}`) },
  { id: "feature-quote-plus", category: "features", title: "Quote + features", description: "Large quote beside three feature bullets.", tags: ["quote", "bullets"], frame: { defaultBg: "light", minHeight: 240 }, a11yNotes: "Blockquote used for the quote.", Component: FeatureQuotePlus, source: src("FeatureQuotePlus", `export function FeatureQuotePlus() {}`) },
  { id: "feature-tabs-panel", category: "features", title: "Tabs + panel", description: "Category chips above a large preview panel.", tags: ["tabs", "panel"], frame: { defaultBg: "light", minHeight: 320 }, a11yNotes: "Wire real tab roles when making interactive.", Component: FeatureTabsPanel, source: src("FeatureTabsPanel", `export function FeatureTabsPanel() {}`) },
  { id: "feature-timeline", category: "features", title: "Timeline", description: "Vertical line with milestones.", tags: ["timeline"], frame: { defaultBg: "light", minHeight: 360 }, a11yNotes: "Milestones are sequential headings.", Component: FeatureTimeline, source: src("FeatureTimeline", `export function FeatureTimeline() {}`) },
  { id: "feature-comparison-columns", category: "features", title: "Comparison columns", description: "Without us vs With us side by side.", tags: ["compare"], frame: { defaultBg: "light", minHeight: 280 }, a11yNotes: "Both columns equally structured.", Component: FeatureComparisonColumns, source: src("FeatureComparisonColumns", `export function FeatureComparisonColumns() {}`) },
  { id: "feature-logo-plus", category: "features", title: "Logo + features", description: "Logo row above a three-column benefit set.", tags: ["logos", "social-proof"], frame: { defaultBg: "light", minHeight: 320 }, a11yNotes: "Logo names are text for the sample.", Component: FeatureLogoPlus, source: src("FeatureLogoPlus", `export function FeatureLogoPlus() {}`) },

  // ——— Testimonials (9) ———
  { id: "testimonial-large-quote", category: "testimonials", title: "Large single quote", description: "Big display quote, avatar, name, role.", tags: ["quote"], frame: { defaultBg: "light", minHeight: 320 }, a11yNotes: "Blockquote + figcaption pattern.", Component: TestimonialLargeQuote, source: src("TestimonialLargeQuote", `export function TestimonialLargeQuote() {}`) },
  { id: "testimonial-carousel", category: "testimonials", title: "Carousel cards", description: "Three quote cards with decorative dots.", tags: ["carousel", "cards"], frame: { defaultBg: "light", minHeight: 300 }, a11yNotes: "Dots are decorative; wire real controls in production.", Component: TestimonialCarousel, source: src("TestimonialCarousel", `export function TestimonialCarousel() {}`) },
  { id: "testimonial-avatar-stack", category: "testimonials", title: "Avatar stack + rating", description: "Overlapping avatars, average score, stars.", tags: ["avatars", "rating"], frame: { defaultBg: "light", minHeight: 160 }, a11yNotes: "Star rating has an accessible label.", Component: TestimonialAvatarStack, source: src("TestimonialAvatarStack", `export function TestimonialAvatarStack() {}`) },
  { id: "testimonial-logo-marquee", category: "testimonials", title: "Logo cloud marquee", description: "Slow infinite logo scroll; pauses under reduced motion.", tags: ["marquee", "logos"], isPremium: true, frame: { defaultBg: "light", minHeight: 100 }, a11yNotes: "Animation disabled when prefers-reduced-motion.", Component: TestimonialLogoMarquee, source: src("TestimonialLogoMarquee", `export function TestimonialLogoMarquee() {}`) },
  { id: "testimonial-video-placeholder", category: "testimonials", title: "Video placeholder", description: "Dark thumbnail, play control, quote overlay.", tags: ["video"], frame: { defaultBg: "light", minHeight: 360 }, a11yNotes: "Play is decorative until media is wired.", Component: TestimonialVideoPlaceholder, source: src("TestimonialVideoPlaceholder", `export function TestimonialVideoPlaceholder() {}`) },
  { id: "testimonial-grid-six", category: "testimonials", title: "Grid of six mini", description: "Dense grid of short quotes.", tags: ["grid"], frame: { defaultBg: "light", minHeight: 320 }, a11yNotes: "Each quote is a figure.", Component: TestimonialGridSix, source: src("TestimonialGridSix", `export function TestimonialGridSix() {}`) },
  { id: "testimonial-before-after", category: "testimonials", title: "Before / after", description: "Two columns contrasting past and present quotes.", tags: ["before-after"], frame: { defaultBg: "light", minHeight: 240 }, a11yNotes: "Labels Before/After are visible text.", Component: TestimonialBeforeAfter, source: src("TestimonialBeforeAfter", `export function TestimonialBeforeAfter() {}`) },
  { id: "testimonial-wall", category: "testimonials", title: "Wall of love", description: "Masonry-style column layout of short praise.", tags: ["wall", "masonry"], frame: { defaultBg: "light", minHeight: 360 }, a11yNotes: "CSS columns; order is still readable.", Component: TestimonialWall, source: src("TestimonialWall", `export function TestimonialWall() {}`) },
  { id: "testimonial-metric-quote", category: "testimonials", title: "Metric + quote", description: "Large number beside one strong testimonial.", tags: ["metric"], frame: { defaultBg: "light", minHeight: 220 }, a11yNotes: "Metric is illustrative and labelled as such.", Component: TestimonialMetricQuote, source: src("TestimonialMetricQuote", `export function TestimonialMetricQuote() {}`) },

  // ——— CTAs (9) ———
  { id: "cta-dark-band", category: "ctas", title: "Dark full-width band", description: "brand-950 band, headline, one button.", tags: ["dark", "band"], frame: { defaultBg: "dark", minHeight: 200 }, a11yNotes: "High contrast white button.", Component: CtaDarkBand, source: src("CtaDarkBand", `export function CtaDarkBand() {}`) },
  { id: "cta-split", category: "ctas", title: "Split CTA", description: "Copy left, dual action stack right.", tags: ["split"], frame: { defaultBg: "light", minHeight: 240 }, a11yNotes: "Both actions are clear links/buttons.", Component: CtaSplit, source: src("CtaSplit", `export function CtaSplit() {}`) },
  { id: "cta-floating-card", category: "ctas", title: "Floating card", description: "Elevated card on a soft slate surface.", tags: ["card", "elevated"], frame: { defaultBg: "light", minHeight: 280 }, a11yNotes: "Single primary action.", Component: CtaFloatingCard, source: src("CtaFloatingCard", `export function CtaFloatingCard() {}`) },
  { id: "cta-announcement-bar", category: "ctas", title: "Announcement bar", description: "Thin bar with link and dismiss control.", tags: ["announcement"], frame: { defaultBg: "dark", minHeight: 48 }, a11yNotes: "Dismiss has an accessible name.", Component: CtaAnnouncementBar, source: src("CtaAnnouncementBar", `export function CtaAnnouncementBar() {}`) },
  { id: "cta-newsletter-inline", category: "ctas", title: "Newsletter inline", description: "Email + disabled submit with honest state.", tags: ["newsletter"], frame: { defaultBg: "light", minHeight: 100 }, a11yNotes: "Input labelled; submit disabled.", Component: CtaNewsletterInline, source: src("CtaNewsletterInline", `export function CtaNewsletterInline() {}`) },
  { id: "cta-dual-choice", category: "ctas", title: "Dual choice", description: "Start free vs Talk to us with equal visual weight.", tags: ["dual"], frame: { defaultBg: "light", minHeight: 180 }, a11yNotes: "Neither option is hidden as secondary.", Component: CtaDualChoice, source: src("CtaDualChoice", `export function CtaDualChoice() {}`) },
  { id: "cta-soft-urgency", category: "ctas", title: "Soft urgency", description: "Calm line about the next cohort — no fake scarcity.", tags: ["urgency"], frame: { defaultBg: "light", minHeight: 140 }, a11yNotes: "Copy stays factual.", Component: CtaSoftUrgency, source: src("CtaSoftUrgency", `export function CtaSoftUrgency() {}`) },
  { id: "cta-with-illustration", category: "ctas", title: "With illustration", description: "Abstract orb beside copy and CTA.", tags: ["illustration"], frame: { defaultBg: "light", minHeight: 280 }, a11yNotes: "Orb is aria-hidden.", Component: CtaWithIllustration, source: src("CtaWithIllustration", `export function CtaWithIllustration() {}`) },
  { id: "cta-sticky-bottom", category: "ctas", title: "Sticky bottom bar", description: "Mobile-friendly persistent strip with one action.", tags: ["sticky", "mobile"], frame: { defaultBg: "light", minHeight: 64 }, a11yNotes: "Does not trap focus.", Component: CtaStickyBottom, source: src("CtaStickyBottom", `export function CtaStickyBottom() {}`) },

  // ——— Forms (9) ———
  { id: "form-contact-block", category: "forms", title: "Contact block", description: "Name, email, message with clear labels.", tags: ["contact"], frame: { defaultBg: "light", minHeight: 420 }, a11yNotes: "Labels associated; submit disabled honestly.", Component: FormContactBlock, source: src("FormContactBlock", `export function FormContactBlock() {}`) },
  { id: "form-newsletter-compact", category: "forms", title: "Newsletter compact", description: "Single field + button row.", tags: ["newsletter"], frame: { defaultBg: "light", minHeight: 80 }, a11yNotes: "Input has accessible name.", Component: FormNewsletterCompact, source: src("FormNewsletterCompact", `export function FormNewsletterCompact() {}`) },
  { id: "form-multi-step", category: "forms", title: "Multi-step indicator", description: "Progress dots and one field group.", tags: ["wizard", "steps"], frame: { defaultBg: "light", minHeight: 220 }, a11yNotes: "Step indicator labelled.", Component: FormMultiStep, source: src("FormMultiStep", `export function FormMultiStep() {}`) },
  { id: "form-search-filters", category: "forms", title: "Search with filters", description: "Search field plus filter chips.", tags: ["search", "chips"], frame: { defaultBg: "light", minHeight: 140 }, a11yNotes: "Search labelled.", Component: FormSearchFilters, source: src("FormSearchFilters", `export function FormSearchFilters() {}`) },
  { id: "form-login-card", category: "forms", title: "Login card", description: "Email and password with disabled submit.", tags: ["auth", "login"], frame: { defaultBg: "light", minHeight: 320 }, a11yNotes: "Password field typed correctly.", Component: FormLoginCard, source: src("FormLoginCard", `export function FormLoginCard() {}`) },
  { id: "form-signup-benefits", category: "forms", title: "Signup with benefits", description: "Benefit list beside a compact signup form.", tags: ["signup"], frame: { defaultBg: "light", minHeight: 280 }, a11yNotes: "Benefits are a list; form is secondary column on large screens.", Component: FormSignupBenefits, source: src("FormSignupBenefits", `export function FormSignupBenefits() {}`) },
  { id: "form-file-dropzone", category: "forms", title: "File dropzone", description: "Dashed area with honest not-wired state.", tags: ["upload"], frame: { defaultBg: "light", minHeight: 200 }, a11yNotes: "States that upload is not wired.", Component: FormFileDropzone, source: src("FormFileDropzone", `export function FormFileDropzone() {}`) },
  { id: "form-inline-validation", category: "forms", title: "Inline validation", description: "Success and error field examples.", tags: ["validation"], frame: { defaultBg: "light", minHeight: 220 }, a11yNotes: "Messages sit next to fields.", Component: FormInlineValidation, source: src("FormInlineValidation", `export function FormInlineValidation() {}`) },
  { id: "form-preferences-toggles", category: "forms", title: "Preferences toggles", description: "Clean switch list for notification prefs.", tags: ["toggles", "settings"], frame: { defaultBg: "light", minHeight: 200 }, a11yNotes: "Each row is a label wrapping the control.", Component: FormPreferencesToggles, source: src("FormPreferencesToggles", `export function FormPreferencesToggles() {}`) },

  // ——— Cards (9) ———
  { id: "card-product", category: "cards", title: "Product / destination", description: "Image, category, title, price meta.", tags: ["product"], frame: { defaultBg: "light", minHeight: 280 }, a11yNotes: "Article landmark.", Component: CardProduct, source: src("CardProduct", `export function CardProduct() {}`) },
  { id: "card-blog", category: "cards", title: "Blog / resource", description: "Image, tag, title, excerpt, read time.", tags: ["blog"], frame: { defaultBg: "light", minHeight: 300 }, a11yNotes: "Article landmark.", Component: CardBlog, source: src("CardBlog", `export function CardBlog() {}`) },
  { id: "card-pricing-mini", category: "cards", title: "Pricing mini", description: "Compact plan card for grids.", tags: ["pricing"], frame: { defaultBg: "light", minHeight: 160 }, a11yNotes: "Price is text, not an image.", Component: CardPricingMini, source: src("CardPricingMini", `export function CardPricingMini() {}`) },
  { id: "card-feature-icon", category: "cards", title: "Feature icon card", description: "Icon, title, one sentence.", tags: ["feature"], frame: { defaultBg: "light", minHeight: 180 }, a11yNotes: "Icon is decorative text.", Component: CardFeatureIcon, source: src("CardFeatureIcon", `export function CardFeatureIcon() {}`) },
  { id: "card-team-member", category: "cards", title: "Team member", description: "Photo, name, role.", tags: ["team"], frame: { defaultBg: "light", minHeight: 220 }, a11yNotes: "Name is the heading.", Component: CardTeamMember, source: src("CardTeamMember", `export function CardTeamMember() {}`) },
  { id: "card-stat", category: "cards", title: "Stat card", description: "Large number, label, optional trend.", tags: ["stat"], frame: { defaultBg: "light", minHeight: 160 }, a11yNotes: "Trend marked illustrative.", Component: CardStat, source: src("CardStat", `export function CardStat() {}`) },
  { id: "card-empty-state", category: "cards", title: "Empty state", description: "Illustration, message, action link.", tags: ["empty"], frame: { defaultBg: "light", minHeight: 240 }, a11yNotes: "Action is a real link.", Component: CardEmptyState, source: src("CardEmptyState", `export function CardEmptyState() {}`) },
  { id: "card-horizontal", category: "cards", title: "Horizontal list card", description: "Image left, content right.", tags: ["horizontal"], frame: { defaultBg: "light", minHeight: 140 }, a11yNotes: "Article with clear reading order.", Component: CardHorizontal, source: src("CardHorizontal", `export function CardHorizontal() {}`) },
  { id: "card-tilt", category: "cards", title: "Interactive tilt", description: "Subtle 3D tilt toward the cursor; disabled under reduced motion.", tags: ["tilt", "hover"], isPremium: true, frame: { defaultBg: "light", minHeight: 140 }, a11yNotes: "Pointer-only enhancement; content works without it.", Component: CardTilt, source: src("CardTilt", `export function CardTilt() {}`) },

  // ——— Utilities (9) ———
  { id: "util-spinner", category: "utilities", title: "Spinner", description: "Clean circular loading indicator.", tags: ["loading"], frame: { defaultBg: "light", minHeight: 120 }, a11yNotes: "role=status with label.", Component: UtilSpinner, source: src("UtilSpinner", `export function UtilSpinner() {}`) },
  { id: "util-skeleton", category: "utilities", title: "Skeleton card", description: "Pulsing placeholders for content loading.", tags: ["skeleton"], frame: { defaultBg: "light", minHeight: 240 }, a11yNotes: "Decorative only while loading.", Component: UtilSkeleton, source: src("UtilSkeleton", `export function UtilSkeleton() {}`) },
  { id: "util-progress", category: "utilities", title: "Progress bar", description: "Determinate and indeterminate examples.", tags: ["progress"], frame: { defaultBg: "light", minHeight: 140 }, a11yNotes: "Labels describe each variant.", Component: UtilProgress, source: src("UtilProgress", `export function UtilProgress() {}`) },
  { id: "util-toast", category: "utilities", title: "Toast / snackbar", description: "Success and error variants.", tags: ["toast"], frame: { defaultBg: "light", minHeight: 160 }, a11yNotes: "status and alert roles.", Component: UtilToast, source: src("UtilToast", `export function UtilToast() {}`) },
  { id: "util-empty", category: "utilities", title: "Empty state", description: "Centered empty message block.", tags: ["empty"], frame: { defaultBg: "light", minHeight: 200 }, a11yNotes: "Clear next step copy.", Component: UtilEmpty, source: src("UtilEmpty", `export function UtilEmpty() {}`) },
  { id: "util-modal-shell", category: "utilities", title: "Modal shell", description: "Dialog surface with title and actions.", tags: ["modal"], frame: { defaultBg: "light", minHeight: 260 }, a11yNotes: "role=dialog; wire focus trap in production.", Component: UtilModalShell, source: src("UtilModalShell", `export function UtilModalShell() {}`) },
  { id: "util-tooltip", category: "utilities", title: "Tooltip", description: "Dark tooltip on hover and focus-within.", tags: ["tooltip"], frame: { defaultBg: "light", minHeight: 120 }, a11yNotes: "Appears on focus-within as well as hover.", Component: UtilTooltip, source: src("UtilTooltip", `export function UtilTooltip() {}`) },
  { id: "util-badges", category: "utilities", title: "Badge set", description: "Premium, New, Beta, Free chips.", tags: ["badges"], frame: { defaultBg: "light", minHeight: 80 }, a11yNotes: "Text only — no colour-only meaning.", Component: UtilBadges, source: src("UtilBadges", `export function UtilBadges() {}`) },
  { id: "util-divider-label", category: "utilities", title: "Divider with label", description: "Horizontal rule interrupted by or continue with.", tags: ["divider"], frame: { defaultBg: "light", minHeight: 80 }, a11yNotes: "Text is not a heading.", Component: UtilDividerLabel, source: src("UtilDividerLabel", `export function UtilDividerLabel() {}`) },
];

export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const c of categories) counts[c.id] = 0;
  for (const item of componentRegistry) {
    counts[item.category] = (counts[item.category] ?? 0) + 1;
  }
  return counts;
}

export function filterComponents(category: string, query: string): ComponentItem[] {
  const q = query.trim().toLowerCase();
  return componentRegistry.filter((item) => {
    if (category !== "all" && item.category !== category) return false;
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q)) ||
      item.category.includes(q)
    );
  });
}

export function getComponentItem(id: string): ComponentItem | undefined {
  return componentRegistry.find((item) => item.id === id);
}
