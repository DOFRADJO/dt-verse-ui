import "../tailwind.css";
import type { Preview } from "@storybook/react-vite";

export const decorators = [
  (Story) => (
    <div className="min-h-screen bg-zinc-50 p-6 dark:bg-zinc-950">
      <Story />
    </div>
  ),
];

const preview: Preview = {
  parameters: {
    layout: "centered",
  },
};

export default preview;