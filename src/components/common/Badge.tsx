import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import type { AccentColor } from '../../types/design';
import { accentVarByColor } from '../../types/design';
import './common.css';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  accent?: AccentColor;
}

export function Badge({ children, accent = 'black', style, ...props }: BadgeProps) {
  return (
    <span
      className="badge"
      style={{ '--accent-color': accentVarByColor[accent], ...style } as CSSProperties}
      {...props}
    >
      {children}
    </span>
  );
}
