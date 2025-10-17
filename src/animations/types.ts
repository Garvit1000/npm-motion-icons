// Animation types
export type AnimationType =
  // Tailwind-compatible
  | 'pulse'
  | 'spin'
  | 'bounce'
  | 'ping'
  // Custom animations
  | 'wiggle'
  | 'flip'
  | 'heartbeat'
  | 'shake'
  | 'swing'
  | 'tada'
  | 'rubber'
  | 'none';

// Entrance animation types
export type EntranceAnimationType =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'
  | 'slideInUp'
  | 'slideInDown'
  | 'rotateIn'
  | 'zoomIn';

// Trigger types
export type TriggerType =
  | 'always'
  | 'hover'
  | 'click'
  | 'focus';

// Weight types
export type WeightType =
  | 'light'
  | 'regular'
  | 'bold';