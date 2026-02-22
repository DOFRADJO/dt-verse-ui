import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = { title: "DTVerse/Debug/Tailwind" };
export default meta;

export const Check: StoryObj = {
  render: () => (
    <div className="p-6">
      <div className="bg-black text-white p-4 rounded-xl">Tailwind OK</div>
    </div>
  ),
};