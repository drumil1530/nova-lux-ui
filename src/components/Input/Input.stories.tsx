import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { BASE_COLORS, SEMANTIC_COLORS } from '../../utils/colors';
import type { InputRadius, InputSize, InputVariant } from './Input.types';

const VARIANTS: InputVariant[] = ['ghost', 'filled', 'outline'] as const;
const COLORS_ALL = [...SEMANTIC_COLORS, ...BASE_COLORS] as const;
const RADIUS: InputRadius[] = ['none', 'sm', 'md', 'lg', 'xl'] as const;
const SIZE: InputSize[] = ['sm', 'md', 'lg'] as const;


const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: VARIANTS,
    },
    radius: {
      control: 'select',
      options: RADIUS,
    },
    color: {
      control: 'select',
      options: COLORS_ALL,
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },

  args: {
    variant: 'outline',
    size: 'md',
    radius: 'md',
    color: 'primary',
    placeholder: 'Enter text...',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3 w-64">
      <Input {...args} variant="filled" placeholder="Filled" />
      <Input {...args} variant="outline" placeholder="Outline" />
      <Input {...args} variant="ghost" placeholder="Ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3 w-64">
      {SIZE.map((s) => (
        <Input key={s} {...args} size={s} placeholder={s} />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {COLORS_ALL.map((color) => (
        <Input key={color} {...args} color={color} placeholder={color} />
      ))}
    </div>
  ),
};

export const Radius: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3 w-64">
      {RADIUS.map((r) => (
        <Input key={r} {...args} radius={r} placeholder={r} />
      ))}
    </div>
  ),
};
