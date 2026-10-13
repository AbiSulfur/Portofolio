import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "dark" | "dark-secondary";
  size?: "default" | "sm" | "icon";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      href,
      external = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "group relative inline-flex items-center justify-center font-display font-medium rounded-full cursor-pointer select-none",
      "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
      size === "default" && "h-14 px-8 text-base",
      size === "sm" && "h-11 px-5 text-sm",
      size === "icon" && "h-12 w-12 p-0",
      variant === "primary" &&
        "bg-ink text-bg hover:bg-accent hover:text-ink active:scale-[0.98]",
      variant === "secondary" &&
        "bg-transparent text-ink border border-line hover:border-ink hover:bg-black/5 active:scale-[0.98]",
      variant === "accent" &&
        "bg-accent text-ink hover:bg-ink hover:text-bg active:scale-[0.98]",
      variant === "dark" &&
        "bg-text-on-dark text-ink hover:bg-accent hover:text-ink active:scale-[0.98]",
      variant === "dark-secondary" &&
        "bg-transparent text-text-on-dark border border-line-dark hover:border-accent hover:text-accent active:scale-[0.98]",
      className
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={baseStyles}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseStyles}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
