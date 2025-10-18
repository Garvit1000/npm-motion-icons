import React, { useState, useMemo, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../utils/classNames';
import type { AnimationType, EntranceAnimationType, TriggerType, WeightType } from '../animations/types';

export interface MotionIconProps {
  name: string;
  size?: number;
  color?: string;
  weight?: WeightType;
  animation?: AnimationType;
  entrance?: EntranceAnimationType | null;
  animationDuration?: number;
  animationDelay?: number;
  trigger?: TriggerType;
  interactive?: boolean;
  className?: string;
  'aria-label'?: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  onAnimationEnd?: (e: React.AnimationEvent<HTMLSpanElement>) => void;
}

// All available animations
const animationClasses: Record<string, string> = {
  // Tailwind-compatible animations
  pulse: 'motion-pulse',
  spin: 'motion-spin',
  bounce: 'motion-bounce',
  ping: 'motion-ping',

  // Custom animations
  wiggle: 'motion-wiggle',
  flip: 'motion-flip',
  heartbeat: 'motion-heartbeat',
  shake: 'motion-shake',
  swing: 'motion-swing',
  tada: 'motion-tada',
  rubber: 'motion-rubber',

  // None
  none: ''
};

// Entrance animations
const entranceAnimations: Record<string, string> = {
  fadeIn: 'motion-fade-in',
  fadeInUp: 'motion-fade-in-up',
  fadeInDown: 'motion-fade-in-down',
  fadeInLeft: 'motion-fade-in-left',
  fadeInRight: 'motion-fade-in-right',
  scaleIn: 'motion-scale-in',
  slideInUp: 'motion-slide-in-up',
  slideInDown: 'motion-slide-in-down',
  rotateIn: 'motion-rotate-in',
  zoomIn: 'motion-zoom-in'
};

const MotionIcon: React.FC<MotionIconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  weight = 'regular',
  animation = 'none',
  entrance = null,
  animationDuration = 1000,
  animationDelay = 0,
  trigger = 'always',
  interactive = false,
  className = '',
  'aria-label': ariaLabel,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onAnimationEnd,
  ...props
}) => {
  const [isAnimating, setIsAnimating] = useState(trigger === 'always');
  const [isHovered, setIsHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(!entrance);

  // Get the icon component from lucide-react
  const IconComponent = (LucideIcons as any)[name] || (LucideIcons as any)[`${name}Icon`] || (LucideIcons as any)[name.replace('Icon', '')];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  // Trigger entrance animation on mount
  useEffect(() => {
    if (entrance) {
      const timer = setTimeout(() => {
        setHasEntered(true);
      }, animationDelay);
      return () => clearTimeout(timer);
    }
  }, [entrance, animationDelay]);

  // Determine stroke width based on weight
  const strokeWidth = useMemo(() => {
    switch (weight) {
      case 'light': return 1.5;
      case 'bold': return 2.5;
      case 'regular':
      default: return 2;
    }
  }, [weight]);

  // Handle animation triggers
  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (trigger === 'hover') {
      setIsAnimating(true);
    }
    if (interactive) {
      setIsHovered(true);
    }
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (trigger === 'hover') {
      setIsAnimating(false);
    }
    if (interactive) {
      setIsHovered(false);
    }
    onMouseLeave?.(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (trigger === 'click') {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), animationDuration);
    }
    if (interactive) {
      onClick?.(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLSpanElement>) => {
    // Only trigger animation on keyboard focus, not mouse click
    if (trigger === 'focus' && (e.target as HTMLElement).matches(':focus-visible')) {
      setIsAnimating(true);
    }
  };

  const handleBlur = () => {
    if (trigger === 'focus') {
      setIsAnimating(false);
    }
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLSpanElement>) => {
    if (entrance && !hasEntered) {
      setHasEntered(true);
    }
    onAnimationEnd?.(e);
  };

  // Get animation classes
  const animationClass = animationClasses[animation] || '';
  const entranceClass = entrance && !hasEntered ? entranceAnimations[entrance] : '';
  const shouldAnimate = isAnimating && animation !== 'none';

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        interactive && 'cursor-pointer transition-transform duration-200',
        shouldAnimate && animationClass,
        entranceClass,
        isHovered && interactive && 'scale-110',
        className
      )}
      style={{
        animationDuration: `${animationDuration}ms`,
        animationDelay: `${animationDelay}ms`,
        color
      }}
      onClick={interactive || trigger === 'click' ? handleClick : undefined}
      onMouseEnter={interactive || trigger === 'hover' ? handleMouseEnter : undefined}
      onMouseLeave={interactive || trigger === 'hover' ? handleMouseLeave : undefined}
      onFocus={trigger === 'focus' ? handleFocus : undefined}
      onBlur={trigger === 'focus' ? handleBlur : undefined}
      onAnimationEnd={handleAnimationEnd}
      role={interactive ? 'button' : 'img'}
      aria-label={ariaLabel || name}
      tabIndex={interactive || trigger === 'focus' ? 0 : undefined}
      {...props}
    >
      <IconComponent
        size={size}
        strokeWidth={strokeWidth}
        aria-hidden="true"
      />
    </span>
  );
};

export default MotionIcon;