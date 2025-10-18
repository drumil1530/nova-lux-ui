import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import type { TextProps } from './Text.types';
import { BASE_COLORS, SEMANTIC_COLORS } from '../../utils/colors';

const meta: Meta<TextProps> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML element to render as',
    },
    variant: {
      control: 'select',
      options: ['normal', 'subtle'],
      description: 'Text color intensity',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Font size preset',
    },
    color: {
      control: 'select',
      options: [...BASE_COLORS, ...SEMANTIC_COLORS],
      description: 'Color palette',
    },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    children: 'This is a Text component',
    size: 'md',
    color: 'neutral',
    variant: 'normal',
    bold: false,
    italic: false,
    underline: false,
    as: 'p',
  },
};
