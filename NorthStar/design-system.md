# EnamelOS Design System

> The complete design language for EnamelOS -- a dental practice management platform.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing Scale](#spacing-scale)
5. [Elevation & Shadows](#elevation--shadows)
6. [Iconography](#iconography)
7. [Components](#components)
8. [Input & Controls](#input--controls)
9. [Modal & Overlay](#modal--overlay)
10. [Mono & Back](#mono--back)
11. [Navigation](#navigation)
12. [Feedback & States](#feedback--states)
13. [Data Hierarchy](#data-hierarchy)
14. [Motion & Animation](#motion--animation)
15. [Layout Patterns](#layout-patterns)
16. [Usage Rules](#usage-rules)
17. [Accessibility](#accessibility)

---

## Design Principles

### 1. Clinical Clarity
Every interface element must communicate its purpose instantly. In a clinical environment, cognitive load is the enemy. Prefer explicit labels, semantic color, and predictable layouts over clever or compact UI.

### 2. Calm Confidence
The visual language should feel reassuring and professional. Soft teal accents, generous whitespace, and subtle animations convey competence without urgency. The system never shouts.

### 3. Progressive Disclosure
Show only what's needed at each level. Overview screens use KPIs and badges to summarize; detail screens reveal full context. Navigation is shallow -- never more than two clicks from any data point.

### 4. AI as Collaborator
AI-driven features are surfaced as suggestions, not directives. Confidence scores, review workflows, and human approval gates ensure clinicians remain in control.

### 5. Consistent Density
Information-dense screens (analytics, case lists) use the same spacing and typographic hierarchy as lighter screens (today, settings). Density is controlled through grid columns and card composition, not by shrinking tokens.

---

## Color Palette

### Core Tokens

| Token | Hex       | Role                        |
|-------|-----------|-----------------------------|
| `bg`  | `#F9FAFB` | Page background             |
| `s1`  | `#F3F4F6` | Surface 1 (subtle fill)     |
| `s2`  | `#E5E7EB` | Surface 2 (medium fill)     |
| `s3`  | `#D1D5DB` | Surface 3 (strong fill)     |
| `bd`  | `#E5E7EB` | Default border              |
| `t1`  | `#111827` | Primary text                |
| `t2`  | `#4B5563` | Secondary text              |
| `t3`  | `#9CA3AF` | Tertiary text / labels      |
| `nv`  | `#1F3A56` | Navy (structure / headings) |
| `tl`  | `#93BEB9` | Teal (primary action)       |
| `tlD` | `#7BA9A4` | Teal dark (hover)           |
| `tlB` | `rgba(30,183,166,.08)` | Teal background (8%) |
| `sk`  | `#4DB3F6` | Sky blue (info)             |
| `co`  | `#F58C8A` | Coral (soft alert)          |
| `am`  | `#FFB54C` | Amber (warning)             |
| `rd`  | `#E53935` | Red (critical / error)      |
| `wh`  | `#FFFFFF` | White                       |

### Semantic Mapping

| Semantic Role  | Token | Usage                                     |
|----------------|-------|--------------------------------------------|
| Success        | `tl`  | Completed states, positive metrics, CTAs   |
| Warning        | `am`  | Attention-needed states, pending items     |
| Critical       | `rd`  | Errors, overdue items, urgent alerts       |
| Informational  | `sk`  | New data, tips, secondary actions          |
| Neutral        | `t3`  | Disabled states, archived items            |

### Gradient Background

The mesh gradient creates a soft, living backdrop for page-level containers:

```
linear-gradient(135deg,
  #e0f5f1 0%, #dceef8 15%, #e6f7f5 30%,
  #d8eef6 45%, #e0f5f1 55%, #dce4f0 70%,
  #e6f7f5 80%, #dceef8 90%, #e0f5f1 100%)
```

Animated with `meshGrad` keyframes over 12 seconds at 55% opacity.

---

## Typography

### Font Families

| Family          | Variable | Usage                   |
|-----------------|----------|-------------------------|
| DM Sans         | `FT`     | All UI text             |
| JetBrains Mono  | `MN`     | Data, codes, metrics    |

### Type Scale

| Level           | Size  | Weight | Color  | Usage                        |
|-----------------|-------|--------|--------|------------------------------|
| Display         | 26px  | 700    | `nv`   | Hero headings                |
| H1              | 22px  | 700    | `nv`   | Page titles                  |
| H2              | 18px  | 600    | `nv`   | Section headings             |
| H3              | 16px  | 600    | `nv`   | Card titles                  |
| H4              | 14px  | 600    | `nv`   | Subsection headings          |
| Body Large      | 14px  | 500    | `t1`   | Primary body text            |
| Body            | 13px  | 500    | `t1`   | Standard body text           |
| Body Small      | 12px  | 400    | `t2`   | Secondary body text          |
| Caption         | 11px  | 600    | `t3`   | Labels, uppercase captions   |
| Overline        | 10px  | 600    | `t3`   | Category labels, uppercase   |
| Micro           | 9px   | 500    | `t3`   | Tight data labels            |
| Mono Data       | 11px  | 400    | `t2`   | Monospace metrics            |

### Letter Spacing

- Overline / Caption: `0.06em`
- All others: default

---

## Spacing Scale

Based on an 8px grid with sub-grid increments for tight UI:

| Token | Value | Usage                              |
|-------|-------|------------------------------------|
| `xs`  | 2px   | Icon gaps, tight inline spacing    |
| `sm`  | 4px   | Badge padding, compact gaps        |
| `md`  | 6px   | Flex gaps, small component margins |
| `base`| 8px   | Standard flex gap                  |
| `lg`  | 10px  | Card internal spacing              |
| `xl`  | 12px  | Section gaps, grid gaps            |
| `2xl` | 14px  | Card padding (vertical)            |
| `3xl` | 16px  | Card padding (horizontal), large gaps |
| `4xl` | 20px  | Section padding                    |
| `5xl` | 28px  | Page section margins               |
| `6xl` | 40px  | Hero spacing                       |
| `7xl` | 48px  | Maximum spacing                    |

### Border Radius

| Value | Usage                            |
|-------|----------------------------------|
| 4px   | Subtle rounding (inline tags)    |
| 6px   | Buttons, badges, nav pills       |
| 8px   | Standard buttons, input fields   |
| 10px  | Cards, panels                    |
| 12px  | Modal containers                 |
| 16px  | Large modals, overlays           |
| 18px  | Pill-shaped tabs                 |
| 20px  | Pill containers                  |
| 50%   | Circles (avatars, indicators)    |

---

## Elevation & Shadows

| Level     | Value                                      | Usage                     |
|-----------|--------------------------------------------|---------------------------|
| None      | `none`                                     | Default flat surfaces     |
| Hover     | `0 6px 20px rgba(30,183,166,.08)`          | Interactive card hover    |
| Focus     | `0 0 0 3px ${tl}60`                       | Focus ring (60% opacity)  |
| Modal     | `0 12px 40px rgba(0,0,0,.3)`              | Floating panels, tooltips |
| Overlay   | `0 20px 60px rgba(0,0,0,.3)`              | Full-screen modals        |

### Glow Effects

| Variant       | Value                                  | Usage                   |
|---------------|----------------------------------------|-------------------------|
| Subtle Glow   | `0 0 6px rgba(30,183,166,.15)`        | Idle pulsing elements   |
| Standard Glow | `0 0 6px rgba(30,183,166,.3)`         | Active glow state       |
| Strong Glow   | `0 0 18px rgba(30,183,166,.6)`        | Peak glow state         |
| Text Glow     | `text-shadow: 0 0 14px rgba(30,183,166,.8)` | Glowing text     |

---

## Iconography

EnamelOS uses emoji icons for primary navigation, providing instant recognition without an icon library dependency:

| Section    | Icon | Meaning              |
|------------|------|----------------------|
| Today      | `clipboard`  | Daily agenda   |
| Chairside  | `tooth`  | Clinical workflows |
| Cases      | `folder`  | Case management   |
| Design     | `palette`  | Design review    |
| Lab        | `factory`  | Lab operations   |
| Analytics  | `chart`  | Data & metrics   |
| Admin      | `gear`  | System settings   |

---

## Components

### Badge

Status indicator with semantic color coding.

**Props:**
- `type`: `success` | `warning` | `critical` | `info` | `neutral` | `teal` | `navy`
- `children`: Label text

**Styles:**
- Font: 10px, weight 600
- Padding: 2px 8px
- Border radius: 6px
- Color: semantic color at full opacity
- Background: semantic color at 8% opacity (hex + "12")

**Usage Rules:**
- Use for status indicators, category labels, and metric flags
- Keep labels concise (1-2 words)
- Always pair with contextual text -- badges alone lack sufficient context
- Never stack more than 3 badges inline

---

### Button (Btn)

Primary interactive element.

**Props:**
- `primary`: boolean -- filled teal background
- `active`: boolean -- outlined teal border, teal text
- `sm`: boolean -- compact size (11px/3px 10px vs 13px/7px 16px)
- `onClick`: function
- `style`: override object

**Variants:**

| Variant  | Border           | Background | Color   | Weight |
|----------|------------------|------------|---------|--------|
| Default  | 1px solid `bd`   | `wh`       | `t1`    | 500    |
| Active   | 1px solid `tl`   | `wh`       | `tl`    | 600    |
| Primary  | 1px solid `tl`   | `tl`       | `#fff`  | 600    |

**Common Styles:**
- Border radius: 8px
- Font family: DM Sans
- Transition: all 0.15s
- Cursor: pointer

**Usage Rules:**
- Use Primary for the single most important action per screen
- Use Active for selected/toggled states
- Use Default for secondary actions
- Use `sm` for toolbar buttons and compact layouts
- Never place two Primary buttons adjacent to each other

**Button Groups:**

| Pattern           | Gap  | Layout          | Example                    |
|-------------------|------|-----------------|----------------------------|
| Modal footer      | 10px | center-aligned  | Cancel + Confirm           |
| Tour navigation   | --   | space-between   | ← Prev + Next →           |
| Filter set        | 6px  | left-aligned    | All · Crown · Bridge       |

- Primary button always on the right in modal pairs
- Filter sets use `sm` + `active` for the selected item
- Use `space-between` for prev/next navigation pairs

---

### Card

Container component for grouping related content.

**Props:**
- `onClick`: function -- makes card interactive (hover effects)
- `anim`: boolean -- applies fade-up animation
- `glass`: boolean -- glassmorphism effect
- `bc`: string -- custom border color
- `mb`: number -- margin bottom
- `style`: override object

**Styles:**
- Padding: 14px 16px
- Border: 1px solid `bd`
- Border radius: 10px
- Background: `wh` (default) or `rgba(255,255,255,.82)` (glass)
- Backdrop filter: `blur(12px)` when glass
- Transition: all 0.25s

**Interactive Hover State:**
- Border color transitions to `tl`
- Transform: translateY(-2px) (lift effect)
- Box shadow: 0 6px 20px rgba(30,183,166,.08)

**Usage Rules:**
- Use `glass` variant on gradient backgrounds only
- Use `anim` for cards that appear on page load (staggered)
- Interactive cards (with `onClick`) automatically get hover effects
- Nest KPIs and Badges inside cards for rich content blocks

---

### KPI

Key performance indicator display.

**Props:**
- `label`: string -- metric name (displayed as overline)
- `value`: string/number -- primary metric value
- `sub`: string -- optional subtitle/context

**Styles:**
- Flex: 1 (fills available width)
- Padding: 12px 16px
- Border: 1px solid `bd`, radius 10px
- Label: 10px, weight 600, uppercase, `t3`, letter-spacing 0.06em
- Value: 20px, weight 700, `nv`, line-height 1
- Sub: 11px, `t3`, marginTop 3px

**Usage Rules:**
- Always display in flex rows of 3-4 KPIs
- Labels should be 1-3 words maximum
- Values should be formatted (e.g., "94.2%" not "0.942")
- Use `sub` for trend indicators or time context

---

### Avatar (Av)

User representation with auto-generated initials and colors.

**Props:**
- `name`: string -- full name (generates initials + hue)
- `size`: number -- diameter in pixels (default: 28)

**Color Generation:**
- Hue: `(name.charCodeAt(0) * 37) % 360`
- Background: `hsl(hue, 30%, 90%)`
- Text: `hsl(hue, 35%, 35%)`

**Styles:**
- Border radius: 50%
- Font size: size * 0.36
- Font weight: 600
- Display: flex centered

**Usage Rules:**
- Use in table rows, comments, and team views
- Standard size is 28px; use 32-36px for profile headers
- Always pass the full name -- first and last -- for two-letter initials

---

### Table (Tbl)

Data grid with sortable columns and interactive rows.

**Props:**
- `cols`: array of `{ label, w, key, render }`
- `rows`: array of data objects
- `onRow`: function -- row click handler

**Styles:**
- Outer: 1px solid `bd`, radius 10px, overflow hidden
- Header: grid layout, `s1` background, 11px uppercase `t3`, weight 600
- Rows: alternating `wh` / `bg`, padding 10px 14px
- First column: weight 500, `t1`; others: weight 400, `t2`
- Hover: `#E5F6FF` background
- Transition: background 0.15s

**Usage Rules:**
- Always define explicit column widths for predictable layout
- Use `render` for custom cell content (badges, avatars, actions)
- Keep row count reasonable (10-20 visible); paginate or filter beyond that
- First column should be the primary identifier (name, ID, date)

---

### Bar Chart (BarC)

Horizontal progress/percentage bar.

**Props:**
- `pct`: number (0-100) -- fill percentage
- `color`: string -- bar color (default: `tl`)

**Styles:**
- Height: 4px
- Background track: `s1`, radius 2px
- Fill bar: animated width (transition: width 0.8s)
- Label: 11px monospace, `t2`

**Usage Rules:**
- Use for single-metric progress indicators
- Always show the percentage label alongside
- Keep bars horizontal -- never vertical in this system

---

### Line Chart (ChartSVG)

SVG-based line chart with fill area.

**Props:**
- `data`: number array -- data points
- `w`: number -- width (default: 500)
- `h`: number -- height (default: 180)
- `color`: string -- line/fill color (default: `tl`)
- `labels`: string array -- x-axis labels

**Features:**
- Auto-scales to data min/max
- Filled area below line (8% opacity)
- Circular data points (r=3)
- Monospace axis labels (9px)

**Usage Rules:**
- Use for trend data with 5-12 points
- Always provide labels for x-axis context
- Single-color per chart; use multiple chart instances for comparisons

---

### Sliding Tabs (SlidingTabs)

Pill-style tab selector with animated transitions.

**Props:**
- `items`: string array -- tab labels
- `active`: string -- currently selected tab
- `onSelect`: function -- selection handler

**Styles:**
- Container: inline-flex, gap 2px, radius 20px, semi-transparent background
- Active tab: white background, teal border (1.5px), teal text, weight 600
- Inactive tab: transparent background, transparent border, `t3` text
- Transition: border-color 0.2s, color 0.2s, background 0.2s

**Usage Rules:**
- Use for filtering within a section (not for page navigation)
- Keep to 2-5 tabs; use a different pattern for more options
- Tab labels should be single words or very short phrases

---

### Back Navigation

Simple back-link for detail views.

**Styles:**
- Font: 14px, teal color
- Text: "← Back"
- Margin bottom: 16px

**Usage Rules:**
- Always present at the top of detail/drill-down views
- Links back to the parent list view
- Never nest more than one level of detail

---

### Gradient Background (GradBg)

Animated mesh gradient wrapper for page-level content.

**Styles:**
- Full bleed with absolute positioned gradient layer
- Animation: meshGrad 12s ease infinite
- Gradient opacity: 55%
- Content floats above with relative positioning

**Usage Rules:**
- Use only for landing/overview pages and the design system
- Never layer on top of the demo app interface
- Content on gradient backgrounds should use `glass` Card variant

---

## Input & Controls

### Toggle Switch

Binary on/off control used in settings panels and preference screens.

**Dimensions:**
- Track: 36 x 20px, border-radius 10px
- Thumb: 16 x 16px, border-radius 50%
- Thumb shadow: `0 1px 3px rgba(0,0,0,.2)`

**States:**

| State        | Track Background | Thumb Position | Opacity |
|--------------|------------------|----------------|---------|
| Off          | `s3` (#D1D5DB)   | left: 2px      | 1       |
| On           | `tl` (#93BEB9)   | left: 18px     | 1       |
| Disabled Off | `s2` (#E5E7EB)   | left: 2px      | 0.5     |
| Disabled On  | `tl` at 50%      | left: 18px     | 0.5     |

**Transitions:**
- Track background: 0.2s ease
- Thumb position: 0.2s ease

**Usage Rules:**
- Use for binary settings that take effect immediately (no save button needed)
- Label must appear to the left of the toggle
- Always show the current state visually -- never rely on the label alone

### Search Input

Text input for filtering and search across case lists, patient records, and admin views.

**Styles:**
- Padding: 8px 12px
- Border: 1px solid `bd`, radius 8px
- Font: 13px, DM Sans
- Placeholder: `t3` color

**States:**

| State    | Border          | Shadow                          | Text Color |
|----------|-----------------|----------------------------------|------------|
| Default  | 1px solid `bd`  | none                            | `t3`       |
| Focused  | 1px solid `tl`  | `0 0 0 3px ${tl}30`            | `t1`       |
| Disabled | 1px solid `s2`  | none                            | `t3`       |

**Usage Rules:**
- Placeholder text should describe what's searchable ("Search cases...", "Filter by name...")
- Focus ring uses 30% teal opacity (lighter than button focus)
- Disabled inputs should have `s1` background and 60% opacity

---

## Modal & Overlay

### Modal Dialog

Centered content panel for focused tasks, confirmations, and guided flows.

**Styles:**
- Background: `wh`
- Border radius: 16px
- Padding: 36px 40px
- Max width: 420px
- Shadow: `0 20px 60px rgba(0,0,0,.3)`
- Entrance animation: `.fs` (fadeScale, 0.4s ease-out)
- Text align: center

**Scrim (Backdrop):**

| Variant  | Value                  | Usage                          |
|----------|------------------------|--------------------------------|
| Light    | `rgba(0,0,0,.4)`       | Non-critical overlays          |
| Standard | `rgba(0,0,0,.6)`       | Welcome modal, confirmations   |
| Heavy    | `rgba(0,0,0,.75)`      | Tour mode, forced focus        |

### Tour Tooltip

Contextual popover anchored to a target element during the onboarding tour.

**Styles:**
- Background: `wh`
- Border radius: 12px
- Padding: 16px 20px
- Width: 280px
- Shadow: `0 12px 40px rgba(0,0,0,.3)`
- Arrow: 12x12px square rotated 45deg with matching border

**Content Structure:**
1. Title (14px, weight 600, `nv`)
2. Description (12px, `t2`, line-height 1.6)
3. Navigation buttons (Prev / Next or "Let's go!")

**Usage Rules:**
- Modals should have exactly two actions (primary + secondary) -- never more
- Tour tooltips anchor to the center of the target element
- Scrim blocks interaction with background content
- Exit is instant (no fade-out animation)
- Never nest modals inside modals

---

## Mono & Back

### Mono (Monospace Text)

Inline wrapper for data values that benefit from tabular alignment and visual distinction from prose text.

**Styles:**
- Font: JetBrains Mono (`MN`)
- Size: 11px
- Color: `t2` (#4B5563)

**Usage Examples:**

| Context    | Example Output          |
|------------|-------------------------|
| Percentage | `94.7%`                 |
| Duration   | `3.2 days`              |
| ID / Code  | `CASE-4821-A`           |
| Timestamp  | `2026-04-17 09:32`      |

**Usage Rules:**
- Use for any scannable numerical or coded data
- Always wrap percentages, durations, IDs, and timestamps
- Appears in table cells, KPI values, and inline metrics
- Never use for prose text or labels

### Back (Navigation)

Single-purpose navigation component for returning from detail views to parent lists.

**Styles:**
- Font: 14px
- Color: `tl` (#93BEB9)
- Text: "← Back" (left arrow + space + "Back")
- Margin bottom: 16px
- Cursor: pointer

**Usage Rules:**
- Required at the top of every detail/drill-down view
- Returns to the parent list via `back()` callback
- Never nest more than one level of detail
- No additional styling variants -- one pattern everywhere

---

## Navigation

### Top Navigation Bar

Persistent bar across all pages with logo and page-level tabs.

**Styles:**
- Height: ~42px
- Padding: 7px 12px
- Background: `wh`
- Border bottom: 1px solid `bd`
- Tab container: `s1` background, 1px `bd` border, radius 6px, padding 2px 4px

**Tab States:**

| State    | Border              | Background    | Color  | Weight |
|----------|---------------------|---------------|--------|--------|
| Inactive | 1px transparent     | transparent   | `t2`   | 500    |
| Active   | 1px solid `tl`      | `wh`          | `tl`   | 600    |
| Tour HL  | box-shadow 3px `tl` | `wh`          | `tl`   | 700    |

### Sidebar Navigation (Demo Mode)

Vertical section + sub-screen navigator for the 28-screen operational demo.

**Structure:**
- 7 sections (Today, Chairside, Cases, Design, Lab, Analytics, Admin)
- 4 sub-screens per section
- Emoji icon + label per section
- Active section: `nv` color, weight 600
- Active sub-screen: `tl` color, weight 600, tinted background (`tl` at 12%)

### Detail Routing

Drill-down from list views to detail views via table row or card click.

**Navigation Depth:**
```
Page (e.g. Demo) > Section (e.g. Cases) > Screen (e.g. Active Cases) > Detail (e.g. Case #4821)
```

- Maximum depth: 4 levels
- Detail views always show a Back button ("← Back", 14px, teal)
- `goD(type, data)` opens a detail; `back()` returns to parent
- Detail types: Patient, Scan, Review, Shipment, Team, Case

**Usage Rules:**
- Never navigate deeper than 4 levels
- Top nav tabs use `sm` button variant
- Sidebar is only visible in Demo mode
- Active states should be immediately visually distinguishable
- Emoji icons provide instant section recognition without an icon library

---

## Feedback & States

### Loading States

| Pattern              | Usage                                | Visual                                    |
|----------------------|--------------------------------------|-------------------------------------------|
| Spinner              | Inline or overlay loading            | 28px circle, 3px border, `tl` top color   |
| Progress bar         | File uploads, batch processing       | 4px height, `tl` fill, animated gradient  |
| Button loading       | Form submission, save actions        | 14px spinner + "Saving..." text           |

**Spinner Spec:**
- Size: 28 x 28px
- Border: 3px solid `s2`, border-top-color `tl`
- Animation: `fu .7s linear infinite` (rotation)

**Progress Bar Spec:**
- Track: height 4px, `s1` background, radius 2px
- Fill: `tl` with gradient shimmer (`wave 2s ease infinite`)

### Alert Types

| Type     | Icon | Background    | Border         | Usage                      |
|----------|------|---------------|----------------|----------------------------|
| Success  | checkmark | `tl` at 10%  | `tl` at 30%   | Completed actions          |
| Warning  | warning | `am` at 10%  | `am` at 30%   | SLA deadlines, attention   |
| Critical | alarm | `rd` at 10%  | `rd` at 30%   | Failures, urgent issues    |
| Info     | bulb | `sk` at 10%  | `sk` at 30%   | AI suggestions, new data   |

**Styles:**
- Padding: 10px 14px
- Border radius: 8px
- Icon + message + badge layout
- Entrance: `.fu` animation with staggered delay (0.08s per item)

### Empty States

Displayed when a list or search returns no results.

**Structure:**
1. Large emoji illustration (32px)
2. Title (14px, weight 600, `nv`)
3. Description (12px, `t3`)
4. Action button (primary or default, `sm`)

**Styles:**
- Padding: 24px
- Background: `bg`
- Border: 1px dashed `s3`
- Border radius: 8px
- Text align: center

### Status Indicators

Presence dots for online/availability status.

| Status  | Color      | Glow                        |
|---------|------------|-----------------------------|
| Online  | `#22C55E`  | `0 0 6px #22C55E60`         |
| Away    | `am`       | none                        |
| Offline | `t3`       | none                        |
| Busy    | `rd`       | none                        |

- Dot: 8 x 8px, border-radius 50%
- Only "Online" has a glow effect

**Usage Rules:**
- Always pair alerts with an icon AND descriptive text
- Loading buttons should disable click and show `cursor: wait`
- Empty states must include a CTA that resolves the empty condition
- Never show raw error codes -- use friendly, actionable messages
- Status dots always appear alongside a text label

---

## Data Hierarchy

### Progressive Disclosure Flow

EnamelOS organizes information in three tiers, each progressively more detailed:

| Level          | Purpose                    | Components Used              |
|----------------|----------------------------|-------------------------------|
| **KPI Summary** | At-a-glance metrics       | KPI cards in 3-4 column rows |
| **Table/List** | Scannable record overview  | Tbl with Avatar, Badge, Mono |
| **Detail View** | Full record context       | Back + KPIs + full fields    |

Users drill down by clicking a table row or card, which opens the detail view via `goD(type, data)`. The Back component returns them to the parent list.

### Color with Opacity

Semantic colors at reduced opacity create tinted backgrounds. The hex suffix controls the alpha:

| Suffix | Opacity | Usage                                  |
|--------|---------|----------------------------------------|
| `08`   | ~3%     | Subtle tint (do's list background)     |
| `12`   | ~7%     | Badge background, active sidebar item  |
| `20`   | ~12%    | Alert background, accent fill          |
| `30`   | ~19%    | Alert border, focus ring               |
| `60`   | ~38%    | Focus ring (strong), glow              |
| `FF`   | 100%    | Full color (icons, text, fills)        |

### Information Density Rules

- KPIs show 3-4 metrics per row -- enough for a snapshot, not overwhelming
- Tables show 4-6 columns -- first column is always the primary identifier
- Detail views show everything -- no truncation at the deepest level
- Badge + Mono pair in tables: status (qualitative) + data (quantitative)
- Same spacing tokens at every level -- density changes via column count, not token shrinking

---

## Motion & Animation

### Keyframe Library

| Name        | Duration | Easing   | Description                        |
|-------------|----------|----------|------------------------------------|
| `fu`        | 0.45s    | ease-out | Fade up (translateY 12px to 0)     |
| `fi`        | 0.3s     | ease-out | Fade in (opacity only)             |
| `fadeScale`  | 0.4s    | ease-out | Fade + scale (0.96 to 1)           |
| `slideIn`   | 0.3s     | ease-out | Slide from left (translateX -10px) |
| `stag`      | 0.45s    | ease-out | Stagger fade up (16px)             |
| `float`     | 3s       | ease     | Gentle vertical float (infinite)   |
| `gl`        | 2s       | ease     | Box glow pulse (infinite)          |
| `mg`        | 2s       | ease-in-out | Subtle glow pulse (infinite)    |
| `glow2`     | 2s       | ease     | Text glow pulse (infinite)         |
| `scanline`  | 2s       | linear   | Scanning line (top to bottom)      |
| `meshGrad`  | 12s      | ease     | Background gradient shift          |
| `confetti`  | 2.5s     | ease     | Confetti particle fall             |
| `twinkle`   | 3s       | ease     | Opacity twinkle (0.15 to 0.8)      |
| `toothFloat`| 3s       | ease     | Gentle float (-6px, infinite)      |
| `tilt`      | 6s       | ease     | 3D tilt rotation (infinite)        |
| `wave`      | 12s      | ease     | Background position shift          |
| `pcGlow`    | 3s       | ease     | Large box glow pulse               |

### CSS Animation Classes

| Class | Animation | Usage                               |
|-------|-----------|-------------------------------------|
| `.fu` | `fu`      | Default page-enter for cards        |
| `.fi` | `fi`      | Subtle fade-in for secondary items  |
| `.fs` | `fadeScale`| Modal and overlay entrance          |

### Easing Curves

| Curve         | Duration Range | Usage                                                  |
|---------------|----------------|--------------------------------------------------------|
| `ease-out`    | 0.15--0.45s    | Entry animations, button responses -- fast start, gentle stop |
| `ease-in-out` | 2--3s          | Infinite loops (glow pulses, float) -- smooth both ways |
| `ease`        | 2--12s         | Background animations (mesh gradient, wave) -- natural  |
| `linear`      | 0.6--2s        | Spinners, scanning lines -- constant mechanical speed   |

### Transition Standards

| Property       | Duration | Usage                           |
|----------------|----------|---------------------------------|
| `all`          | 0.15s    | Button state changes            |
| `all`          | 0.2s     | General interactive feedback    |
| `all`          | 0.25s    | Card hover effects              |
| `width`        | 0.8s     | Progress bar fill               |
| `background`   | 0.15s    | Table row hover                 |
| `border-color` | 0.2s     | Tab selection                   |

### Motion Principles

1. **Enter from below**: New content enters with `translateY(12-16px)` + fade. This creates a sense of content rising into view.
2. **Exit is instant**: Removed content disappears immediately. No exit animations.
3. **Hover lifts**: Interactive elements lift 2px on hover, creating a physical "pressing" metaphor.
4. **Glow for attention**: Pulsing glow effects draw attention to key actions (e.g., Memento CTA).
5. **Stagger for groups**: When multiple cards appear, stagger their `animation-delay` by 0.05-0.1s.

---

## Layout Patterns

### Page Structure

```
[Top Nav Bar] ......................... 42px
[Content Area] ..................... flex: 1
  [Sidebar (Demo only)] ............ 200px
  [Main Content] .................. flex: 1
    [Page Header] .................. auto
    [Content Grid] ................. auto
```

### Grid Patterns

| Pattern              | Columns          | Gap  | Usage                     |
|----------------------|------------------|------|---------------------------|
| KPI Row              | `1fr 1fr 1fr`   | 12px | Metric summaries          |
| Two-Column Split     | `2fr 1fr`       | 16px | Content + sidebar         |
| Equal Split          | `1fr 1fr`       | 12px | Comparison layouts        |
| Three-Column         | `1fr 1fr 1fr`   | 12px | Gallery, feature grids    |

### Flex Patterns

| Pattern            | Gap  | Usage                          |
|--------------------|------|--------------------------------|
| Tight group        | 3-4px| Badge rows, icon+text pairs    |
| Standard group     | 6-8px| Button groups, nav items       |
| Relaxed group      | 12px | Card sections, form fields     |
| Spacious group     | 16px | Major section separation       |

---

## Usage Rules

### Do

- Use teal (`tl`) as the primary accent for all interactive elements
- Maintain the 8px spacing grid for all layout decisions
- Apply `fu` animation to cards entering the viewport
- Use navy (`nv`) for all heading text
- Keep data in monospace (`MN`) for easy scanning
- Use Badge to indicate status -- never rely on color alone
- Provide hover states for all clickable elements
- Show a Back button on every detail view
- Use empty states with a clear CTA when lists are vacant
- Pair loading spinners with descriptive text

### Don't

- Mix coral and red in the same view -- one signals soft alerts, the other critical errors
- Use more than one level of glassmorphism nesting
- Animate exit transitions -- content should leave immediately
- Use shadows on cards in their default state -- shadows are reserved for hover
- Place primary buttons inside cards that are themselves clickable
- Use custom colors outside the defined palette
- Override font weights with values not in the scale (300, 400, 500, 600, 700)
- Navigate deeper than Page > Section > Screen > Detail
- Show raw error codes to clinical users -- use friendly messages
- Rely on color alone to communicate state

---

## Accessibility

### Color Contrast Ratios

| Pair         | Ratio  | WCAG Level | Usage            |
|--------------|--------|------------|------------------|
| `t1` on `wh` | 15.4:1 | AAA        | Primary text     |
| `t2` on `wh` | 7.3:1  | AAA        | Secondary text   |
| `t3` on `wh` | 3.0:1  | AA         | Tertiary/labels  |
| `nv` on `wh` | 10.2:1 | AAA        | Headings         |
| `wh` on `tl` | 2.7:1  | AA Large   | Button text      |
| `wh` on `nv` | 10.2:1 | AAA        | Inverse text     |

### Focus Indicators

All interactive elements display a visible focus ring when navigated via keyboard:

| Element  | Ring                          | Notes                    |
|----------|-------------------------------|--------------------------|
| Button   | `0 0 0 3px ${tl}60`          | 60% teal opacity         |
| Input    | `0 0 0 3px ${tl}30`          | 30% teal opacity         |
| Card     | `0 0 0 3px ${tl}40`          | 40% teal opacity         |

### Interaction Feedback

- All clickable elements have visible hover states (lift, border, shadow)
- Focus ring is visible on all interactive elements via keyboard navigation
- Loading states include both a spinner and descriptive text
- Badges use text labels -- never color alone -- for status
- Empty states include a descriptive message and an actionable CTA
- Alert messages pair an icon with text for redundant signaling

### Semantic Color Independence

Color must always be reinforced by a secondary indicator:

- **Badges**: Always include a text label (e.g., "Delivered", "Overdue")
- **Alerts**: Always include an icon alongside the colored background
- **Status dots**: Always appear next to a text label ("Online", "Away")
- **Charts**: Use labels and values, not just colored bars

---

*EnamelOS Design System -- April 2026*
