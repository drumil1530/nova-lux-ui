import { COLOR_MAP } from './colors';
import type { Colors, DefaultColor, SemanticColor } from './types';

export function resolveColor(color: Colors, theme: 'light' | 'dark' = 'light'): DefaultColor {
  if (color in COLOR_MAP) {
    const map = COLOR_MAP[color as SemanticColor];
    return (theme === 'dark' && map.dark ? map.dark : map.base) as DefaultColor;
  }
  return color as DefaultColor;
}
