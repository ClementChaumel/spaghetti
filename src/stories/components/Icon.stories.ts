import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Spaghetti/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ArrowRight: Story = {
  args: {
    name: "arrowRight",
    color: "#000",
  },
};
