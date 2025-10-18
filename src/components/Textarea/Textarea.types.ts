import type { Colors } from '../../utils/types';
import type { InputRadius, InputVariant } from '../Input/Input.types';

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';

export type TextareaProps = {
  className?: string;
  color?: Colors;
  radius?: InputRadius;
  rows?: number;
  variant?: InputVariant;
  disabled?: boolean;
  placeholder?: string;
  resize?: TextareaResize;
  autoGrow?: boolean;
};
