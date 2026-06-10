import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react';
import type { AccentColor } from '../../types/design';
import { accentVarByColor } from '../../types/design';
import './common.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  accent?: AccentColor;
  className?: string;
}

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = NativeButtonProps | LinkButtonProps;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    accent = 'red',
    className = '',
    style,
  } = props;
  const classes = `button button--${variant} ${className}`.trim();
  const accentStyle = {
    '--accent-color': accentVarByColor[accent],
    ...style,
  } as CSSProperties;

  if (props.href !== undefined) {
    const linkProps = props as LinkButtonProps;
    const { children: _children, variant: _variant, accent: _accent, className: _className, ...anchorProps } = linkProps;
    void _children;
    void _variant;
    void _accent;
    void _className;

    return (
      <a className={classes} style={accentStyle} {...anchorProps}>
        {children}
      </a>
    );
  }

  const nativeProps = props as NativeButtonProps;
  const {
    children: _children,
    variant: _variant,
    accent: _accent,
    className: _className,
    href: _href,
    ...buttonProps
  } = nativeProps;
  void _children;
  void _variant;
  void _accent;
  void _className;
  void _href;

  return (
    <button className={classes} style={accentStyle} {...buttonProps}>
      {children}
    </button>
  );
}
