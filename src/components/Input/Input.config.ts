import type { DefaultColor } from '../../utils/types';
import type { InputRadius, InputSize, InputVariant } from './Input.types';

export const sizeClasses: Record<InputSize, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

export const radiusClasses: Record<InputRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

export const variantClasses: Record<InputVariant, string> = {
  outline: 'border bg-transparent',
  filled: 'border bg-zinc-100 dark:bg-zinc-900',
  ghost: 'border-0 bg-transparent shadow',
};

export const disabledClasses = 'opacity-50 cursor-not-allowed';

export const borderClasses: Record<DefaultColor, string> = {
  red: 'border-red-500 dark:border-red-400',
  orange: 'border-orange-500 dark:border-orange-400',
  amber: 'border-amber-500 dark:border-amber-400',
  yellow: 'border-yellow-500 dark:border-yellow-400',
  lime: 'border-lime-500 dark:border-lime-400',
  green: 'border-green-500 dark:border-green-400',
  emerald: 'border-emerald-500 dark:border-emerald-400',
  teal: 'border-teal-500 dark:border-teal-400',
  cyan: 'border-cyan-500 dark:border-cyan-400',
  sky: 'border-sky-500 dark:border-sky-400',
  blue: 'border-blue-500 dark:border-blue-400',
  indigo: 'border-indigo-500 dark:border-indigo-400',
  violet: 'border-violet-500 dark:border-violet-400',
  purple: 'border-purple-500 dark:border-purple-400',
  fuchsia: 'border-fuchsia-500 dark:border-fuchsia-400',
  pink: 'border-pink-500 dark:border-pink-400',
  rose: 'border-rose-500 dark:border-rose-400',
  slate: 'border-slate-500 dark:border-slate-400',
  gray: 'border-gray-500 dark:border-gray-400',
  zinc: 'border-zinc-500 dark:border-zinc-400',
  neutral: 'border-neutral-500 dark:border-neutral-400',
  stone: 'border-stone-500 dark:border-stone-400',
};

export const placeholderClasses: Record<DefaultColor, string> = {
  red: 'placeholder-red-400 dark:placeholder-red-500',
  orange: 'placeholder-orange-400 dark:placeholder-orange-500',
  amber: 'placeholder-amber-400 dark:placeholder-amber-500',
  yellow: 'placeholder-yellow-400 dark:placeholder-yellow-500',
  lime: 'placeholder-lime-400 dark:placeholder-lime-500',
  green: 'placeholder-green-400 dark:placeholder-green-500',
  emerald: 'placeholder-emerald-400 dark:placeholder-emerald-500',
  teal: 'placeholder-teal-400 dark:placeholder-teal-500',
  cyan: 'placeholder-cyan-400 dark:placeholder-cyan-500',
  sky: 'placeholder-sky-400 dark:placeholder-sky-500',
  blue: 'placeholder-blue-400 dark:placeholder-blue-500',
  indigo: 'placeholder-indigo-400 dark:placeholder-indigo-500',
  violet: 'placeholder-violet-400 dark:placeholder-violet-500',
  purple: 'placeholder-purple-400 dark:placeholder-purple-500',
  fuchsia: 'placeholder-fuchsia-400 dark:placeholder-fuchsia-500',
  pink: 'placeholder-pink-400 dark:placeholder-pink-500',
  rose: 'placeholder-rose-400 dark:placeholder-rose-500',
  slate: 'placeholder-slate-400 dark:placeholder-slate-500',
  gray: 'placeholder-gray-400 dark:placeholder-gray-500',
  zinc: 'placeholder-zinc-400 dark:placeholder-zinc-500',
  neutral: 'placeholder-neutral-400 dark:placeholder-neutral-500',
  stone: 'placeholder-stone-400 dark:placeholder-stone-500',
};

export const focusColorClasses: Record<DefaultColor, string> = {
  red: 'focus:ring-red-500 dark:focus:ring-red-400',
  orange: 'focus:ring-orange-500 dark:focus:ring-orange-400',
  amber: 'focus:ring-amber-500 dark:focus:ring-amber-400',
  yellow: 'focus:ring-yellow-500 dark:focus:ring-yellow-400',
  lime: 'focus:ring-lime-500 dark:focus:ring-lime-400',
  green: 'focus:ring-green-500 dark:focus:ring-green-400',
  emerald: 'focus:ring-emerald-500 dark:focus:ring-emerald-400',
  teal: 'focus:ring-teal-500 dark:focus:ring-teal-400',
  cyan: 'focus:ring-cyan-500 dark:focus:ring-cyan-400',
  sky: 'focus:ring-sky-500 dark:focus:ring-sky-400',
  blue: 'focus:ring-blue-500 dark:focus:ring-blue-400',
  indigo: 'focus:ring-indigo-500 dark:focus:ring-indigo-400',
  violet: 'focus:ring-violet-500 dark:focus:ring-violet-400',
  purple: 'focus:ring-purple-500 dark:focus:ring-purple-400',
  fuchsia: 'focus:ring-fuchsia-500 dark:focus:ring-fuchsia-400',
  pink: 'focus:ring-pink-500 dark:focus:ring-pink-400',
  rose: 'focus:ring-rose-500 dark:focus:ring-rose-400',
  slate: 'focus:ring-slate-500 dark:focus:ring-slate-400',
  gray: 'focus:ring-gray-500 dark:focus:ring-gray-400',
  zinc: 'focus:ring-zinc-500 dark:focus:ring-zinc-400',
  neutral: 'focus:ring-neutral-500 dark:focus:ring-neutral-400',
  stone: 'focus:ring-stone-500 dark:focus:ring-stone-400',
};

export const focusClasses = `
  focus:outline-none
  focus:ring-1
  focus:ring-offset-1
  focus:ring-offset-transparent
`;
