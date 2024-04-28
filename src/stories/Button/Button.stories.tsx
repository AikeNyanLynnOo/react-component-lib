import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components";

import {
  BUTTON_SHADOWS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "../../components/Button/lib/sharedData";
const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Button Component for reusable purpose",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: BUTTON_VARIANTS,
    },
    border: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: BUTTON_SIZES,
    },
    disabled: {
      control: { type: "boolean" },
    },
    shadow: {
      control: { type: "select" },
      options: BUTTON_SHADOWS,
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    //
    variant: "contained",
    text: "Text",
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
    text: "Button",
  },
};
export const Text: Story = {
  args: {
    variant: "text",
    text: "Text Button",
  },
};
export const Rounded: Story = {
  args: {
    variant: "rounded",
    text: "Rounded Button",
  },
};
export const ContainedHoverText: Story = {
  args: {
    variant: "contained-hover-text",
    text: "Contained-Hover-Text Button",
  },
};
export const ContainedHoverRounded: Story = {
  args: {
    variant: "contained-hover-rounded",
    text: "Contained-Hover-Round Button",
  },
};
export const TextHoverContained: Story = {
  args: {
    variant: "text-hover-contained",
    text: "Text Hover Contained",
  },
};
export const TextHoverRounded: Story = {
  args: {
    variant: "text-hover-rounded",
    text: "Text Hover Rounded",
  },
};

export const CustomTextElement: Story = {
  args: {},
  render: (args) => (
    <div>
      <Button {...args}>
        <span>Custom Text Element</span>
      </Button>
    </div>
  ),
};

export default meta;
