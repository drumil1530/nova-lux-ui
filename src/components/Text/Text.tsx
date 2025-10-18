import type { ElementType } from 'react';
import type { TextProps } from './Text.types';
import { cn } from '../../utils/cn';
import { colorClasses, sizeClasses } from './Text.config';
import { resolveColor } from '../../utils/colorResolver';

export function Text  <E extends ElementType = 'p'>({
  as,
  variant = 'normal',
  size = 'md',
  color = 'neutral',
  bold = false,
  italic = false,
  underline = false,
  className,
  children,
  ...rest
}: TextProps<E>) {
  const Component = as || 'p';
  const resolvedColor = resolveColor(color);

  const classes = cn(
    sizeClasses[size],
    colorClasses[variant][resolvedColor],
    bold && 'font-semibold',
    italic && 'italic',
    underline && 'underline',
    className
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};
