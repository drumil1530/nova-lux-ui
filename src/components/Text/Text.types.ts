import type { ElementType, ReactNode } from 'react';
import type { Colors, PolymorphicComponent } from '../../utils/types';

export type TextSize = 'sm' | 'md' | 'lg';
export type TextType = 'normal' | 'subtle';

export type TextProps<E extends ElementType = 'p'> = PolymorphicComponent<
  E,
  {
    as?: E;
    className?: string;
    variant?: TextType;
    size?: TextSize;
    color?: Colors;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    children: ReactNode;
  }
>;
