import type { Colors } from '../../utils/types';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVarinats = 'solid' | 'outline' | 'ghost';
export type ButtonColors = Colors;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColors;
  variant?: ButtonVarinats;
  size?: ButtonSize;
}
