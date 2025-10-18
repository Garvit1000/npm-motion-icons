# Motion Icons React

<div align="center">

![Motion Icons React](https://img.shields.io/badge/Motion%20Icons-React-blue?style=for-the-badge)
[![npm version](https://img.shields.io/npm/v/@motion-icons/react?style=for-the-badge)](https://www.npmjs.com/package/@motion-icons/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge)](https://www.typescriptlang.org/)

**The easiest way to add smooth animations to Lucide icons in React**

[Demo](https://motionicons.dev) • [Documentation](#documentation) • [Examples](#examples) • [Contributing](#contributing)

</div>

## ✨ Features

- 🎯 **Easy to use** - Drop-in replacement for Lucide React icons
- 🎨 **Rich animations** - 10+ built-in animations (spin, bounce, wiggle, etc.)
- 🚀 **Entrance effects** - Eye-catching entrance animations
- ♿ **Accessible** - Respects `prefers-reduced-motion`
- 📱 **Responsive** - Works on all screen sizes
- 🎛️ **Customizable** - Full control over timing, triggers, and styling
- 📦 **Lightweight** - Minimal bundle size impact
- 🔧 **TypeScript** - Full type safety included

## 🚀 Quick Start

### Installation

Choose your preferred package manager:

```bash
# npm
npm install @motion-icons/react lucide-react

# pnpm
pnpm add @motion-icons/react lucide-react

# yarn
yarn add @motion-icons/react lucide-react

# bun
bun add @motion-icons/react lucide-react
```

### Basic Usage

```tsx
import { MotionIcon } from '@motion-icons/react';
import '@motion-icons/react/style.css';

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

## 📖 Documentation

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Lucide icon name (e.g., "Heart", "Star") |
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `"currentColor"` | Icon color (CSS color value) |
| `weight` | `"light" \| "regular" \| "bold"` | `"regular"` | Icon stroke weight |
| `animation` | `AnimationType` | `"none"` | Main animation type |
| `entrance` | `EntranceAnimationType \| null` | `null` | Entrance animation |
| `trigger` | `"always" \| "hover" \| "click" \| "focus"` | `"always"` | Animation trigger |
| `interactive` | `boolean` | `false` | Enable hover effects and focus states |
| `animationDuration` | `number` | `1000` | Animation duration in milliseconds |
| `animationDelay` | `number` | `0` | Animation delay in milliseconds |
| `className` | `string` | `""` | Additional CSS classes |
| `onClick` | `function` | - | Click event handler |
| `onMouseEnter` | `function` | - | Mouse enter event handler |
| `onMouseLeave` | `function` | - | Mouse leave event handler |

### Animation Types

#### Main Animations
- `pulse` - Gentle pulsing effect
- `spin` - Continuous rotation
- `bounce` - Bouncing motion
- `ping` - Radar-like ping effect
- `wiggle` - Side-to-side wiggle
- `flip` - 3D flip animation
- `heartbeat` - Heart-like beating
- `shake` - Shake effect
- `swing` - Pendulum swing
- `tada` - Celebration animation
- `rubber` - Rubber band effect

#### Entrance Animations
- `fadeIn` - Fade in from transparent
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale up from center
- `slideInUp` - Slide in from bottom
- `slideInDown` - Slide in from top
- `rotateIn` - Rotate while fading in
- `zoomIn` - Zoom in with scale

## 🎯 Examples

### Basic Animation
```tsx
<MotionIcon
  name="Star"
  animation="spin"
  size={32}
  color="#FFD700"
/>
```

### Entrance Animation
```tsx
<MotionIcon
  name="Rocket"
  entrance="zoomIn"
  animation="bounce"
  animationDuration={800}
  size={48}
/>
```

### Interactive Icon
```tsx
<MotionIcon
  name="Heart"
  animation="heartbeat"
  trigger="hover"
  interactive
  size={32}
  onClick={() => console.log('Liked!')}
/>
```

### Custom Styling
```tsx
<MotionIcon
  name="Bell"
  animation="shake"
  trigger="click"
  className="text-blue-500 hover:text-blue-600"
  interactive={true}
  size={24}
/>
```

### Loading Spinner
```tsx
<MotionIcon
  name="Loader2"
  animation="spin"
  size={20}
  className="text-gray-500"
/>
```

## 🎨 Advanced Usage

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
import { MotionIcon, type MotionIconProps } from '@motion-icons/react';

const MyIcon: React.FC<MotionIconProps> = (props) => {
  return <MotionIcon {...props} />;
};
```

## 🛠️ Development

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
npm link @motion-icons/react
```

#### pnpm
```bash
# In the package directory
pnpm run build
pnpm link --global

# In your test project
pnpm link --global @motion-icons/react
```

#### yarn
```bash
# In the package directory
yarn build
yarn link

# In your test project
yarn link @motion-icons/react
```

#### bun
```bash
# In the package directory
bun run build
bun link

# In your test project
bun link @motion-icons/react
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on top of [Lucide React](https://lucide.dev/) icons
- Inspired by modern animation libraries
- Thanks to all contributors and users

## 📞 Support

- 🐛 [Report Issues](https://github.com/Garvit1000/motion-icons/issues)
- 💬 [Discussions](https://github.com/Garvit1000/motion-icons/discussions)
- 📧 [Email Support](mailto:garvitjoshi543@gmail.com)

---

<div align="center">

**Made with ❤️ by [Garvit1000](https://github.com/Garvit1000)**

[⭐ Star this repo](https://github.com/Garvit1000/motion-icons) if you find it helpful!

</div>