import type { Meta, StoryObj } from "@storybook/react-vite";
import { AuthCard, Input, Label } from "@dtverse/ui";

const meta: Meta<typeof AuthCard> = {
  title: "DTVerse/Blocks/AuthCard",
  component: AuthCard,
  args: {
    mode: "login",
    title: "Sign in",
    description: "Access your DTVerse dashboard.",
  },
};

export default meta;
type Story = StoryObj<typeof AuthCard>;

export const Login: Story = {
  args: {
    providers: [
      { id: "google", label: "Continue with Google", onClick: () => alert("Google") },
      { id: "github", label: "Continue with GitHub", onClick: () => alert("GitHub"), variant: "outline" },
    ],
    primaryAction: { label: "Sign in", onClick: () => alert("Sign in") },
    footer: (
      <div className="flex items-center justify-between">
        <a className="underline" href="#">
          Create account
        </a>
        <a className="underline" href="#">
          Forgot password?
        </a>
      </div>
    ),
    children: (
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input placeholder="you@company.com" />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" placeholder="••••••••" />
        </div>
      </div>
    ),
  },
};

export const Register: Story = {
  args: {
    mode: "register",
    title: "Create account",
    description: "Start building in minutes.",
    primaryAction: { label: "Create account", onClick: () => alert("Create account") },
    footer: (
      <div className="text-center">
        Already have an account?{" "}
        <a className="underline" href="#">
          Sign in
        </a>
      </div>
    ),
    children: (
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>Full name</Label>
          <Input placeholder="Donald Tambou" />
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input placeholder="you@company.com" />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" placeholder="••••••••" />
        </div>
      </div>
    ),
  },
};

export const ForgotPassword: Story = {
  args: {
    mode: "forgot",
    title: "Reset password",
    description: "We’ll send you a reset link.",
    primaryAction: { label: "Send reset link", onClick: () => alert("Reset link sent") },
    footer: (
      <div className="text-center">
        <a className="underline" href="#">
          Back to sign in
        </a>
      </div>
    ),
    children: (
      <div className="space-y-2">
        <Label>Email</Label>
        <Input placeholder="you@company.com" />
      </div>
    ),
  },
};