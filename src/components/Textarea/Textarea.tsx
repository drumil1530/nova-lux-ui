import { useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import type { TextareaProps } from './Textarea.types';
import {
  borderClasses,
  radiusClasses,
  focusClasses,
  focusColorClasses,
  variantClasses,
  placeholderClasses,
} from '../Input/Input.config';
import { resolveColor } from '../../utils/colorResolver';
import { resizeClasses } from './Textarea.config';

export function Textarea({
  color = 'neutral',
  variant = 'outline',
  radius = 'md',
  rows = 3,
  disabled,
  placeholder,
  resize = 'vertical',
  autoGrow = false,
  className,
  ...props
}: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const resolved = resolveColor(color);

  useEffect(() => {
    if (!autoGrow || !textareaRef.current) return;
    const textarea = textareaRef.current;

    const adjustHeight = () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    adjustHeight();
    textarea.addEventListener('input', adjustHeight);

    return () => textarea.removeEventListener('input', adjustHeight);
  }, [autoGrow]);

  const classes = cn(
    'w-full px-3 py-2 transition-colors duration-150',
    variantClasses[variant],
    borderClasses[resolved],
    radiusClasses[radius],
    placeholderClasses[resolved],
    focusClasses,
    focusColorClasses[resolved],
    resizeClasses[resize],
    className
  );

  return (
    <textarea
      ref={textareaRef}
      rows={rows}
      disabled={disabled}
      placeholder={placeholder}
      className={classes}
      {...props}
    />
  );
}
