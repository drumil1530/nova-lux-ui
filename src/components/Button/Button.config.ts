import type { DefaultColor } from '../../utils/types';
import type { ButtonVarinats } from './Button.types';

// Size mappings
export const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
} as const;

// Variant types
export const variantClasses: Record<
  ButtonVarinats,
  Record<DefaultColor, string>
> = {
  solid: {
    red: 'bg-red-500 hover:bg-red-600 text-white',
    orange: 'bg-orange-500 hover:bg-orange-600 text-white',
    amber: 'bg-amber-500 hover:bg-amber-600 text-white',
    yellow: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    lime: 'bg-lime-500 hover:bg-lime-600 text-white',
    green: 'bg-green-500 hover:bg-green-600 text-white',
    emerald: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    teal: 'bg-teal-500 hover:bg-teal-600 text-white',
    cyan: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    sky: 'bg-sky-500 hover:bg-sky-600 text-white',
    blue: 'bg-blue-500 hover:bg-blue-600 text-white',
    indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
    violet: 'bg-violet-500 hover:bg-violet-600 text-white',
    purple: 'bg-purple-500 hover:bg-purple-600 text-white',
    fuchsia: 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white',
    pink: 'bg-pink-500 hover:bg-pink-600 text-white',
    rose: 'bg-rose-500 hover:bg-rose-600 text-white',
    slate: 'bg-slate-500 hover:bg-slate-600 text-white',
    gray: 'bg-gray-500 hover:bg-gray-600 text-white',
    zinc: 'bg-zinc-500 hover:bg-zinc-600 text-white',
    neutral: 'bg-neutral-500 hover:bg-neutral-600 text-white',
    stone: 'bg-stone-500 hover:bg-stone-600 text-white',
  },
  outline: {
    red: 'border border-red-500 text-red-500 hover:bg-red-100 dark:hover:bg-red-950',
    orange:
      'border border-orange-500 text-orange-500 hover:bg-orange-100 dark:hover:bg-orange-950',
    amber:
      'border border-amber-500 text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-950',
    yellow:
      'border border-yellow-500 text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-950',
    lime: 'border border-lime-500 text-lime-500 hover:bg-lime-100 dark:hover:bg-lime-950',
    green:
      'border border-green-500 text-green-500 hover:bg-green-100 dark:hover:bg-green-950',
    emerald:
      'border border-emerald-500 text-emerald-500 hover:bg-emerald-100 dark:hover:bg-emerald-950',
    teal: 'border border-teal-500 text-teal-500 hover:bg-teal-100 dark:hover:bg-teal-950',
    cyan: 'border border-cyan-500 text-cyan-500 hover:bg-cyan-100 dark:hover:bg-cyan-950',
    sky: 'border border-sky-500 text-sky-500 hover:bg-sky-100 dark:hover:bg-sky-950',
    blue: 'border border-blue-500 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-950',
    indigo:
      'border border-indigo-500 text-indigo-500 hover:bg-indigo-100 dark:hover:bg-indigo-950',
    violet:
      'border border-violet-500 text-violet-500 hover:bg-violet-100 dark:hover:bg-violet-950',
    purple:
      'border border-purple-500 text-purple-500 hover:bg-purple-100 dark:hover:bg-purple-950',
    fuchsia:
      'border border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950',
    pink: 'border border-pink-500 text-pink-500 hover:bg-pink-100 dark:hover:bg-pink-950',
    rose: 'border border-rose-500 text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-950',
    slate:
      'border border-slate-500 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-950',
    gray: 'border border-gray-500 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-950',
    zinc: 'border border-zinc-500 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-950',
    neutral:
      'border border-neutral-500 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-950',
    stone:
      'border border-stone-500 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-950',
  },
  ghost: {
    red: 'text-red-500 hover:bg-red-100 dark:hover:bg-red-950',
    orange: 'text-orange-500 hover:bg-orange-100 dark:hover:bg-orange-950',
    amber: 'text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-950',
    yellow: 'text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-950',
    lime: 'text-lime-500 hover:bg-lime-100 dark:hover:bg-lime-950',
    green: 'text-green-500 hover:bg-green-100 dark:hover:bg-green-950',
    emerald: 'text-emerald-500 hover:bg-emerald-100 dark:hover:bg-emerald-950',
    teal: 'text-teal-500 hover:bg-teal-100 dark:hover:bg-teal-950',
    cyan: 'text-cyan-500 hover:bg-cyan-100 dark:hover:bg-cyan-950',
    sky: 'text-sky-500 hover:bg-sky-100 dark:hover:bg-sky-950',
    blue: 'text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-950',
    indigo: 'text-indigo-500 hover:bg-indigo-100 dark:hover:bg-indigo-950',
    violet: 'text-violet-500 hover:bg-violet-100 dark:hover:bg-violet-950',
    purple: 'text-purple-500 hover:bg-purple-100 dark:hover:bg-purple-950',
    fuchsia: 'text-fuchsia-500 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950',
    pink: 'text-pink-500 hover:bg-pink-100 dark:hover:bg-pink-950',
    rose: 'text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-950',
    slate: 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-950',
    gray: 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-950',
    zinc: 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-950',
    neutral: 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-950',
    stone: 'text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-950',
  },
} as const;
