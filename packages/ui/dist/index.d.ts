import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function Card({ className, ...props }: CardProps): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

type EmptyStateTone = "neutral" | "info" | "success" | "warning" | "danger";
interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    tone?: EmptyStateTone;
    primaryAction?: (ButtonProps & {
        label: string;
    });
    secondaryAction?: (ButtonProps & {
        label: string;
    });
}
declare function EmptyState({ title, description, icon, tone, primaryAction, secondaryAction, className, ...props }: EmptyStateProps): react_jsx_runtime.JSX.Element;

type AuthCardMode = "login" | "register" | "forgot";
interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: AuthCardMode;
    brand?: React.ReactNode;
    title?: string;
    description?: string;
    providers?: Array<{
        id: string;
        label: string;
        onClick: () => void;
        leftIcon?: React.ReactNode;
        variant?: ButtonProps["variant"];
    }>;
    children?: React.ReactNode;
    primaryAction?: ButtonProps & {
        label: string;
    };
    secondaryAction?: (ButtonProps & {
        label: string;
    }) | null;
    footer?: React.ReactNode;
}
declare function AuthCard({ mode, brand, title, description, providers, children, primaryAction, secondaryAction, footer, className, ...props }: AuthCardProps): react_jsx_runtime.JSX.Element;

interface PricingFeature {
    label: string;
    included?: boolean;
    hint?: string;
}
interface PricingPlan {
    id: string;
    name: string;
    description?: string;
    price: string;
    period?: string;
    badge?: string;
    highlight?: boolean;
    features: PricingFeature[];
    cta: ButtonProps & {
        label: string;
    };
}
interface PricingTableProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    plans: PricingPlan[];
    columns?: 1 | 2 | 3 | 4;
}
declare function PricingTable({ title, subtitle, plans, columns, className, ...props }: PricingTableProps): react_jsx_runtime.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}
declare function Label({ className, ...props }: LabelProps): react_jsx_runtime.JSX.Element;

export { AuthCard, type AuthCardMode, type AuthCardProps, Button, type ButtonProps, Card, CardContent, CardDescription, CardHeader, type CardProps, CardTitle, EmptyState, type EmptyStateProps, type EmptyStateTone, Input, type InputProps, Label, type LabelProps, type PricingFeature, type PricingPlan, PricingTable, type PricingTableProps };
