# Saqlain OS: implementation and agent execution plan

Prepared: 23 October 2026
Status: implementation specification; application changes have not started.

## 1. Product decision and scope

Working direction: **Saqlain OS**, with **Systems Playground** demonstrations embedded in project case studies. This follows the previously recommended direction; it is a working design assumption, not a claim that the user selected every visual detail.

Primary positioning: **Software & AI Engineer**.
Supporting line: **Building distributed systems, intelligent agents, and efficient AI.**

The visitor should understand Saqlain's focus, see three strong projects, and reach source code or contact within 30 seconds. Exploring the interface should reveal more technical substance. No game action is required to read content or contact Saqlain.

This plan covers a complete local implementation in the current repository. It does not authorize publication, account setup, migrations to another hosting service, external messaging, or a new repository. Do not register a hosted Site during planning. Preserve the existing Next.js application and deployment configuration.

### Release boundaries

**R1, required:** complete content inventory; responsive OS shell; project case studies; research, experience, about, achievements and contact; command palette; direct routes; readable non-JavaScript content; DistriStore and TradeIQ simulations; local exploration stamps; reduced motion; keyboard navigation; metadata; error states; verification.

**R1.1, optional after R1 passes:** SpiralFovea illustrative token demo, second visual theme, additional project diagrams, further editorial refinements.

**Deferred:** freeform window resizing, arbitrary window tiling, a real shell, a live chatbot, financial predictions, uploads, authentication, database, telemetry, sound, 3D room, multiplayer, leaderboards, procedural backgrounds, live competitive-programming statistics.

## 2. Repository baseline

Observed stack: Next.js 16.1.6 App Router, React 19.2.3, TypeScript strict mode, Tailwind CSS 4. Existing scripts: dev, build, start, lint. No dedicated test framework is declared.

Existing files:
- `app/page.tsx`: long page with hard-coded biography, experience, papers, projects and blog placeholders.
- `app/components/Sidebar.tsx`: fixed 256px navigation, profile and social links.
- `app/components/ProjectCard.tsx`: cards and a clickable coming-soon div.
- `app/components/ExperienceItem.tsx`: basic experience presentation.
- `app/globals.css`: starter tokens; Geist variable references without a configured font; body uses Arial.
- `app/layout.tsx`: generic student metadata.
- `next.config.ts`: no custom configuration.
- `public/`: starter SVGs; no confirmed public resume asset.

Before coding, inspect Git status and applicable AGENTS.md files again. Preserve unrelated user changes. Use the existing checkout unless isolation is needed. Do not upgrade dependencies merely because newer versions exist. Remove old components only after references have been replaced.

## 3. Visitor journeys

### Recruiter / fast evaluation
1. Arrives on a real, server-rendered introduction; no boot screen or loader.
2. Sees name, role, location/education context, three featured projects and actions.
3. Opens a project; reads problem, contribution, architecture, engineering tradeoffs and evidence.
4. Opens source, views an approved resume, or emails Saqlain.

### Engineering reviewer
1. Opens DistriStore directly or through Projects.
2. Reads architecture and evidence labels.
3. Runs the simulated node-failure challenge.
4. Reads why the demonstration differs from the real implementation.
5. Follows the actual repository link, if verified.

### Curious explorer
1. Uses the dock and command palette to explore apps.
2. Collects optional discovery stamps.
3. Completes a demo; receives a small, nonblocking acknowledgment.
4. Can reset local progress and return to Home immediately.

### Mobile / keyboard / reduced motion
The same content and actions are available through a single full-width app surface, ordinary links and buttons. Dragging and hovering never carry essential behavior. Reduced motion changes animations to immediate state changes or brief fades.

## 4. Information architecture and routes

Use real App Router routes as the canonical content source:

| Route | Content |
| --- | --- |
| `/` | Landing introduction, selected work, dock, desktop app launchers |
| `/projects` | All published project records; category filters |
| `/projects/[slug]` | Individual case study and optional demo |
| `/experience` | Industry/research experience and leadership timeline |
| `/research` | Publications, research summaries and evidence links |
| `/about` | Biography, education, skill-to-project evidence, achievements |
| `/contact` | Email and verified profiles; resume when approved |

Use a server-rendered OS frame in `app/(portfolio)/layout.tsx` with all the above page files under that route group. Move the existing root page into that group when integration is ready; never leave two pages resolving to `/`. Root `app/layout.tsx` remains the HTML/metadata owner.

Desktop routes appear in one focused OS-style content window, with route changes replacing its content. This is deliberately a single-window R1 model: dock icons activate routes, not separate overlapping copies. The command palette is a modal overlay. Do not add parallel/intercepting routes or multi-window state to R1.

Browser back/forward, refreshing, opening links in a new tab and direct project URLs must work normally. Route state is the source of truth; do not duplicate it in a separate active-app store. The Home dock button is the reliable exit action from every app. A decorative title bar must not offer fake minimize/close controls; use functional Home and Expand/Restore controls with text alternatives.

Unknown project slugs return `notFound()`. Route-specific content has meaningful headings and metadata. Content remains readable when JavaScript is unavailable; interactive demos show a useful static explanation.

## 5. Art direction

Mood: crafted engineering desktop, calm and precise, with selective playful details. Use a distinctive composition rather than a screen of interchangeable cards.

### Tokens, first-pass values
| Token | Value / use |
| --- | --- |
| `--bg` | `#0B1018`, desktop backdrop |
| `--surface` | `#141D2A`, opaque primary window |
| `--surface-raised` | `#1D293A`, cards/menus |
| `--text` | `#EEF3FA`, primary text |
| `--muted` | `#A8B5C7`, secondary text |
| `--accent` | `#83B4FF`, actions/focus |
| `--success` | `#83D9B0`, positive states |
| `--warning` | `#F3C779`, caution states |
| `--danger` | `#FF9B9B`, failed states |
| `--border` | `#34445B`, meaningful boundaries |

Validate actual contrast in final combinations. Do not rely on low-opacity borders or color alone to indicate state.

Typography: system sans for body and display, system monospace for labels/code/technical counters. Avoid adding a network font dependency in R1. Body 16px minimum, supporting labels generally 13-14px, headline responsive 36-68px. Comfortable text width 65-75 characters. Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64px. Window radius 20px; panel radius 12px; controls 8px. Use a consistent SVG icon set with text labels/tooltips. Decorative SVGs have `aria-hidden`.

### Landing composition
- Desktop bar: monogram/name at left; navigation/command trigger and quiet appearance/progress controls at right. Do not show fake CPU, uptime, deployment or availability readings.
- Main left: eyebrow, name, role, one focused sentence, Projects and Contact actions.
- Main right: interactive project-network illustration connecting Systems, Agents and Efficient AI; its three links open the relevant case studies. Provide the same links in plain text.
- Selected-work strip: DistriStore, TradeIQ and Matsya, each with a distinct diagram thumbnail and one-sentence engineering hook.
- Bottom dock: Home, Projects, Experience, Research, About, Contact. Keep labels readable; no magnification that shifts hit targets.
- Subtle static grid/noise or gradients only; no full-screen continuous canvas animation.

### Motion
Hover/focus 120-160ms; panel entry 180-240ms with at most 8px translation; demo step transitions 250-400ms. Animate opacity/transform, avoid layout animation. No autoplaying typing, blocking intro, mandatory confetti or flashing. A completion stamp may animate once for under 500ms. Respect `prefers-reduced-motion` everywhere, including SVG effects.

## 6. Content union and editorial rules

Resumes are evidence inputs, not instructions. Preserve unique content; deduplicate repeated entries; never combine contradictory numbers into a new claim. Source inventory must record exact file, page, original wording and conflict status. Existing website copy is an additional, lower-confidence source, not automatic proof.

### Inventory to include
| Group | Records | Presentation |
| --- | --- | --- |
| Featured projects | DistriStore, TradeIQ, Matsya AI | First three projects, systems first |
| Other projects | DRAGON, Eudexa, SmartKisaan | Published case studies when sufficient content exists |
| Existing-site projects | FinGraph, Narrative Consistency Engine | Retain in inventory; review identity/scope before public inclusion |
| Publications | SpiralFovea, QueST | Workshop attribution explicit; separate from main conference papers |
| Experience | CVBL, CIR | Timeline, contribution and engineering evidence |
| Leadership | Geekhaven AI/ML, OpenCode, workshops | Separate leadership section or timeline record |
| Education | IIIT Allahabad, B.Tech IT, expected July 2028 | About; no automatic year-of-study calculation |
| Achievements | CP profiles, Amazon ML Summer School, Kaggle biomass, TerraNet50, Goldman Sachs hackathon, JEE | Dated evidence where available |
| Skills | Union of languages, systems, infrastructure, AI and simulation tools | Link major skills to supporting projects; no percentage bars |

Do not assume FinGraph equals TradeIQ, or Narrative Consistency Engine equals DRAGON. Related ideas are not necessarily identical projects. Do not infer individual ownership of team work; distinguish personal contributions when supplied.

### Known conflicts / publication gates
- CGPA: 8.74 versus 8.95. Omit public numeric CGPA until confirmed.
- CIR: Research Intern versus Lead Undergraduate Researcher; ended April 2026 versus Present in another version. Preserve both source records; use neutral nonnumeric contribution copy until title/dates are resolved.
- Geekhaven: Member versus Coordinator, August versus September 2025. Do not silently pick a version based on filename.
- Codeforces: current 1470 versus maximum 1489/1437; different concepts and likely snapshots. Record `ratingKind` and `asOf`; omit unconfirmed current figures.
- LeetCode: 400+ across platforms versus 729 LeetCode problems; no mixed total.
- Goldman Sachs: AIR versus global rank 216. Omit rank until scope confirmed.
- QueST: 40% drift reduction and 67.7% APE improvement can be different experiments. Keep baseline, metric and benchmark separate; do not choose the largest number as a headline.
- QueST title variants: use the exact linked paper title once evidence is inspected.
- Matsya: YOLO/ResNet and YOLOv11/Depth Anything may describe different versions. Keep implementation versions distinct.
- TradeIQ performance claims: backtested Sharpe/drawdown improvements require scope, dates, baseline and evidence; avoid publishing as promised returns or verified live performance.
- Resume project links often appear only as labels in extracted text. Extract PDF link annotations to recover URLs; never fabricate repository or paper URLs.
- Publication wording must distinguish ICML AdaptFM Workshop and ICLR CAO Workshop/Tiny Papers from main conference acceptance.

No clarification is needed to build scaffolding or demos. Conflicts block only the affected public field. Keep them in the review ledger and omit disputed fields from the public view.

### Source files reviewed
- `G:/Mohammad_Saqlain (1).pdf`
- `G:/Mohammad_Saqlain.pdf`
- `G:/Mohammad_Saqlain_.pdf`
- `G:/Mohammad_Saqlain_CV.pdf`
- `G:/Mohammad_Saqlaing.pdf`
- `G:/MohammadSaqlain.pdf`

Never copy all private source resumes into `public/`. A public downloadable resume must be explicitly selected; show no broken download button in the meantime. Email may use the supplied address. Omit phone from the first version unless requested.

## 7. Data contracts

Create `lib/portfolio/types.ts` first, then freeze these interfaces before parallel implementation. The integrator owns contract changes.

```ts
export type ProjectCategory = 'systems' | 'ai' | 'research' | 'full-stack';
export type DemoId = 'distristore' | 'tradeiq' | 'spiralfovea';
export type PublicationState = 'draft' | 'published';
export interface EvidenceRef {
  id: string;
  sourceId: string;
  page?: number;
  originalText: string;
  review: 'source-reported' | 'verified' | 'conflicting';
  notes?: string;
}
export interface PublicLink {
  label: string;
  href: string;
  kind: 'source' | 'demo' | 'paper' | 'profile' | 'dataset';
}
export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
  state: PublicationState;
  summary: string;
  problem: string;
  contribution: string[];
  architecture: { id: string; label: string; description: string }[];
  tradeoffs: { decision: string; reason: string; limitation: string }[];
  outcomes: { text: string; evidenceIds: string[] }[];
  links: PublicLink[];
  demoId?: DemoId;
  evidenceIds: string[];
}
export type StampId = 'systems-explorer' | 'agent-explorer' | 'research-reader';
export interface ProgressV1 {
  version: 1;
  visitedProjectSlugs: string[];
  stamps: StampId[];
}
```

Add typed Profile, Experience, Publication, Achievement and Skill records using stable IDs, source evidence IDs and explicit draft/published status. Dates use ISO year-month values plus separate display formatting; end date null means ongoing only when confirmed. Never infer chronology from filenames.

Keep raw sources, unresolved evidence and contact-review notes in `docs/content/`. Export only approved public fields through `lib/portfolio/` so raw source material is not bundled into client code. A resume-sourced claim can publish with a clear source-reported status when uncontested; `verified` requires linked evidence actually checked.

Public content modules must be plain serializable data, with no JSX or browser APIs. Server pages select published records; demos receive narrow typed props rather than the whole evidence ledger.

## 8. Architecture and file ownership map

```text
app/
  layout.tsx                       # Integrator: document and global metadata
  globals.css                      # Shell owner: tokens/reset only
  not-found.tsx                    # Integrator
  error.tsx                        # Integrator, client error boundary
  sitemap.ts, robots.ts            # Integrator, conditional on real site origin
  (portfolio)/
    layout.tsx                     # Integrator: server OS frame
    page.tsx                       # Integrator: landing composition
    projects/page.tsx              # Case-study owner
    projects/[slug]/page.tsx        # Case-study owner
    experience/page.tsx             # Case-study owner
    research/page.tsx               # Case-study owner
    about/page.tsx                  # Case-study owner
    contact/page.tsx                # Case-study owner
components/
  ui/                              # Shell owner, scoped styles
  shell/                           # Shell owner: bar/dock/window/palette
  portfolio/                       # Case-study owner: lists/details/diagrams
  playground/                      # Demo owner: simulations and UI
  progress/                        # Integrator after shell integration
lib/
  portfolio/                       # Content owner after contract freeze
  playground/                      # Demo owner: pure simulation functions
  navigation.ts                    # Integrator: shared route/app registry
  progress.ts                      # Integrator: validated persistence helpers
docs/
  IMPLEMENTATION_PLAN.md
  content/source-inventory.md      # Content owner
  content/conflicts.md              # Content owner
  content/link-audit.md             # Content owner
  CONTENT_REVIEW.md                 # Content owner: public wording review
  QA_REPORT.md                     # QA owner
tests/                             # QA owner, meaningful state and journey tests
public/
  images/projects/                 # Locally authored SVG illustrations
  social/                          # Authored share image if created
```

Use CSS modules for component layout. Global CSS defines tokens, reset, baseline typography and reduced-motion defaults only. No agent may casually add global selectors that affect others' components.

### Server/client boundaries
- Page content, metadata and main route layouts stay server components.
- Dock active-state behavior, command palette, expand toggle, progress and demos are small client islands.
- Static architecture diagrams use semantic HTML/SVG; no canvas dependency required.
- Lazy-load demo client code when requested; reserve its footprint to avoid layout shift. Keep surrounding case-study content server-rendered.
- Browser APIs run in effects/events, never module initialization or server render.
- No API endpoints or secrets are required for R1.

### Shared navigation contract
`lib/navigation.ts` exports an immutable registry of IDs, labels, hrefs and descriptions. Dock, palette and launcher grid read it. Components never maintain competing path tables. Every app has an ordinary `<Link>` fallback.

## 9. Component behavior and states

### OS window / shell
- Main has a skip-link target and `min-width: 0`.
- Desktop window maximum width 1180px, centered; route content scrolls as ordinary document content.
- Expand is an in-page layout preference, not browser Fullscreen API. It is session-only and must not obscure dock/navigation.
- Desktop geometry never persists pixel positions. No drag implementation in R1.
- Dock marks current route with `aria-current`; project detail routes count as Projects.
- On client navigation, move focus to the new main heading using a focusable heading/landmark; do not steal focus on initial page load.

### Command palette
- Accessible native `<dialog>` or an equivalently complete dialog implementation.
- Trigger button and Ctrl/Cmd+K open it; Escape closes it and restores trigger focus.
- Do not intercept the shortcut when already handled, during composition, or when an unrelated modal is open.
- Search navigation labels, project titles and tags using deterministic case-insensitive matching.
- Group results into Pages and Projects; display a useful empty state.
- Normal tab-accessible result links are sufficient; do not declare combobox/listbox roles without implementing their keyboard model.
- Announce result counts politely; no focus movement on every keystroke.
- No network search, terminal execution or freeform AI responses.

### Project index and details
- Filter buttons expose pressed state; All is default. Filtering changes only the index list.
- Cards contain one clear detail link; external links are separate controls, never nested anchors.
- Details use sections: Overview, My contribution, Architecture, Decisions and tradeoffs, Results, Playground (if present), Source/evidence.
- Missing outcome metrics produce qualitative contribution copy, not invented statistics.
- Missing repository/demo link means omit that action; a missing-link toast is not a substitute.
- Draft projects stay out of index, sitemap, palette and static params.

### Research and experience
- Workshop names are visible in the default view, not hidden in tooltips.
- Distinguish research publications from project manuscripts; DRAGON must not gain a venue or acceptance label without evidence.
- Timeline uses a readable ordered list; visual connecting lines are decorative.
- No future blog placeholders in R1. Add writing only when real posts exist.

### Contact and resume
- Use mailto plus copy email button. Clipboard failures show the selectable address and a clear message.
- External links use appropriate labels and `rel="noopener noreferrer"` when opening new tabs.
- No contact form requiring a backend or falsely reporting delivery.
- Resume action appears only after an approved file exists and a browser request confirms it returns a PDF.

## 10. Playground specifications

Every playground has: heading; **Illustrative simulation** label; short instructions; Start/Step/Reset controls as appropriate; equivalent text state; a static explanatory fallback; and a note stating what is and is not modeled. No real user files, external services or live trading.

### 10.1 DistriStore: erasure recovery
Model nine storage nodes, each holding one shard. Configuration k=6, n=9. A synthetic file is recoverable whenever at least six nodes are available. This demonstrates a threshold property; it does not implement real Reed-Solomon encoding, cryptography, routing or benchmark upload speed.

Pure model in `lib/playground/distristore.ts`:
- Initial node array has nine online nodes with stable IDs.
- `toggleNode(id)` changes only that node.
- `deriveState(nodes)` returns online count, missing count, `recoverable`, and status text.
- `reset()` restores all nine nodes; challenge completion event resets per challenge run.
- At 9-6 online: recoverable. At 5-0 online: insufficient shards.
- Challenge succeeds when exactly three nodes have been disabled and the visitor activates Check recovery.
- Disabling four nodes must show unavailable, not successful reconstruction.
- Optional restored-node animation is illustrative only; clicking Restore nodes returns all online rather than claiming real repair throughput.

UI: nine labeled node buttons, legend using shapes/text as well as colors, counts, recovery status, challenge prompt, reset. On mobile use a 3x3 arrangement. Each button exposes state with `aria-pressed` and a meaningful label. Announce recovery status, not every decorative packet.

### 10.2 TradeIQ: agent pipeline
Use a fixed set of synthetic market scenarios. No real securities or investment recommendation is needed. The lesson is how evidence moves through forecasting, sentiment, graph context, personalization and aggregation.

State: `idle | running | paused | complete`; current step index; scenario ID; risk preference. All outputs come from authored fixtures, not generated model calls.

Flow: synthetic inputs -> parallel forecast/sentiment/context cards -> personalization -> aggregate illustrative report. Use a fork-and-join diagram so parallel branches are not falsely portrayed as strict sequential dependencies.

Controls: scenario selector, risk selector, Run, Pause/Resume, Step, Reset. Lock scenario/risk changes while running or reset clearly on changes. Step from idle processes the first stage; Step pauses automatic progression. Reset cancels pending timers and clears output. Route unmount cancels timers. Run after complete starts a new clean run.

Never label generated values as real model confidence, backtest statistics or live forecasts. The completion report explains orchestration and tradeoffs; it does not output Buy/Sell orders. Completion awards Agent Explorer once.

### 10.3 SpiralFovea, R1.1 only
Use a bundled example image or authored graphic; no uploads. Toggle uniform and illustrative adaptive token overlays. A density slider changes an authored approximation, not the real tokenizer. Clearly separate actual paper-reported results from counts calculated inside the demo. If the real algorithm is not implemented, call the visualization an illustration and do not show measured accuracy or FLOPs.

## 11. Gamification and persistence

Three stamps only:
- Systems Explorer: complete DistriStore's three-node challenge.
- Agent Explorer: finish TradeIQ's fixture pipeline.
- Research Reader: explicitly activate Mark explored after reading a research summary; opening a page alone is not proof of reading.

No XP or invented professional skill levels. Progress is optional, local to the browser, and never gates access. Show a small progress drawer with earned stamps and Reset progress. Reset has a simple inline confirmation because it removes stored progress.

Persist only `ProgressV1` under `saqlain-os:progress:v1`. Deduplicate stamps and visited slugs. Parse with shape validation, whitelist IDs, bound arrays to known records, and handle corrupt JSON, unavailable storage and unknown schema versions. Storage errors fall back to in-memory state. First server and client render use the same empty state; load storage after mount to avoid hydration mismatch. A stamp announcement uses a polite live region and does not open a modal. No cross-browser sync claim.

## 12. Responsive and accessibility contract

| Width | Behavior |
| --- | --- |
| 320-767px | One full-width app, compact bar, reachable bottom dock with six labeled items, vertically stacked content |
| 768-1099px | Padded app surface, two-column cards where readable, static window placement |
| 1100px+ | Full desktop composition, centered app window, three featured project panels |

Account for safe-area insets and `100dvh`; add bottom content padding for the dock. Avoid a fixed-height main content scroll trap. Long titles, URLs, diagrams and code blocks must wrap or scroll within their own containers. At 200% zoom the layout reflows without hiding controls.

Requirements: visible focus; semantic headings; normal tab order; WCAG AA contrast; 44x44px targets where practical; no hover-only actions; accessible dialog focus management; tooltips available on focus; status text in addition to color; reduced-motion behavior; no mandatory timed challenge. SVG diagrams include an adjacent text equivalent. Test with keyboard and at least one available screen reader; report if unavailable.

## 13. Performance, metadata and reliability

- No Three.js, WebGL, charting suite, animation framework, global state library or icon package unless a demonstrated need justifies it.
- Keep interactive code isolated. Aim for <=100KB additional compressed application JS beyond the existing framework baseline; measure production output and report actual result, do not claim an unmeasured pass.
- Target LCP <=2.5s, CLS <=0.1 and INP <=200ms under representative testing. Lab results are directional; real INP needs field data. Record device/throttling/tool versions if measured.
- Reserve image/diagram dimensions; use optimized bundled assets; no giant hero video.
- Title pattern: `<page> | Mohammad Saqlain`; homepage names SWE/AI focus. Description is factual and concise.
- Set canonical origin and sitemap absolute URLs only when the actual production origin is known. Do not invent a domain. Preview environments must not become canonical.
- Add a valid authored social image if produced; otherwise omit fake asset references.
- External source failures do not break local pages. No client API keys, broad document dumps or PDFs accidentally included in bundles.
- Friendly 404 with Home/Projects links; route error boundary with retry; loading indicators only for work that actually waits.

## 14. Agent execution protocol

This section defines future work assignments. Planning does not require spawning agents now. Use at most three concurrent child agents plus the coordinating agent. Start with dependencies; parallelize only independent work after contracts freeze.

### Rules for every agent
1. Read this plan, applicable AGENTS.md, current diff and assigned files.
2. Stay within assigned ownership; propose contract changes to the integrator before editing shared files.
3. Do not add packages, modify lockfiles, alter routes or globals owned by others without coordination.
4. Use typed fixture data; do not invent resume facts or external links.
5. No deployment, external messaging or unrelated cleanup.
6. Run focused checks; report precisely what was run, passed, failed or unavailable.
7. Return changed files, public exports, assumptions, unresolved issues and integration instructions.
8. Do not overwrite user edits, reset the checkout, or use fake placeholder links to satisfy acceptance.

### Coordinator / integrator
Owns shared contracts, navigation registry, root layout/configuration/package files, route-group integration, progress and final checks. Establish contracts before delegation; keep dependency installation single-owner. Resolve cross-component imports and route collisions. Review public copy and aggregate QA evidence. Does not mark complete while critical requirements are unresolved.

### Work packet A: content and evidence
**Inputs:** six named PDFs, current page/sidebar, frozen data types.
**Owns:** `lib/portfolio/` data after contract creation; `docs/content/`; `docs/CONTENT_REVIEW.md`.
**Tasks:** extract all unique records and PDF annotations; deduplicate; record conflicts; validate recoverable links; author short engineering-focused summaries; distinguish contribution, architecture and results; publish only supported fields.
**Deliverables:** typed inventory, featured order, ledger, link audit, omitted-field list.
**Done when:** every unique resume item is represented in data or the review ledger; no invented claims; contested data stays out of public fields; all records type-check.

### Work packet B: shell and visual system
**Inputs:** frozen nav registry and tokens; fixture profile data.
**Owns:** `components/shell/`, `components/ui/`, global token/reset CSS.
**Tasks:** bar, dock, window frame, landing network illustration, command dialog, expand behavior, responsive and reduced-motion styles.
**Contract:** accepts `children` for server content; uses canonical route links; exposes `CommandPalette` and `OSFrame` without importing evidence documents.
**Done when:** navigation works at 320px and desktop; keyboard/dialog/focus behavior passes; no fake window controls; no mandatory motion; children can be server-rendered.

### Work packet C: simulations
**Inputs:** demo specifications and typed demo IDs.
**Owns:** `lib/playground/`, `components/playground/`.
**Exports:** `DistriStoreDemo` and `TradeIQDemo`, each accepting optional `onComplete?: () => void` and no portfolio-global dependency.
**Tasks:** pure state functions, fixture scenarios, accessible diagrams and controls, cleanup, static fallback explanation, simulation labels.
**Done when:** boundary conditions and timer/reset behavior pass focused tests; no external requests; callbacks fire only on valid completion and once per run.

### Work packet D: case studies and content routes
**Starts after:** A's data shape is frozen and B's basic frame exports exist.
**Owns:** portfolio routes except landing/layout; `components/portfolio/`.
**Tasks:** index/filter UI; project template; server-rendered details; experience/research/about/contact; route metadata; unknown-slug handling; responsive diagram text.
**Done when:** all published records are reachable; draft data is excluded; source links are correct; pages have complete copy and headings; content works without JavaScript.

### Work packet E: verification
**Starts after:** integrated R1 preview is usable.
**Owns:** meaningful tests, `docs/QA_REPORT.md`; proposes fixes to owner instead of editing all components simultaneously.
**Tasks:** test matrices below, content review, production build inspection, screenshots and defect triage.
**Done when:** critical/high defects fixed and rechecked; remaining limitations documented with reproducible evidence.

### Scheduling with four total agent slots
1. Coordinator creates contracts, registry, scaffolding and fixtures.
2. Run A, B and C concurrently; coordinator handles integration preparation.
3. When A completes, assign D to that freed slot. B/C continue bounded work.
4. Integrate D/B/C; add progress wiring and landing content.
5. Run E after integration, using a freed slot; owners fix their scoped defects.
6. Coordinator runs final shared checks, reviews diff and prepares user handoff.

### Handoff template
```text
Packet / owner:
Files changed:
Public exports and props:
Requirements completed:
Checks executed and results:
Content assumptions / omissions:
Known defects or blockers:
Required integration actions:
```

## 15. Ordered implementation milestones

### M0: baseline and contracts
- Inspect instructions, status and current file tree.
- Run baseline build/type check once; record pre-existing failures.
- Create route registry, data interfaces and fixture records.
- Freeze file ownership and export names.
- Produce source inventory/conflict template.
**Exit:** agents can work without guessing shared imports or semantics.

### M1: recognizable interface
- Build tokens, static shell, responsive dock and landing composition.
- Wire real navigation and canonical project URLs.
- Render real approved featured-project copy as soon as A supplies it.
**Exit:** a local preview looks like Saqlain OS and its core navigation works on phone and desktop.

### M2: complete portfolio content
- Implement all required routes and case-study template.
- Add architecture diagrams, evidence labels and contact actions.
- Remove starter branding, superseded components and unsupported blog placeholders.
- Integrate metadata and 404 behavior.
**Exit:** content is complete and readable without demos or JavaScript.

### M3: meaningful interactivity
- Add palette and focus behavior.
- Integrate both demos through lazy client islands.
- Add stamp persistence, reset and completion feedback.
- Check route changes during running simulations.
**Exit:** every visible control has useful behavior and all demos are honestly labeled.

### M4: release verification
- Run focused automated tests, type check, lint and production build.
- Inspect responsive screens, keyboard flow, dialogs and motion modes.
- Review all public claims/links against source inventory.
- Fix defects, rerun affected checks and record limitations.
**Exit:** final acceptance checklist passes; local result is reviewable. Publication is a separate step.

## 16. Verification matrix

Use the existing package manager. The integrator may add one minimal test setup if needed: prefer built-in Node assertions over pure logic where practical; add a DOM test runner only if its value warrants the dependency. Use supported browser tooling for end-to-end checks; do not claim browser automation when only static checks ran. Exactly one agent edits package.json/package-lock.json.

| Area | Required checks |
| --- | --- |
| Build | `npx tsc --noEmit`, `npm run lint`, `npm run build`; record baseline versus introduced failures |
| Routes | Every nav route, all published slugs, unknown slug 404, direct refresh, back/forward, new tab |
| DistriStore | 9/6/5/0 online boundaries; invalid ID handling; reset; three-failure completion only; duplicate completion guard |
| TradeIQ | Run, pause/resume, step, reset during run, rerun after completion, unmount cleanup, fixture selection rules |
| Progress | Duplicate stamps, malformed JSON, blocked storage, version mismatch, reset, hydration without warnings |
| Palette | Trigger/shortcut/Escape, focus trap/restore, empty results, result navigation, search of tags |
| Content | No drafts in UI/palette/routes, explicit workshops, no disputed CGPA/ranks, no invented URLs, demo labels |
| Contact | mailto, clipboard success/fallback, external profiles, resume file if enabled |
| Layout | 320, 390, 768, 1024, 1440px; long text; 200% zoom; safe area; no page-level horizontal overflow |
| Accessibility | Keyboard-only tour, visible focus, dialog behavior, heading order, color contrast, reduced motion, screen reader when available |
| Runtime | No hydration/runtime errors; timers stop after exit; unavailable external sites do not break local content |
| Performance | Production bundle sizes; dimensions/CLS; representative lab capture if available, with actual test conditions |

Test simulation rules and user journeys, not trivial render snapshots or CSS implementation details. Keep screenshots at least for desktop home, mobile home, project detail, both simulations and open palette. Read the relevant local preview/browser-tool guidance before starting browser QA. If browser infrastructure is unavailable, record that specific gap rather than silently treating the visual checks as passed.

## 17. Final definition of done

- [ ] Homepage clearly positions Saqlain for software and AI engineering.
- [ ] DistriStore, TradeIQ and Matsya are featured with substantive case studies.
- [ ] Union of all unique resume material is accounted for in public content or review ledger.
- [ ] Research and leadership remain discoverable with accurate scope.
- [ ] No unresolved numeric/title conflict is silently published.
- [ ] Canonical URLs, navigation, direct refresh and 404 all work.
- [ ] Desktop OS experience and mobile app surfaces are coherent.
- [ ] Both required demos explain real concepts through labeled simulations.
- [ ] Progress is optional, local, validated and resettable.
- [ ] No fake controls, fake live telemetry, fabricated links or dead resume button.
- [ ] Keyboard, focus and reduced-motion requirements are verified.
- [ ] Build and focused tests pass, or genuine environmental limitations are explicitly documented.
- [ ] Final diff contains no credentials, private evidence dumps or unrelated changes.
- [ ] User receives local preview/run instructions, a change summary and outstanding content decisions.

## 18. Decisions that remain optional or deferred

The plan has usable defaults; do not block implementation for aesthetic preferences. The user can later change the palette, headline, order, theme or game intensity. Content confirmations are needed only for disputed public claims and selection of a public resume. The actual production origin and deployment provider are needed only before publication/canonical configuration.

If the user changes the chosen design direction before coding, revise sections 1, 4, 5 and 9 first; preserve the evidence inventory, data contracts and reusable simulations where compatible.
