# Motion Icons React

<div align="center">

![Motion Icons React](https://img.shields.io/badge/Motion%20Icons-React-blue?style=for-the-badge)
[![npm version](https://img.shields.io/npm/v/motion-icons-react?style=for-the-badge)](https://www.npmjs.com/package/motion-icons-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge)](https://www.typescriptlang.org/)

**Animations without animation complexity.**

No framer-motion boilerplate. No variants. Just props.

[Demo](https://motionicons.dev) • [Documentation](https://none-9e5c6865.mintlify.app/) • [Why Motion Icons?](#why-motion-icons) • [Recipes](#recipes)

</div>

## The Problem

Animating icons in React is annoyingly repetitive:

```tsx
// With framer-motion - too much boilerplate
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, rotate: 360 }}
  transition={{ duration: 1 }}
>
  <Bell />
</motion.div>
```

## The Solution

```tsx
<MotionIcon name="Bell" animation="spin" entrance="fadeInUp" />
```

One line. No wrappers. No complexity.

## ✨ Features

-  **3500+ icons** through Lucide React
-  **15+ preset animations** ready to use
-  **Entrance effects** for eye-catching reveals
-  **Interactive states** built-in (hover, click, focus)
-  **Accessible** - respects `prefers-reduced-motion`
-  **Lightweight** - ~5KB (minimal bundle impact)
-  **TypeScript** - full type safety included
-  **Declarative API** - just props, no complexity

## Quick Start

### Installation

```bash
npm install motion-icons-react lucide-react
```

### Basic Usage

```tsx
import { MotionIcon } from 'motion-icons-react';
import 'motion-icons-react/style.css';

// Minimal (1 prop)
<MotionIcon name="Heart" animation="pulse" />

// With entrance
<MotionIcon name="Bell" entrance="fadeInUp" />

// Interactive hover
<MotionIcon name="ThumbsUp" animation="bounce" trigger="hover" interactive />
```

**All props are optional except `name`.** Defaults are subtle and production-friendly.

## Why Motion Icons?

### vs Framer Motion

<table>
<tr>
<th>Framer Motion (12 lines)</th>
<th>Motion Icons (1 line)</th>
</tr>
<tr>
<td>

```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear"
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

**Motion Icons React:**
- ✅ One line, no wrappers
- ✅ 15+ preset animations
- ✅ ~5KB bundle size
- ✅ Declarative API

**Framer Motion:**
- ❌ Wrapper div required
- ❌ Manual animation curves
- ❌ ~30KB bundle size
- ❌ Imperative API

### When to use what

**Use Motion Icons** for animated icons (loading, notifications, buttons)  
**Use Framer Motion** for complex layouts and page transitions

## Props by Category

### Core Props
- `name` (required) - Lucide icon name
- `size` (24) - Icon size in pixels
- `color` ("currentColor") - Icon color
- `weight` ("regular") - Stroke weight: light, regular, bold

### Animation Props
- `animation` ("none") - Main animation type
- `entrance` (null) - Entrance animation
- `trigger` ("always") - When to animate: always, hover, click, focus

### Timing Props
- `animationDuration` (1000) - Duration in milliseconds
- `animationDelay` (0) - Delay in milliseconds

### Interaction Props
- `interactive` (false) - Enable hover/focus states
- `onClick` - Click handler
- `onMouseEnter` / `onMouseLeave` - Hover handlers

### Accessibility Props
- `aria-label` - Screen reader label
- `role` - ARIA role

## Available Animations

**Main Animations:** pulse, spin, bounce, ping, wiggle, flip, heartbeat, shake, swing, tada, rubber

**Entrance Animations:** fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn, slideInUp, slideInDown, rotateIn, zoomIn

[See all animations in action →](https://motionicons.dev)

## Recipes

### Like Button
```tsx
const [isLiked, setIsLiked] = useState(false);

<MotionIcon
  name="Heart"
  animation={isLiked ? "heartbeat" : "none"}
  trigger="always"
  color={isLiked ? "#ef4444" : "#6b7280"}
  onClick={() => setIsLiked(!isLiked)}
  interactive
/>
```

### Loading Button
```tsx
<button disabled={isLoading}>
  {isLoading && <MotionIcon name="Loader2" animation="spin" size={16} />}
  {isLoading ? "Submitting..." : "Submit"}
</button>
```

### Notification Badge
```tsx
<MotionIcon
  name="Bell"
  animation={hasNotifications ? "wiggle" : "none"}
  trigger="always"
  interactive
/>
```

### Search Input
```tsx
<MotionIcon
  name={isSearching ? "Loader2" : "}
  animation={isSearching ? "spin" : "none"}
  size={16}
/>
```

### Success Toast
```tsx
<MotionIcon
  name="CheckCircle"
  entrance="zoomIn"
  animation="tada"
  color="#10b981"
/>
```

[See more recipes →](https://none-9e5c6865.mintlify.app/essentials/recipes)

## Advanced Usage

### What's New in v1.0.3

**🐛 Critical Bug Fix:** Animations now work correctly in Next.js with Tailwind CSS!

Previous versions had animations that appeared static in Next.js applications due to CSS conflicts with Tailwind utility classes. This has been completely resolved.

**Changes:**
- Fixed Tailwind CSS conflicts that prevented animations from working
- Improved SSR hydration for Next.js compatibility
- Enhanced animation visibility (more dramatic effects)
- Better trigger handling for `trigger="always"`

To update:

```bash
npm install motion-icons-react@latest
```

If upgrading from v1.0.2, clear your Next.js cache:
```bash
rm -rf .next
npm run dev
```

### Custom Animation Timing
```tsx
<MotionIcon
  name="Zap"
  entrance="fadeInUp"
  animation="pulse"
  animationDuration={500}
  animationDelay={200}
  trigger="hover"
/>
```

### Accessibility Considerations
The library automatically respects the user's `prefers-reduced-motion` setting. All animations are disabled when users have motion reduction enabled in their system preferences.

### TypeScript Support
Full TypeScript support is included with proper type definitions:

```tsx
import { MotionIcon, type MotionIconProps } from 'motion-icons-react';

const MyIcon: React.FC<MotionIconProps> = (props) => {
  return <MotionIcon {...props} />;
};
```

## Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/Garvit1000/motion-icons.git
cd motion-icons

# Install dependencies (choose one)
npm install
# or
pnpm install
# or
yarn install
# or
bun install

# Start development server
npm run dev

# Build the package
npm run build
```

### Testing with Package Manager Links

#### npm
```bash
# In the package directory
npm run build
npm link

# In your test project
npm link motion-icons-react
```

#### pnpm
```bash
# In the package directory
pnpm run build
pnpm link --global

# In your test project
pnpm link --global motion-icons-react
```

#### yarn
```bash
# In the package directory
yarn build
yarn link

# In your test project
yarn link motion-icons-react
```

#### bun
```bash
# In the package directory
bun run build
bun link

# In your test project
bun link motion-icons-react
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built on top of [Lucide React](https://lucide.dev/) icons
- Inspired by modern animation libraries
- Thanks to all contributors and users

## Support

- [Report Issues](https://github.com/Garvit1000/motion-icons/issues)
- [Discussions](https://github.com/Garvit1000/motion-icons/discussions)
- [Email Support](mailto:garvitjoshi543@gmail.com)

---

<div align="center">

**Made with ❤️ by [Garvit1000](https://github.com/Garvit1000)**

[⭐ Star this repo](https://github.com/Garvit1000/motion-icons) if you find it helpful!

</div>
