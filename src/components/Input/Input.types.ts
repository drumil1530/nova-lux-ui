import type { ElementType } from 'react';
import type { Colors, PolymorphicComponent } from '../../utils/types';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type InputVariant = 'outline' | 'filled' | 'ghost';

export type InputProps<E extends ElementType = 'input'> = PolymorphicComponent<
  E,
  {
    as?: E;
    className?: string;
    radius?: InputRadius;
    size?: InputSize;
    variant?: InputVariant;
    color?: Colors;
    placeholder?: string;
    disabled?: boolean;
  }
>;
