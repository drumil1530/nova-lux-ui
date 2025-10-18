import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { BASE_COLORS, SEMANTIC_COLORS } from '../../utils/colors';
import type { TextSize, TextType } from './Text.types';
import type { ElementType } from 'react';

const COLORS_ALL = [...SEMANTIC_COLORS, ...BASE_COLORS] as const;
const SIZES: TextSize[] = ['sm', 'md', 'lg'] as const;
const VARIANTS: TextType[] = ['normal', 'subtle'] as const;
const ELEMENTS: ElementType[] = [
  'p',
  'span',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
] as const;

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],

  argTypes: {
    as: {
      control: 'select',
      options: ELEMENTS,
      description: 'HTML element to render as',
    },
    variant: {
      control: 'select',
      options: VARIANTS,
      description: 'Text color intensity',
    },
    size: {
      control: 'select',
      options: SIZES,
      description: 'Font size preset',
    },
    color: {
      control: 'select',
      options: COLORS_ALL,
      description: 'Color palette (semantic or base)',
    },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
  },

  args: {
    children: 'This is a Text component',
    as: 'p',
    size: 'md',
    variant: 'normal',
    color: 'neutral',
    bold: false,
    italic: false,
    underline: false,
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      {VARIANTS.map((v) => (
        <Text key={v} {...args} variant={v}>
          Variant: {v}
        </Text>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      {SIZES.map((s) => (
        <Text key={s} {...args} size={s}>
          Size: {s}
        </Text>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {COLORS_ALL.map((color) => (
        <Text key={color} {...args} color={color}>
          {color}
        </Text>
      ))}
    </div>
  ),
};

export const Styles: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Text {...args} bold>
        Bold text
      </Text>
      <Text {...args} italic>
        Italic text
      </Text>
      <Text {...args} underline>
        Underlined text
      </Text>
      <Text {...args} bold italic>
        Bold + Italic text
      </Text>
      <Text {...args} bold underline>
        Bold + Underline text
      </Text>
    </div>
  ),
};
