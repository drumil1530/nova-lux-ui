import type { SemanticColor, SemanticMapValue } from './types';

export const BASE_COLORS = [
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

export const COLOR_MAP: Record<SemanticColor, SemanticMapValue> = {
  primary: { base: 'blue', dark: 'indigo' },
  secondary: { base: 'zinc', dark: 'neutral' },
  success: { base: 'green' },
  danger: { base: 'red' },
  warning: { base: 'amber' },
} as const;
