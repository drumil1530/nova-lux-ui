import type { DefaultColor, SemanticColor } from './types';

export const COLORS = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
] as const;

export const SEMANTIC_COLORS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
] as const;

export const SEMANTIC_VARIANTS: Record<SemanticColor, Partial<DefaultColor>> = {
  primary: 'blue',
  secondary: 'zinc',
  success: 'green',
  danger: 'red',
  warning: 'amber',
} as const;
