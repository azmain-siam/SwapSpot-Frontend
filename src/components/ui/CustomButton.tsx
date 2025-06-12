"use client";

import type React from "react";
import { cn } from "@/lib/utils";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",

        // Variant styles
        {
          // Primary variant (solid blue background)
          "bg-primary text-white border-2 border-primary hover:bg-blue-700 active:bg-blue-800":
            variant === "primary",

          // Outline variant (transparent background with blue border)
          "bg-transparent text-primary border-2 border-primary hover:bg-blue-50 active:bg-blue-100":
            variant === "outline",
        },

        // Size styles
        {
          "px-4 py-2 text-base": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
