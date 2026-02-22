import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@dtverse/ui";

const meta: Meta<typeof Button> = {
  title: "DTVerse/Core/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    isLoading: { control: "boolean" },
    asChild: { control: "boolean" },
  },
  args: {
    children: "DTVerse Button",
    variant: "primary",
    size: "md",
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Icon button">
        +
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { isLoading: true, children: "Loading" },
};