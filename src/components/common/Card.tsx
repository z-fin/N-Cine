import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import type { AccentColor } from '../../types/design';
import { accentVarByColor } from '../../types/design';
import './common.css';

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  accent?: AccentColor;
  as?: 'article' | 'section' | 'div';
}

export function Card({
  children,
  accent = 'black',
  as: Component = 'article',
  className = '',
  style,
  ...props
}: CardProps) {
  return (
    <Component
      className={`card ${className}`.trim()}
      style={{ '--accent-color': accentVarByColor[accent], ...style } as CSSProperties}
      {...props}
    >
      {children}
    </Component>
  );
}
