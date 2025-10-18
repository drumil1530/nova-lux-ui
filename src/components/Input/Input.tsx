import type { ElementType } from 'react';
import type { InputProps } from './Input.types';
import { cn } from '../../utils/cn';
import {
  sizeClasses,
  variantClasses,
  disabledClasses,
  borderClasses,
  radiusClasses,
  placeholderClasses,
  focusClasses,
  focusColorClasses,
} from './Input.config';
import { resolveColor } from '../../utils/colorResolver';

export function Input<E extends ElementType = 'input'>({
  as,
  radius = 'lg',
  size = 'md',
  variant = 'outline',
  color = 'neutral',
  className,
  disabled = false,
  ...props
}: InputProps<E>) {
  const Component = as || 'input';
  const resolved = resolveColor(color);

  const classes = cn(
    sizeClasses[size],
    variantClasses[variant],
    borderClasses[resolved],
    radiusClasses[radius],
    placeholderClasses[resolved],
    focusClasses,
    focusColorClasses[resolved],
    disabled && disabledClasses,
    className
  );

  return <Component className={classes} disabled={disabled} {...props} />;
}
