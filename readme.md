# Motion Icons React

<div align="center">

[![npm version](https://img.shields.io/npm/v/motion-icons-react?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/motion-icons-react)
[![downloads](https://img.shields.io/npm/dm/motion-icons-react?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/motion-icons-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

Animated React icons. No framer-motion boilerplate. No variants. Just props.

[Demo](https://motionicons.dev) · [Documentation](https://none-9e5c6865.mintlify.app/) · [Why Motion Icons](#why-motion-icons) · [Recipes](#recipes)

</div>

---

## Overview

Animating icons in React is repetitive. With framer-motion, every icon needs a wrapper, a variants object, and timing config:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, rotate: 360 }}
  transition={{ duration: 1 }}
>
  <Bell />
</motion.div>
```

Motion Icons does the same thing in one line:

```tsx
<MotionIcon name="Bell" animation="spin" entrance="fadeInUp" />
```

## Features

- 3,500+ icons via Lucide React
- 19 preset animations covering loops, feedback, and entrances
- Built-in interactive states (hover, click, focus)
- Tuned animation curves and durations based on Emil Kowalski's design engineering principles
- Respects `prefers-reduced-motion` automatically
- ~5 KB minified, no runtime dependencies beyond React and Lucide
- Full TypeScript types
- Declarative, prop-driven API

## Installation

```bash
npm install motion-icons-react lucide-react
```

```bash
yarn add motion-icons-react lucide-react
```

```bash
pnpm add motion-icons-react lucide-react
```

## Basic Usage

```tsx
import { MotionIcon } from 'motion-icons-react';
import 'motion-icons-react/style.css';

// Looping animation
<MotionIcon name="Heart" animation="pulse" />

// Entrance on mount
<MotionIcon name="Bell" entrance="fadeInUp" />

// Interactive — hover lift, click press, keyboard focus
<MotionIcon name="ThumbsUp" animation="bounce" trigger="hover" interactive />
```

All props are optional except `name`. Defaults are subtle and production-friendly.

## Why Motion Icons

### Compared to Framer Motion

<table>
<tr>
<th>Framer Motion</th>
<th>Motion Icons</th>
</tr>
<tr>
<td>

```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <Loader2 size={20} />
</motion.div>
```

</td>
<td>

```tsx
<MotionIcon
  name="Loader2"
  animation="spin"
  size={20}
/>
```

</td>
</tr>
</table>

| | Motion Icons | Framer Motion |
| --- | --- | --- |
| Lines of code | 1 | 8+ |
| Wrapper element | None | Required |
| Bundle size | ~5 KB | ~30 KB |
| API style | Declarative props | Imperative configuration |
| Built-in animations | 19 presets | None (manual curves) |

### When to use what

Use Motion Icons for animated icons: loading spinners, notification chimes, button feedback, success states, and entrance reveals.

Use Framer Motion for complex page transitions, layout animations, and gesture-driven UIs.

## Animation Catalogue

### Looping animations

`pulse`, `spin`, `bounce`, `ping`, `wiggle`, `flip`, `heartbeat`

### Attention animations

`shake`, `swing`, `tada`, `rubber`

### Feedback animations

`press` (160 ms click feedback), `nudge` (200 ms hover hint), `success` (220 ms confirmation), `pop` (200 ms list-insert entrance)

### Entrance animations

`fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `slideInUp`, `slideInDown`, `rotateIn`, `zoomIn`

[See all animations in action](https://motionicons.dev)

## Props

### Core

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | required | Lucide icon name |
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `"currentColor"` | Stroke color |
| `weight` | `"light" \| "regular" \| "bold"` | `"regular"` | Stroke weight |

### Animation

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | `AnimationType` | `"none"` | Main animation |
| `entrance` | `EntranceAnimationType \| null` | `null` | Entrance on mount |
| `trigger` | `"always" \| "hover" \| "click" \| "focus"` | `"always"` | When to play |
| `animationDuration` | `number` | `1000` | Duration in ms |
| `animationDelay` | `number` | `0` | Delay in ms |

### Interaction

| Prop | Type | Description |
| --- | --- | --- |
| `interactive` | `boolean` | Enables hover lift and active press feedback |
| `onClick` | `(e) => void` | Click handler |
| `onMouseEnter` / `onMouseLeave` | `(e) => void` | Hover handlers |

### Accessibility

| Prop | Type | Description |
| --- | --- | --- |
| `aria-label` | `string` | Screen reader label (defaults to icon name) |

## Recipes

### Like button

```tsx
const [liked, setLiked] = useState(false);

<MotionIcon
  name="Heart"
  animation={liked ? "heartbeat" : "none"}
  color={liked ? "#ef4444" : "#6b7280"}
  onClick={() => setLiked(!liked)}
  interactive
/>
```

### Loading button

```tsx
<button disabled={loading}>
  {loading && <MotionIcon name="Loader2" animation="spin" size={16} />}
  {loading ? "Submitting..." : "Submit"}
</button>
```

### Notification badge

```tsx
<MotionIcon
  name="Bell"
  animation={unreadCount > 0 ? "wiggle" : "none"}
  interactive
/>
```

### Search input

```tsx
<MotionIcon
  name={searching ? "Loader2" : "Search"}
  animation={searching ? "spin" : "none"}
  size={16}
/>
```

### Success toast

```tsx
<MotionIcon
  name="CheckCircle"
  entrance="zoomIn"
  animation="success"
  color="#10b981"
/>
```

### Click feedback

```tsx
<MotionIcon
  name="Copy"
  animation="press"
  trigger="click"
  onClick={handleCopy}
  interactive
/>
```

[More recipes](https://none-9e5c6865.mintlify.app/essentials/recipes)

## Design Principles

The animation timings, easing curves, and feedback patterns follow design engineering guidance documented at [animations.dev](https://animations.dev/):

- Custom easing curves over the built-in CSS keywords, which feel weak.
- Entrances start fast and use `ease-out` so motion is visible the moment the user looks.
- UI animations stay under 300 ms; click feedback lives in the 100–160 ms band.
- Nothing animates from `scale(0)` — entrances start at `scale(0.92)` or higher with opacity 0.
- Hover scaling is gated behind `@media (hover: hover) and (pointer: fine)` so touch devices do not fire phantom hovers.
- Buttons receive a `scale(0.97)` press response on `:active`, so the interface feels responsive.
- `prefers-reduced-motion` is honoured by collapsing transforms to opacity-only fades, not by removing feedback entirely.

## Accessibility

- `prefers-reduced-motion`: looping and movement-heavy animations are disabled; entrances collapse to a 200 ms opacity fade so structural cues still appear.
- Semantic markup: interactive icons render with `role="button"` and a tab index; decorative icons render with `role="img"`.
- Keyboard support: `trigger="focus"` plays the animation only on `:focus-visible` (real keyboard focus), not on mouse clicks.
- Screen readers: every icon receives an `aria-label`, defaulting to the icon name.

## Development

```bash
git clone https://github.com/Garvit1000/motion-icons.git
cd motion-icons
npm install
npm run dev
```

### Linking locally

```bash
npm run build
npm link

# in the consuming project
npm link motion-icons-react
```

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Push the branch and open a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Support

- [Report an issue](https://github.com/Garvit1000/motion-icons/issues)
- [Discussions](https://github.com/Garvit1000/motion-icons/discussions)
- [Email](mailto:garvitjoshi543@gmail.com)

## License

MIT — see [LICENSE](LICENSE).

---

<div align="center">

Built by [Garvit](https://github.com/Garvit1000). If Motion Icons saves you time, please [star the repository](https://github.com/Garvit1000/motion-icons).

[![Star History Chart](https://api.star-history.com/svg?repos=Garvit1000/motion-icons&type=Date)](https://star-history.com/#Garvit1000/motion-icons&Date)

</div>
