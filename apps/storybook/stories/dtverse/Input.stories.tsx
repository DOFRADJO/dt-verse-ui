import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, Label } from "@dtverse/ui";

const meta: Meta = {
  title: "DTVerse/Form/Input",
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="space-y-2 max-w-sm">
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
    </div>
  ),
};