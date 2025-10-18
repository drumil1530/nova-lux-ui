import type { ButtonProps } from './Button.types';
import { cn } from '../../utils/cn';
import { sizeClasses, variantClasses } from './Button.config';
import type { DefaultColor } from '../../utils/types';
import { resolveColor } from '../../utils/colorResolver';

export function Button({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const base = cn(
    'rounded-lg',
    'font-medium',
    'shadow-sm',
    'transition-colors',
    'duration-150',
    'hover:cursor-pointer',
    'disabled:cursor-not-allowed',
    'disabled:opacity-75',
    'disabled:shadow-none'
  );

  const resolvedColor = resolveColor(color);
  const variantMap = variantClasses[variant] || {};
  const classesForColor = variantMap[resolvedColor as DefaultColor] || '';

  const classes = cn(base, sizeClasses[size], classesForColor, className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
