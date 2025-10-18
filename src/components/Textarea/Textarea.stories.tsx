import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { BASE_COLORS, SEMANTIC_COLORS } from '../../utils/colors';
import type { InputRadius, InputVariant } from '../Input/Input.types';

const COLORS_ALL = [...SEMANTIC_COLORS, ...BASE_COLORS] as const;
const RADIUS: InputRadius[] = ['none', 'sm', 'md', 'lg', 'xl'] as const;
const VARIANTS: InputVariant[] = ['outline', 'filled', 'ghost'] as const;
const RESIZE = ['none', 'vertical', 'horizontal', 'both'] as const;

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: COLORS_ALL,
    },
    radius: {
      control: 'select',
      options: RADIUS,
    },
    variant: {
      control: 'select',
      options: VARIANTS,
    },
    resize: {
      control: 'select',
      options: RESIZE,
    },
    autoGrow: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    rows: { control: { type: 'number', min: 1, max: 10 } },
  },
  args: {
    color: 'neutral',
    radius: 'md',
    variant: 'outline',
    resize: 'vertical',
    autoGrow: false,
    placeholder: 'Enter your message...',
    rows: 3,
    disabled: false,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Colored: Story = {
  args: { color: 'primary', placeholder: 'Primary colored textarea' },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled textarea' },
};

export const NoResize: Story = {
  args: { resize: 'none', placeholder: 'Resize disabled' },
};
