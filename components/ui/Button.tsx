import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "small" | "ghost" | "danger";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", isLoading, children, disabled, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-heading uppercase tracking-[0.22em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";

    const variants: Record<string, string> = {
      primary: "btn-primary",
      outline: "btn-outline",
      small: "btn-small",
      ghost: "btn-ghost",
      danger:
        "inline-flex items-center justify-center rounded-full border border-red-600 bg-red-600 px-6 py-3 text-xs text-white hover:bg-red-700",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="-ml-1 mr-2 h-4 w-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

