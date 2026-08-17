# 25 UI Engineering & React Component Challenges

A curated collection of 25 production-grade UI components designed to master React state patterns, accessibility (WAI-ARIA), keyboard interactions, modern CSS layout tricks, and performance optimization.

---

## Tier 1: Interactive Fundamentals & Micro-Interactions

### 01. Accessible FAQ Accordion

- **Status:** Completed
- **Core Competencies:** Dual-mode expansion (single vs. multi-select), WAI-ARIA disclosure attributes (`aria-expanded`, `aria-controls`), pure CSS Grid `0fr` to `1fr` height interpolation, arrow key navigation with circular wrapping.
- **Layout:** Split (50/50)

### 02. Interactive Star Rating & Review Meter

- **Core Competencies:** Hover preview state tracking, precision half-star snapping, keyboard arrow adjustments, screen-reader value announcements via live regions.
- **Layout:** Split (50/50)

### 03. Multi-Step Wizard / Stepper Navigation

- **Core Competencies:** State preservation across step boundaries, linear vs. non-linear validation gating, progress meter interpolation, animated forward/backward transition states.
- **Layout:** Split (50/50)

### 04. OTP / Verification Code Input Group

- **Core Competencies:** Auto-focus forwarding between segmented input fields, paste event interception (auto-distribution of 6-digit strings), backspace regression handling, numeric input sanitization.
- **Layout:** Split (50/50)

### 05. Segmented Sliding Tab Control

- **Core Competencies:** Dynamic indicator pill positioning via DOM bounding rect measurements (`getBoundingClientRect`), smooth spring physics transition, keyboard `Home`/`End`/arrow selection.
- **Layout:** Split (50/50)

---

## Tier 2: Overlays, Portals & Feedback Systems

### 06. Floating Toast Notification Dispatcher

- **Core Competencies:** Imperative dispatch queue via custom event/context API, auto-dismiss countdown timer with pause-on-hover logic, stacked layout transforms, `aria-live="polite"` feedback.
- **Layout:** Full-Width

### 07. Accessible Dialog / Modal Sheet

- **Core Competencies:** React Portal rendering, active focus trapping (`Tab`/`Shift+Tab` containment), background body-scroll lock, escape key dismissal, focus restoration to trigger element on unmount.
- **Layout:** Split (50/50)

### 08. Context Menu & Nested Dropdown Action Bar

- **Core Competencies:** Viewport edge collision detection (auto-flipping vertically/horizontally), outside click listeners (`pointerdown`), sub-menu hover delay debouncing, full keyboard traversal.
- **Layout:** Split (50/50)

### 09. Interactive Tooltip & Popover Engine

- **Core Competencies:** Anchor element geometry binding, dynamic arrow pointing calculations, micro-delays on hover to prevent flickering, screen-reader disclosure semantics.
- **Layout:** Split (50/50)

### 10. Drawer / Off-Canvas Slide-Over Panel

- **Core Competencies:** Multi-directional slide transitions (left, right, bottom sheet), touch drag-to-dismiss gesture handling, velocity threshold checks, focus isolation.
- **Layout:** Split (50/50)

---

## Tier 3: Media, Visualization & Canvas Engines

### 11. Touch & Drag Image Carousel / Slider

- **Core Competencies:** Pointer drag tracking, touch swipe threshold calculations, CSS transform hardware acceleration, infinite loop wrapping, keyboard arrow support.
- **Layout:** Full-Width

### 12. Infinite Scroll Image Gallery with Lightbox

- **Core Competencies:** `IntersectionObserver` sentinel node detection, progressive image loading with blur-up placeholders, full-screen lightbox zoom modal.
- **Layout:** Full-Width

### 13. High-Performance Ocean/Wave Canvas Background

- **Core Competencies:** HTML5 Canvas rendering loop via `requestAnimationFrame`, trigonometric wave math, resolution adaptation for high-DPI screens, auto-pausing on tab visibility changes.
- **Layout:** Full-Width

### 14. Before/After Image Comparison Slider

- **Core Competencies:** Clip-path calculation based on pointer position, keyboard arrow adjustment, touch-scrubbing responsiveness, accessible slider input overlay.
- **Layout:** Split (50/50)

### 15. Custom Video Player Controller

- **Core Competencies:** HTML5 Video API state synchronization, custom scrub bar with hover timestamp previews, picture-in-picture mode, fullscreen toggle.
- **Layout:** Full-Width

---

## Tier 4: Forms, Filtering & Data Operations

### 16. Auto-Complete Search Bar with Combobox

- **Core Competencies:** Debounced API mock queries, keyboard navigation highlighting (`aria-activedescendant`), token matching and text highlighting, outside click closure.
- **Layout:** Split (50/50)

### 17. Multi-Select Tag Input with Filter Pills

- **Core Competencies:** Chip addition/removal with keyboard backspace interception, duplicate prevention, dropdown query filtering, keyboard focus management between chips and input.
- **Layout:** Split (50/50)

### 18. Multi-Range Slider with Histogram Distribution

- **Core Competencies:** Dual thumb dragging constraints (min <= max collision rules), dynamic track fill interpolation, background density bar highlighting.
- **Layout:** Split (50/50)

### 19. Drag-and-Drop File Upload Zone

- **Core Competencies:** Native drag-and-drop event listeners (`dragover`, `dragleave`, `drop`), file type and size validation, upload progress visualizer, preview generation via `URL.createObjectURL`.
- **Layout:** Split (50/50)

### 20. Markdown Live Preview Editor

- **Core Competencies:** Synchronized split-pane scrolling (proportional scroll calculation), basic syntax parsing, toolbar formatting injection (bold, code, headers).
- **Layout:** Full-Width

---

## Tier 5: Complex Layouts, Dashboards & Advanced State

### 21. High-Density Sortable Data Table

- **Core Competencies:** Multi-column sorting (ascending, descending, neutral), fuzzy search filtering, multi-row selection checkboxes, pagination engine, pinned sticky headers.
- **Layout:** Full-Width

### 22. Kanban Task Board with Drag-and-Drop

- **Core Competencies:** Column and card state synchronization, reordering logic within and between lists, drag state styling, optimistic UI updates.
- **Layout:** Full-Width

### 23. Interactive Tree View / File Directory Explorer

- **Core Competencies:** Recursive component rendering, collapsible directory nodes, multi-level keyboard navigation (left to close, right to open), folder/file state tree management.
- **Layout:** Split (50/50)

### 24. Command Palette (`Cmd + K` / `Ctrl + K`)

- **Core Competencies:** Global keyboard listener detection, fuzzy search scoring algorithm, categorized action triggers, keyboard-driven navigation with enter execution.
- **Layout:** Split (50/50)

### 25. Virtualized Infinite List

- **Core Competencies:** Virtual window calculation (rendering only visible DOM elements + buffer padding), dynamic row height support, scroll position persistence, huge memory footprint reduction.
- **Layout:** Full-Width

---

## Component Distribution Matrix

| #      | Challenge Name                | Primary Focus                         | Recommended Layout |
| :----- | :---------------------------- | :------------------------------------ | :----------------- |
| **01** | FAQ Accordion                 | Accessibility & CSS Grid Height       | Split              |
| **02** | Star Rating Meter             | Micro-interactions & Half-Step Snap   | Split              |
| **03** | Stepper Navigation            | Multi-step Validation & Animation     | Split              |
| **04** | OTP Code Input Group          | Clipboard Interception & Focus Flow   | Split              |
| **05** | Segmented Tab Control         | DOM Rect Math & Spring Physics        | Split              |
| **06** | Toast Notification Dispatcher | Queue Systems & Portal Dispatch       | Full-Width         |
| **07** | Accessible Modal Dialog       | Focus Trapping & Scroll Locking       | Split              |
| **08** | Context Menu & Dropdowns      | Viewport Boundary Flipping            | Split              |
| **09** | Tooltip / Popover Engine      | Coordinate Geometry Calculations      | Split              |
| **10** | Off-Canvas Slide Drawer       | Drag Gestures & Velocity Triggers     | Split              |
| **11** | Touch Image Carousel          | Touch Drag Tracking & Infinite Loop   | Full-Width         |
| **12** | Infinite Scroll Lightbox      | Intersection Observer & Media Zoom    | Full-Width         |
| **13** | Ocean Wave Canvas             | HTML5 Canvas Math & Performance       | Full-Width         |
| **14** | Comparison Slider             | Clip-path Geometry & Slider Bounds    | Split              |
| **15** | Video Player Controller       | Media API & Scrub Buffer Timing       | Full-Width         |
| **16** | Combobox Search Bar           | Keyboard Gating & Query Debounce      | Split              |
| **17** | Tag Filter Input              | Chip Deletion & Token Navigation      | Split              |
| **18** | Dual Range Histogram          | Multi-thumb Math Constraints          | Split              |
| **19** | Drag & Drop Uploader          | File API Streams & Object URLs        | Split              |
| **20** | Markdown Editor               | Synced Split Scrolling Calculations   | Full-Width         |
| **21** | Sortable Data Table           | Column Transforms & State Sorting     | Full-Width         |
| **22** | Kanban Board                  | Multi-container Drag Reordering       | Full-Width         |
| **23** | Recursive Tree View           | Recursive Hierarchy & Deep Expansion  | Split              |
| **24** | Command Palette               | Global Event Listeners & Fuzzy Search | Split              |
| **25** | Virtualized List              | Viewport Calculations & DOM Recycling | Full-Width         |
