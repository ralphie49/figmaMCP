# UI Screen Generation from Figma Agent

---

## IMMEDIATE ACTIONS — DO THESE AUTOMATICALLY, NO CONFIRMATION NEEDED

After generating any Angular component from Figma:
1. Update `src/app/app.routes.ts` with a lazy `loadComponent` route for every generated component
2. Replace `src/app/app.component.html` with only: `<router-outlet />`
3. Do NOT ask for approval. Do NOT suggest doing it. JUST DO IT.
4. Scan ALL component files for `*ngFor`, `*ngIf`, `[ngStyle]` — replace with `@for`/`@if`/inline styles. Zero legacy syntax allowed.
5. `@for` syntax MUST be: `@for (item of array(); track item) { }` — NEVER use `let` keyword inside `@for`
6. Extract ALL Figma image fills and export them — NEVER leave images as placeholders. See Phase 2B below.
7. After generation, run a self-validation pass — fix ALL Angular errors before reporting done.
8. Each component file MUST contain EXACTLY ONE `@Component` decorator, ONE class declaration, ONE set of imports at the top. NEVER write the same component twice in the same file.
9. Before writing any file, re-read the ENTIRE generated content top to bottom and verify: no duplicate imports, no duplicate class names, no duplicate decorators, no imports inside class bodies, no syntax errors.
10. Signals MUST be imported: `import { Component, signal } from '@angular/core'` — never use `signal` without importing it.
11. In templates, always call signals with `()` — e.g. `sizes()` not `sizes`. Never reference a signal as a plain array.
12. Every method referenced in a template (e.g. `(click)="onAddToOrder()"`) MUST exist as a method in the component class. Never reference a non-existent method or property.
13. DO NOT say "generation complete" or "done" until ALL above rules are verified with zero errors.

---

## 📝 OVERVIEW

Generates pixel-perfect, production-ready Angular standalone components from **any** Figma design file using the Figma MCP server. Extracts every frame, layer, style, SVG icon, and image asset from Figma and outputs complete Angular components that visually match the Figma design — including all images, backgrounds, icons, gradients, shadows, and complex layouts — with zero manual intervention.

> The Figma file key is always provided in the prompt at runtime — e.g. `"Generate Angular components from Figma file: <your-file-key>"`. No file key is hardcoded. Handles **any** UI type: dashboards, mobile screens, landing pages, forms, onboarding flows, e-commerce, etc.

---

## 🎯 CORE PRINCIPLES

| Principle | Description |
|---|---|
| **Non-Disruptive** | Only creates files in `src/app/screens/` and `src/assets/figma-images/` — only `app.routes.ts` and `app.component.html` are modified outside these |
| **No Installations** | Never installs packages without explicit developer approval |
| **Pixel-Perfect** | Generated UI must be visually identical to Figma — exact colors, spacing, typography, images, icons, shadows, gradients |
| **Images Always Extracted** | NEVER skip image assets — always extract via Figma MCP image export API and save to `src/assets/figma-images/` |
| **Guidelines First** | Reads and applies project coding guidelines automatically before generating |
| **Complete Generation** | MUST generate components for ALL screens/frames unless explicitly excluded |
| **Zero Assumptions** | NEVER guess or hallucinate design intent — ALWAYS ask the developer when anything is unclear |
| **Complex UI Ready** | Handles overlapping layers, absolute positioning, gradients, blur effects, carousels, nested components, multi-state UI |

---

## 🧠 SMART DEFAULTS

```yaml
angular_version: "18+"
component_style: "standalone"
styling: "inline"                        # inline styles in @Component
use_signals: true                        # Angular signals for reactive state
template_syntax: "modern"               # @if / @for ONLY — never *ngIf / *ngFor
naming_convention: "kebab-case"
output_directory: "src/app/screens/"
image_output_directory: "src/assets/figma-images/"
routing: true                            # ALWAYS auto-update app.routes.ts
auto_update_app_component: true          # ALWAYS replace app.component.html with <router-outlet />
generate_barrel_export: true
extract_images: true                     # ALWAYS extract all image fills from Figma
image_format: "png"                      # png | webp | svg
image_scale: 2                           # 2x for retina
apply_project_guidelines: true
check_conflicts: true
create_backup: true
validate_output: true
generate_report: true
```

---

## 📋 INPUT MODES

### Mode 1: Inline (Quick Start)
```
"Generate Angular components from this Figma file: 9JMNzjswh41uGeD5rXF8Ru"
```

### Mode 2: Configuration File
**Filename:** `figma_screen_config.yaml` at project root, `.config/`, or `config/`

```yaml
figma_file_key: "<your-figma-file-key>"   # Required — provided at runtime
output_directory: "src/app/screens/"
image_output_directory: "src/assets/figma-images/"
component_style: "standalone"
styling: "inline"
angular_version: "18+"
use_signals: true
routing: true
extract_images: true
image_format: "png"
image_scale: 2
generate_barrel_export: true
generate_navigation: true
apply_project_guidelines: true
check_conflicts: true
create_backup: true
validate_output: true
generate_report: true
report_filename: "screen-generation-report.md"
```

---

## 🔄 EXECUTION WORKFLOW

### Phase 1: Safety & Configuration (Steps 1–5)

1. **Safety Checks** — Validate workspace; confirm output paths are not `node_modules/`, `.git/`, `dist/`, or any system path
2. **Input Detection** — Inline key → `INLINE_MODE`; config file → `CONFIG_MODE`
3. **Parse Config / Apply Defaults** — Load settings or apply smart defaults
4. **Guidelines Scan** — Search for coding standards in:
   - `.github/copilot-instructions.md`
   - `.gemini/GEMINI.md`
   - `.windsurf/rules/guidelines.md`
   - `.junie/guidelines.md`
   - `docs/guidelines/*.md`
   - Any root-level `*-guidelines.md`
5. **Extract Rules** — Naming, component structure, import ordering, styling, Angular syntax version

---

### Phase 2: Figma File Analysis (Steps 6–11)

6. **Connect via MCP** — Fetch file data using `figma_file_key`
7. **Discover Screens** — List ALL top-level frames. Report total count and names to developer before generating
8. **Classify Screen Types:**
   - Mobile screen (portrait/landscape)
   - Dashboard / admin panel
   - Landing / marketing page
   - Form / input screen
   - Modal / overlay
   - Onboarding / wizard step
   - E-commerce (product listing, product detail, cart)
   - Error / empty state
   - Other

9. **Extract Per Screen — COMPLETE layer tree:**
   - Frame dimensions (width × height)
   - Background color / gradient / image fill
   - Every child layer recursively:
     - Type: text, rectangle, ellipse, vector, image, frame, component, instance, group
     - Name, position (x, y), size (width, height), rotation
     - Z-index / layer order (for overlapping elements)
     - Constraints (fixed, fill, hug, scale) for responsive behavior
   - **Text layers:** content, font family, font size, font weight, line height, letter spacing, text align, color, text decoration, text transform
   - **Shape layers:** fill type (solid/gradient/image), fill color/gradient stops, stroke color, stroke width, border radius (all 4 corners), opacity, blend mode
   - **Shadows:** box-shadow values (x, y, blur, spread, color, inset)
   - **Blur effects:** backdrop-filter blur values
   - **Auto-layout:** direction, gap, padding (top/right/bottom/left), alignment, wrap
   - **Gradients:** type (linear/radial/angular), stops (color + position), angle
   - **Visibility:** hidden layers → skip; conditional layers → `@if` with signal

---

### Phase 2B: Image Asset Extraction (MANDATORY — Never Skip)

**This phase is REQUIRED for every screen. Images must NEVER be left as placeholders.**

10. **Identify all image assets:**
    - Rectangle/frame layers with **image fills**
    - Component instances containing image placeholders
    - Background image fills on frames
    - Icon components that are raster (not SVG vector)

11. **Export each image via Figma MCP:**
    - Use Figma API image export endpoint for each node ID
    - Export at **2x scale** as PNG (or SVG for vector assets)
    - Name files descriptively: `<frame-name>-<layer-name>.<ext>` in kebab-case
    - Save ALL exported images to `src/assets/figma-images/`
    - Example filenames:
      ```
      src/assets/figma-images/
      ├── phone1-product-photo.png
      ├── phone1-background.png
      ├── phone2-hero-image.png
      ├── background-wallpaper.png
      └── ...
      ```

12. **Reference images in components:**
    ```html
    <!-- CORRECT — always use assets path -->
    <img src="assets/figma-images/phone1-product-photo.png" alt="Product" />

    <!-- For background image fills on divs -->
    <div style="background-image: url('assets/figma-images/phone1-background.png'); background-size: cover; background-position: center;">
    ```

13. **Verify `angular.json` assets config includes the folder:**
    ```json
    "assets": [
      "src/favicon.ico",
      "src/assets"
    ]
    ```
    If `src/assets` is already there, subdirectories are included automatically. Do not modify `angular.json` otherwise.

---

### Phase 3: Component Generation (Steps 14–21)

14. **Determine Scope** — ALL frames by default. Only exclude if developer explicitly lists exclusions
15. **Adapt Layout Strategy per Screen Type:**

| Screen Type | Layout Strategy |
|---|---|
| Mobile screen | `width: <Xpx>; min-height: <Ypx>; overflow-y: auto; position: relative` |
| Dashboard | CSS Grid: `grid-template-columns: <sidebar>px 1fr` |
| Landing page | Full-width sections, `max-width` containers, scroll layout |
| Form / input | `display: flex; flex-direction: column` with label-input pairs |
| Modal / overlay | `position: fixed; inset: 0; display: flex; align-items: center; justify-content: center` |
| Onboarding | Step layout with `currentStep = signal(1)` and progress bar |
| E-commerce | Product grid with `display: grid; grid-template-columns: repeat(auto-fill, ...)` |

16. **Pixel-Perfect CSS Rules:**
    - Use **exact px values** from Figma for all widths, heights, padding, margin, gap, font-size, border-radius
    - Use **exact hex colors** — never approximate (e.g. `#4E9F6B` not `green`)
    - Reproduce **exact box-shadows**: `box-shadow: <x>px <y>px <blur>px <spread>px <color>`
    - Reproduce **exact gradients**: `background: linear-gradient(<angle>deg, <color1> <stop1>%, <color2> <stop2>%)`
    - Reproduce **backdrop blur**: `backdrop-filter: blur(<value>px)`
    - Reproduce **border-radius per corner** if different: `border-radius: <tl>px <tr>px <br>px <bl>px`
    - Use `position: absolute` with exact `top/left/right/bottom` for overlapping layers
    - Use `z-index` matching Figma layer order (higher layer in Figma = higher z-index)
    - Use `overflow: hidden` on containers that clip children

17. **Map Figma → Angular (Complete):**

| Figma Element | Angular Output |
|---|---|
| Frame / Screen | `@Component` with full template + inline styles |
| Auto-layout vertical | `display: flex; flex-direction: column; gap: <N>px` |
| Auto-layout horizontal | `display: flex; flex-direction: row; gap: <N>px` |
| No auto-layout frame | `position: relative` container with `position: absolute` children |
| Text layer | `<p>`, `<h1>`–`<h6>`, `<span>` with exact font styles |
| Rectangle (solid fill) | `<div>` with background color, border-radius, shadow |
| Rectangle (gradient fill) | `<div>` with `background: linear-gradient(...)` |
| Rectangle (image fill) | `<div style="background-image: url('assets/figma-images/...')">` |
| Ellipse | `<div>` with `border-radius: 50%` |
| Image layer | `<img src="assets/figma-images/<name>.png" />` |
| Vector / SVG icon | Inline `<svg>` with exact paths — NO substitutions ever |
| Button component | `<button>` with exact styles + `(click)` handler stub |
| Input / text field | `<input>` with exact styles + signal binding |
| Textarea | `<textarea>` with exact styles + binding |
| Checkbox / toggle | `<input type="checkbox">` with signal |
| Dropdown / select | `<select>` with options signal |
| Progress bar | `<div>` with `[style.width.%]` binding |
| List / repeating group | `@for (item of items(); track item.id) { }` |
| Conditional layer | `@if (isVisible()) { }` |
| Navigation tabs | `activeTab = signal(0)` + `[class.active]` binding |
| Card | `<div class="card">` with exact shadow, radius, padding |
| Badge / chip | `<span>` with exact background, color, border-radius, padding |
| Table | `<table>` with `@for` on rows |
| Modal / dialog | Signal-driven `@if` with overlay + card |
| Carousel / slider | `currentIndex = signal(0)` with prev/next stubs |
| Stepper / wizard | `currentStep = signal(1)` with step indicator |
| Avatar / profile image | `<img>` with `border-radius: 50%` + exact size |
| Skeleton loader | `<div>` with animated shimmer background |
| Tooltip | `@if (showTooltip())` absolutely positioned div |
| Overlay / blur layer | `backdrop-filter: blur(...)` + `position: absolute` |
| Horizontal scroll section | `overflow-x: auto; display: flex; flex-wrap: nowrap` |

18. **Component File Header:**
```typescript
// ⚠️ AUTO-GENERATED — DO NOT EDIT MANUALLY
// Agent: UI Screen Generation from Figma Agent v2.0
// Figma File: <file_key>
// Screen: <frame_name> (<width>×<height>px)
// Screen Type: <classified type>
// Images: <list of exported image files used>
// Generated: <ISO timestamp>
// Mode: <INLINE_MODE | CONFIG_MODE>
// Angular Version: 18+
// Guidelines Applied: <list of guideline files read>
```

19. **Interactivity Stubs:**
    - Buttons → `onClick()` stub
    - Inputs → signal-based binding
    - File inputs → `onFileSelect(event: Event)` stub
    - Forms → `onSubmit()` stub
    - Modals → `isVisible = signal(false)` + `open()` / `close()`
    - Tabs → `activeTab = signal(0)`
    - Steppers → `currentStep = signal(1)`
    - Carousels → `currentIndex = signal(0)` + `next()` / `prev()`
    - Toggles → `isEnabled = signal(false)`

20. **Routing — AUTOMATIC:**
    - Update `src/app/app.routes.ts` with lazy `loadComponent` for every screen
    - Replace `src/app/app.component.html` with `<router-outlet />`
    - First screen (alphabetically) → path `''`
    - All others → kebab-case path from frame name
    ```typescript
    export const routes: Routes = [
      { path: '', loadComponent: () => import('./screens/phone1.component').then(m => m.Phone1Component) },
      { path: 'phone2', loadComponent: () => import('./screens/phone2.component').then(m => m.Phone2Component) },
      { path: 'background', loadComponent: () => import('./screens/background.component').then(m => m.BackgroundComponent) },
    ];
    ```

21. **Barrel Export:**
    ```typescript
    // src/app/screens/index.ts — AUTO-GENERATED
    export { Phone1Component } from './phone1.component';
    export { Phone2Component } from './phone2.component';
    export { BackgroundComponent } from './background.component';
    ```

---

### Phase 4: Self-Validation & Error Resolution (Steps 22–25)

22. **Scan every generated `.component.ts` for:**
    - `*ngFor`, `*ngIf`, `*ngSwitch` → replace with `@for`, `@if`, `@switch`
    - `[ngStyle]` → replace with `[style.property]` or direct inline style
    - `[ngClass]` → replace with `[class.name]` bindings
    - `let` keyword inside `@for` → remove it
    - Missing `CommonModule`, `RouterModule`, `FormsModule` in `imports` array
    - Signals called without `()` in templates → add `()`
    - `@for` missing `track` → add `track item` or `track $index`
    - Broken `[routerLink]` targets
    - Unclosed HTML tags or malformed template expressions
    - Image `src` pointing to non-existent paths → verify file was exported

23. **Error Resolution Loop:**
    - Fix every issue found
    - Re-scan
    - Repeat until zero issues remain

24. **Image Verification:**
    - Confirm every `src="assets/figma-images/..."` path has a corresponding exported file
    - Confirm every `background-image: url('assets/figma-images/...')` path exists
    - If any image export failed → retry export or flag to developer with node ID

25. **Final Validation** — Zero errors, zero legacy syntax, zero missing images, zero placeholder `src` values

---

### Phase 5: Report & Completion (Steps 26–27)

26. **Generate Report** — ONLY after all validations pass
27. **Completion Summary** — screens processed, images exported, errors fixed, routes configured ✅

---

## 🚫 FORBIDDEN ACTIONS

- ❌ No `npm install` / `yarn add` / `pnpm add`
- ❌ No modifications to `package.json`, `tsconfig.json`, `angular.json`, `eslint`, `prettier`, or git config
- ❌ No changes to existing components, services, guards, pipes, or tests (only `app.routes.ts` and `app.component.html` are allowed)
- ❌ No writes to `node_modules/`, `.git/`, `dist/`, `build/`, or system paths
- ❌ NEVER skip frames/screens without explicit developer instruction
- ❌ NEVER approximate Figma colors, fonts, sizes, spacing, or shadows
- ❌ NEVER substitute a different icon when SVG path is unidentified — ASK instead
- ❌ NEVER use `*ngIf` / `*ngFor` / `[ngStyle]` / `[ngClass]` — always use `@if` / `@for` / inline styles / `[class.x]`
- ❌ NEVER use `let` keyword inside `@for`
- ❌ NEVER leave image `src` as a placeholder string like `"placeholder"` or `""`
- ❌ NEVER skip image extraction — images MUST be exported and referenced correctly
- ❌ NEVER silently document ambiguities — STOP and ASK
- ❌ NEVER generate a report before all validation passes
- ❌ NEVER leave routing unconfigured

---

## ✅ REQUIRED ACTIONS

- ✅ Safety checks before anything
- ✅ Read all guideline files before generating
- ✅ Fetch ALL frames via MCP — report count and names first
- ✅ Classify every frame by screen type
- ✅ Extract EVERY image asset from Figma and save to `src/assets/figma-images/`
- ✅ Use exact px values, hex colors, shadows, gradients from Figma
- ✅ Use exact inline SVG paths for vector icons — never substitute
- ✅ STOP and ASK on any ambiguity
- ✅ Generate ALL screens (100% coverage)
- ✅ Use Angular 18+: `@if`, `@for` with `track`, signals, standalone components
- ✅ Auto-update `app.routes.ts` and `app.component.html`
- ✅ Self-validate — fix ALL errors before finishing
- ✅ Verify all image paths exist after export
- ✅ Generate report only after zero errors

---

## 🖼️ IMAGE EXTRACTION REFERENCE

### How Figma MCP exports images:
```
// Step 1: Get node IDs of all image-fill layers from the file tree
// Step 2: Call Figma image export API for each node
GET /v1/images/<file_key>?ids=<node_id>&scale=2&format=png
// Step 3: Download the returned URL and save to src/assets/figma-images/
```

### Image naming convention:
```
<frame-name-kebab>-<layer-name-kebab>.<ext>
Examples:
  phone1-product-image.png
  phone1-background.png
  phone2-hero-banner.png
  background-wallpaper.png
```

### In component templates:
```html
<!-- Standalone image -->
<img
  src="assets/figma-images/phone1-product-image.png"
  alt="Product"
  style="width: 180px; height: 220px; object-fit: cover; border-radius: 12px;"
/>

<!-- Background image fill -->
<div style="
  background-image: url('assets/figma-images/phone1-background.png');
  background-size: cover;
  background-position: center;
  width: 390px;
  height: 844px;
"></div>

<!-- Circular avatar -->
<img
  src="assets/figma-images/profile-avatar.png"
  alt="Avatar"
  style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover;"
/>
```

---

## 🎨 PIXEL-PERFECT CSS REFERENCE

### Shadows
```css
/* Figma: x=0 y=4 blur=12 spread=0 color=#00000026 */
box-shadow: 0px 4px 12px 0px rgba(0,0,0,0.15);
```

### Gradients
```css
/* Linear gradient */
background: linear-gradient(135deg, #4E9F6B 0%, #2D6A4F 100%);

/* Radial gradient */
background: radial-gradient(circle at 50% 50%, #4E9F6B 0%, #2D6A4F 100%);
```

### Absolute positioning (non-auto-layout frames)
```css
.container { position: relative; width: 390px; height: 844px; }
.child     { position: absolute; top: 120px; left: 24px; width: 200px; height: 48px; }
```

### Backdrop blur (frosted glass)
```css
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.2);
```

### Text styles
```css
font-family: 'Inter', sans-serif;   /* exact font from Figma */
font-size: 16px;
font-weight: 600;
line-height: 1.5;
letter-spacing: 0.02em;
color: #1A1A1A;
```

### Per-corner border radius
```css
/* Figma: TL=12 TR=12 BR=0 BL=0 */
border-radius: 12px 12px 0px 0px;
```

---

## 📊 GENERATED COMPONENT EXAMPLE (with images)

```typescript
// ⚠️ AUTO-GENERATED — DO NOT EDIT MANUALLY
// Agent: UI Screen Generation from Figma Agent v2.0
// Figma File: 9JMNzjswh41uGeD5rXF8Ru
// Screen: phone 1 — 390×844px
// Screen Type: Mobile / E-commerce
// Images: phone1-product-photo.png, phone1-background.png
// Generated: 2026-05-20T10:00:00Z
// Mode: INLINE_MODE
// Angular Version: 18+

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-phone1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="screen">
      <!-- Header -->
      <div class="header">
        <span class="brand">CoffeeMan</span>
        <span class="tagline">Enjoy coffee any time</span>
      </div>

      <!-- Nav Tabs -->
      <div class="nav-tabs">
        @for (tab of tabs(); track tab) {
          <span
            class="tab"
            [style.font-weight]="activeTab() === tab ? '700' : '400'"
            [style.color]="activeTab() === tab ? '#1A1A1A' : '#9E9E9E'"
            (click)="activeTab.set(tab)">
            {{ tab }}
          </span>
        }
      </div>

      <!-- Product Card -->
      <div class="product-card">
        <img
          src="assets/figma-images/phone1-product-photo.png"
          alt="Caramel Frappuccino"
          style="width: 180px; height: 200px; object-fit: contain;" />
        <div class="product-info">
          <span class="product-name">Caramel Frappuccino</span>
          <span class="product-price">$30.00</span>
        </div>
      </div>

      <!-- Add to Cart -->
      <button class="cta-btn" (click)="onAddToCart()">Add to Cart</button>
    </div>
  `,
  styles: [`
    .screen {
      width: 390px;
      min-height: 844px;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      font-family: 'Inter', sans-serif;
      padding: 48px 24px 32px;
      box-sizing: border-box;
    }
    .header { display: flex; flex-direction: column; gap: 4px; margin-bottom: 20px; }
    .brand { font-size: 20px; font-weight: 700; color: #1A1A1A; }
    .tagline { font-size: 14px; color: #9E9E9E; }
    .nav-tabs { display: flex; flex-direction: row; gap: 24px; margin-bottom: 32px; }
    .tab { font-size: 13px; cursor: pointer; text-transform: uppercase; letter-spacing: 0.05em; }
    .product-card {
      background: #4E9F6B;
      border-radius: 40px;
      padding: 32px 24px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      box-shadow: 0px 8px 24px rgba(78, 159, 107, 0.35);
    }
    .product-info { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .product-name { font-size: 18px; font-weight: 700; color: #FFFFFF; }
    .product-price { font-size: 16px; font-weight: 600; color: #FFFFFF; }
    .cta-btn {
      margin-top: 32px;
      background: #1A1A1A;
      color: #FFFFFF;
      border: none;
      border-radius: 12px;
      padding: 16px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
    }
    .cta-btn:hover { background: #333333; }
  `]
})
export class Phone1Component {
  activeTab = signal('DRINKS');
  tabs = signal(['DRINKS', 'HOT TEAS', 'BAKERY', 'HOT COFFEE']);

  onAddToCart(): void {
    // TODO: Implement add to cart
  }
}
```

---

## 📞 USAGE COMMANDS

```
"Generate Angular components from Figma file key: <your-file-key>"
"Follow .github/copilot-instructions.md exactly and generate Angular components from Figma file: <your-file-key>"
"Generate Angular components from Figma file <your-file-key>, only screens: phone 1, phone 2"
"Generate Angular components from Figma file <your-file-key> into src/app/features/ui/"
```

---

## 🎯 OPERATIONAL MODES

| Mode | Behavior |
|---|---|
| **Auto (DEFAULT)** | ALL frames — 100% coverage |
| **Selective** | Only screens listed by name |
| **Incremental** | Only screens not already in output directory |
| **Sync** | All screens + remove components for deleted Figma frames |

> Unless developer specifies selective mode, ALWAYS use Auto.

---

## 🔍 GUIDELINE INTEGRATION

Auto-reads from: `.github/copilot-instructions.md`, `.gemini/GEMINI.md`, `.windsurf/rules/guidelines.md`, `.junie/guidelines.md`, `docs/guidelines/*.md`, root `*-guidelines.md`

Applied rules: naming, imports, signal usage, styling approach, accessibility, Angular template syntax version.

---

## ✅ COMPLETION CHECKLIST

**Safety:**
- [ ] Pre-execution safety passed
- [ ] Output directories validated
- [ ] No forbidden file modifications

**Figma Analysis:**
- [ ] MCP connected, all frames fetched
- [ ] Screen count reported to developer
- [ ] Each screen classified by type
- [ ] ALL image fill node IDs identified

**Image Extraction:**
- [ ] Every image layer exported via Figma API
- [ ] All images saved to `src/assets/figma-images/`
- [ ] All `src` and `background-image` paths verified to exist
- [ ] Zero placeholder image values remaining

**Generation:**
- [ ] Guidelines applied
- [ ] Pixel-perfect CSS (exact px, hex, shadows, gradients)
- [ ] Absolute positioning used for non-auto-layout layers
- [ ] Modern Angular syntax only (`@if`, `@for` with `track`, signals)
- [ ] No `let` inside `@for`
- [ ] No `*ngFor`, `*ngIf`, `[ngStyle]`, `[ngClass]`
- [ ] All interactivity stubs added
- [ ] Auto-generated headers on all files
- [ ] Barrel export created
- [ ] `app.routes.ts` auto-updated ✅
- [ ] `app.component.html` → `<router-outlet />` ✅
- [ ] 100% frame coverage

**Validation:**
- [ ] Zero Angular errors
- [ ] Zero legacy syntax
- [ ] Zero missing image paths
- [ ] Final validation passed ✅

**Completion:**
- [ ] Report generated after zero errors only
- [ ] Only `screens/`, `assets/figma-images/`, `app.routes.ts`, `app.component.html` touched ✅

---

## 📋 REPORT STRUCTURE

```markdown
# Screen Generation Report

## Executive Summary
- **Figma File:** 9JMNzjswh41uGeD5rXF8Ru
- **Total Screens:** <N> | **Generated:** <N> (100% ✅)
- **Images Exported:** <N> files → src/assets/figma-images/
- **Validation:** ✅ PASSED — 0 errors
- **Errors Fixed:** <N>
- **Angular Version:** 18+
- **Timestamp:** <ISO>

## Screens Processed
1. `phone1.component.ts` — phone 1 (390×844px) [Mobile/E-commerce] ✅
   - Images: phone1-product-photo.png, phone1-background.png
2. `phone2.component.ts` — phone 2 (390×844px) [Mobile/Detail] ✅
   - Images: phone2-hero.png
3. `background.component.ts` — background (1440×900px) [Background] ✅
   - Images: background-wallpaper.png

## Images Exported
| File | Source Layer | Node ID | Size |
|------|-------------|---------|------|
| phone1-product-photo.png | product-image | 12:34 | 180×200px |
| phone2-hero.png | hero-banner | 12:56 | 390×240px |

## Error Resolution
- Fixed `*ngFor` → `@for` in phone2.component.ts
- Fixed missing `track` in phone1.component.ts
- **Final: 0 errors** ✅

## Integration Steps
1. Run `ng serve` — routing already configured
2. Visit `localhost:4200` → default screen
3. Visit `localhost:4200/phone2` → phone 2 screen
```

---

## 🎓 BEST PRACTICES

**For Developers:**
- Run `ng serve` immediately after generation — routing is pre-configured
- Check `src/assets/figma-images/` to verify all images exported correctly
- Use Figma Dev Mode to cross-check exact measurements if anything looks off

**For Figma Designers:**
- Name all frames and layers clearly — names become file and variable names
- Name image layers descriptively (e.g. `product-photo`, `hero-banner`, not `Rectangle 14`)
- Use Figma's image fill on rectangles for photos — these get auto-exported
- Use consistent color styles/variables

**For Agent Execution:**
- CRITICAL: Fetch ALL frames via MCP before generating
- CRITICAL: Export ALL image fills — never leave placeholders
- CRITICAL: Use exact Figma values — never approximate
- CRITICAL: Self-validate and fix all errors before reporting done
- CRITICAL: Routing and `app.component.html` are always updated automatically

---

*END OF SPECIFICATION*
*Version: 2.0.0*
*Last Updated: 2026-05-20*
*Compatible: Angular 17+, Angular 18+ (recommended), Figma REST API v1, Figma MCP Server*