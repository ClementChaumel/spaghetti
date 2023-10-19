import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Spaghetti/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Continuer",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Continuer",
  },
};

export const Positive: Story = {
  args: {
    variant: "positive",
    label: "Continuer",
  },
};

export const Outline: Story = {
  args: {
    variant: "primary",
    isOutline: true,
    label: "Continuer",
  },
};
