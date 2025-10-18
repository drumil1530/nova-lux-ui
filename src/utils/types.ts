import type { ComponentProps, ElementType } from 'react';
import type { BASE_COLORS, COLOR_MAP, SEMANTIC_COLORS } from './colors';

export type SemanticColor = (typeof SEMANTIC_COLORS)[number];
export type DefaultColor = (typeof BASE_COLORS)[number];
export type Colors = SemanticColor | DefaultColor;
export type SemanticMapValue = {
  base: DefaultColor;
  dark?: DefaultColor;
};

export type ThemeColor = keyof typeof COLOR_MAP;

export type PolymorphicComponent<E extends ElementType, P = object> = P &
  Omit<ComponentProps<E>, keyof P>;
