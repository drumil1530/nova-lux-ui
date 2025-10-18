import { Button } from './Button';
import { BASE_COLORS, SEMANTIC_COLORS } from '../../utils/colors';
import type { Meta, StoryObj } from '@storybook/react';
import type { ButtonSize, ButtonVarinats } from './Button.types';

const VARIANTS: ButtonVarinats[] = ['solid', 'outline', 'ghost'] as const;
const SIZES: ButtonSize[] = ['sm', 'md', 'lg'] as const;
const COLORS_ALL = [...SEMANTIC_COLORS, ...BASE_COLORS] as const;

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: VARIANTS,
    },
    color: {
      control: { type: 'select' },
      options: COLORS_ALL,
    },
    size: {
      control: { type: 'select' },
      options: SIZES,
    },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

// Default story with controls
export const Playground: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    children: 'Button',
    disabled: false,
  },
  render: (args) => <Button {...args} />,
};
