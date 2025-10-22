# Motion Icons React

<div align="center">

![Motion Icons Banner](https://img.shields.io/badge/Motion%20Icons-React-blue?style=for-the-badge)
[![npm version](https://img.shields.io/npm/v/motion-icons-react?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/motion-icons-react)
[![downloads](https://img.shields.io/npm/dm/motion-icons-react?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/motion-icons-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**Beautiful icons. Built for motion.**

The easiest way to add smooth animations to your React icons.

[Playground](https://motionicons.dev) • [Docs](https://none-9e5c6865.mintlify.app/) • [Examples](#examples)

</div>

---

## Why Motion Icons?

Most icon libraries are static. Adding animations means writing CSS, learning Framer Motion, or copy-pasting code snippets.

**Motion Icons makes it effortless:**

```tsx
import { MotionIcon } from 'motion-icons-react';

// Before: Static icon
<Heart size={32} />

// After: Animated in one prop
<MotionIcon name="Heart" animation="heartbeat" size={32} />
```

That's it. **No CSS. No animation libraries. Just one prop.**

---

## Features

<table>
<tr>
<td width="50%">

**Drop-in Simplicity**
<br/>Works with all 1000+ Lucide icons

**Rich Animations**
<br/>20+ pre-built animations ready to use

**Entrance Effects**
<br/>Eye-catching load animations

</td>
<td width="50%">

**Accessible**
<br/>Respects `prefers-reduced-motion`

**Lightweight**
<br/>Zero dependencies beyond React & Lucide

**TypeScript**
<br/>Full type safety included

</td>
</tr>
</table>

---

## Quick Start

### Installation

```bash
npm install motion-icons-react lucide-react
```

<details>
<summary>Other package managers</summary>

```bash
# pnpm
pnpm add motion-icons-react lucide-react

# yarn
yarn add motion-icons-react lucide-react

# bun
bun add motion-icons-react lucide-react
```

</details>

### Basic Usage

```tsx
import { MotionIcon } from 'motion-icons-react';
import 'motion-icons-react/style.css';

function App() {
  return (
    <MotionIcon 
      name="Heart" 
      animation="heartbeat" 
      size={32} 
      color="red" 
    />
  );
}
```

### Next.js Setup

Works seamlessly with Next.js 13+ App Router:

```tsx
'use client';

import { MotionIcon } from 'motion-icons-react';
import 'motion-icons-react/style.css';

export default function Page() {
  return <MotionIcon name="Rocket" animation="bounce" />;
}
```

> **Note:** Add `'use client'` directive when using interactive features.

---

## Examples

### Loading Spinner
```tsx
<MotionIcon 
  name="Loader2" 
  animation="spin" 
  size={24} 
/>
```

### Hover Animation
```tsx
<MotionIcon 
  name="Heart" 
  animation="heartbeat" 
  trigger="hover" 
  interactive 
/>
```

### Click to Animate
```tsx
<MotionIcon 
  name="Star" 
  animation="tada" 
  trigger="click" 
  onClick={() => console.log('Starred!')} 
/>
```

### Entrance Effect
```tsx
<MotionIcon 
  name="CheckCircle" 
  entrance="zoomIn" 
  className="text-green-500" 
/>
```

### Custom Button
```tsx
<button className="flex items-center gap-2">
  <MotionIcon 
    name="Send" 
    animation="wiggle" 
    trigger="hover" 
    size={20} 
  />
  Send Message
</button>
```

[Try it yourself on the playground →](https://motionicons.dev)

---

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Any Lucide icon name (e.g., "Heart", "Star") |
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `"currentColor"` | Icon color (CSS color or Tailwind class) |
| `animation` | `AnimationType` | `"none"` | Main animation (see below) |
| `entrance` | `EntranceType` | `null` | Entrance animation (plays once on mount) |
| `trigger` | `TriggerType` | `"always"` | When to animate: `always`, `hover`, `click`, `focus` |
| `interactive` | `boolean` | `false` | Enable hover scale effect |
| `animationDuration` | `number` | `1000` | Duration in milliseconds |
| `animationDelay` | `number` | `0` | Delay before animation starts |
| `className` | `string` | `""` | Additional CSS classes (Tailwind supported) |

### Animation Types

**Continuous Animations** (loop forever)
- `pulse` - Gentle opacity pulse
- `spin` - Smooth rotation
- `bounce` - Vertical bounce
- `ping` - Radar ping effect
- `wiggle` - Horizontal shake
- `flip` - 3D flip
- `heartbeat` - Double pulse like a heart
- `shake` - Intense shake
- `swing` - Pendulum motion
- `tada` - Celebration effect
- `rubber` - Rubber band stretch

**Entrance Animations** (play once)
- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `slideInUp`, `slideInDown`
- `rotateIn`, `zoomIn`

---

## Common Use Cases

### Notification Badge
```tsx
<div className="relative">
  <MotionIcon name="Bell" size={24} />
  <MotionIcon 
    name="Circle" 
    animation="ping" 
    size={8}
    color="red"
    className="absolute -top-1 -right-1"
  />
</div>
```

### Success Message
```tsx
<div className="flex items-center gap-2">
  <MotionIcon 
    name="CheckCircle" 
    entrance="zoomIn"
    size={24}
    color="green"
  />
  <span>Success!</span>
</div>
```

### Interactive Like Button
```tsx
const [liked, setLiked] = useState(false);

<button onClick={() => setLiked(!liked)}>
  <MotionIcon 
    name="Heart"
    animation={liked ? "heartbeat" : "none"}
    color={liked ? "red" : "gray"}
    trigger="click"
  />
</button>
```

---

## What's New in v1.0.4

✅ **Fixed:** Animations now work in Next.js with Tailwind CSS
✅ **Improved:** Better SSR hydration
✅ **Enhanced:** More dramatic animation effects
✅ **Better:** Trigger handling for smoother interactions

**Upgrading from v1.0.2 or earlier?**
```bash
npm install motion-icons-react@latest
rm -rf .next  # Clear Next.js cache
npm run dev
```

---

## Accessibility

Motion Icons automatically respects user preferences:

- **`prefers-reduced-motion`** - Animations are disabled if the user has motion reduction enabled
- **Semantic HTML** - Proper ARIA attributes
- **Keyboard support** - Focus states work with `trigger="focus"`

---

## Development

### Local Setup
```bash
git clone https://github.com/Garvit1000/motion-icons.git
cd motion-icons
npm install
npm run dev
```

### Testing Locally
```bash
npm run build
npm link

# In your test project
npm link motion-icons-react
```

---

## Contributing

We'd love your help! Here's how:

1. Fork the repo
2. Create a branch (`git checkout -b feature/cool-animation`)
3. Commit changes (`git commit -m 'Add cool animation'`)
4. Push to branch (`git push origin feature/cool-animation`)
5. Open a Pull Request

**Ideas for contributions:**
- New animation types
- Performance improvements
- Documentation improvements
- Bug fixes
- Example showcases

---

## FAQ

<details>
<summary><strong>Can I use this with other icon libraries?</strong></summary>

Currently, Motion Icons only supports Lucide icons. Support for other libraries may come in future versions.

</details>

<details>
<summary><strong>Does this work with Tailwind CSS?</strong></summary>

Yes! You can pass Tailwind classes via the `className` prop:
```tsx
<MotionIcon name="Heart" className="text-red-500 hover:text-red-600" />
```

</details>

<details>
<summary><strong>What's the bundle size impact?</strong></summary>

The package is tree-shakeable and adds minimal overhead (~5KB gzipped) beyond Lucide React.

</details>

<details>
<summary><strong>Can I create custom animations?</strong></summary>

Yes! Pass custom CSS classes via `className` and define your animations in CSS. Native support for custom animation objects is planned for v2.0.

</details>

<details>
<summary><strong>Why are animations not working in Next.js?</strong></summary>

Make sure you:
1. Added `'use client'` to your component
2. Imported the CSS: `import 'motion-icons-react/style.css'`
3. Updated to v1.0.3+ for Tailwind compatibility

</details>

---

## Roadmap

- [ ] Custom animation builder
- [ ] Animation presets (combine multiple animations)
- [ ] Vue.js support
- [ ] More entrance/exit animations
- [ ] Animation timeline control
- [ ] Framer Motion integration (optional)

**Have a feature request?** [Open an issue](https://github.com/Garvit1000/motion-icons/issues) →

---

## Credits

- Built with [Lucide React](https://lucide.dev/) - Beautiful open-source icons
- Inspired by modern animation libraries like Framer Motion
- Thanks to all [contributors](https://github.com/Garvit1000/motion-icons/graphs/contributors)

---

## License

MIT © [Garvit1000](https://github.com/Garvit1000)

Free to use in personal and commercial projects.

---

## Support

- **Bug Reports:** [GitHub Issues](https://github.com/Garvit1000/motion-icons/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Garvit1000/motion-icons/discussions)
- **Email:** [garvitjoshi543@gmail.com](mailto:garvitjoshi543@gmail.com)
- **Twitter:** Share your creations with #MotionIcons

---

<div align="center">

**Made with ❤️ by [Garvit](https://github.com/Garvit1000)**

If Motion Icons saves you time, consider [starring the repo](https://github.com/Garvit1000/motion-icons)!

[![Star History Chart](https://api.star-history.com/svg?repos=Garvit1000/motion-icons&type=Date)](https://star-history.com/#Garvit1000/motion-icons&Date)

</div>
