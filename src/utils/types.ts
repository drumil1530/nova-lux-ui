import type { COLORS, SEMANTIC_COLORS } from './colors';

export type SemanticColor = (typeof SEMANTIC_COLORS)[number];

export type DefaultColor = (typeof COLORS)[number];

export type Colors = SemanticColor | DefaultColor;
