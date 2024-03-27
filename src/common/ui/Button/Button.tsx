import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { ButtonBase, ButtonBaseProps } from "common/ui";

export type ButtonProps<T> = {
  size?: "small" | "normal" | "large";
  colorVariant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "ghost"
    | "success"
    | "upload"
    | "danger";
  fullWidth?: boolean;
  square?: boolean;
} & ButtonBaseProps<T>;

export function Button<T>(props: ButtonProps<T>) {
  const {
    size = "normal",
    colorVariant = "primary",
    fullWidth = false,
    square = false,
    children,
    className,
    loading = false,
    ...buttonBaseProps
  } = props;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: twMerge(
          clsx(
            "cursor-pointer justify-center rounded-full text-center font-medium text-white transition-colors duration-200 ease-linear disabled:cursor-not-allowed",
            {
              "disabled:opacity-50": !loading,
            },
            {
              "opacity-90": loading,
            },
            {
              // Primary
              "bg-hub_green-500": colorVariant === "primary",
              "hover:bg-hub_green-800 active:bg-hub_green-700 disabled:bg-hub_green-500/30":
                colorVariant === "primary" && !loading,
            },
            {
              // Outlined
              "border border-white bg-transparent": colorVariant === "outlined",
              "disabled:hove:bg-hub_green-800 hover:border-hub_green-500 hover:bg-hub_green-500 active:border-hub_green-700 active:bg-hub_green-700 disabled:hover:border-white disabled:hover:bg-transparent":
                colorVariant === "outlined" && !loading,
            },
            {
              // Secondary
              "bg-hub_green-700": colorVariant === "secondary",
              "hover:bg-hub_green-500 active:bg-hub_green-600 disabled:hover:bg-hub_green-700":
                colorVariant === "secondary" && !loading,
            },
            {
              // Ghost
              "text-blue-900": colorVariant === "ghost",
              "hover:bg-gray-50 active:bg-gray-100 disabled:hover:bg-transparent":
                colorVariant === "ghost" && !loading,
            },
            {
              // Success
              "bg-status-success text-white": colorVariant === "success",
              "disabled:hover:bg-status-success hover:bg-gray-800 active:bg-gray-900":
                colorVariant === "success" && !loading,
            },
            {
              // Upload
              "bg-blue-500": colorVariant === "upload",
              "hover:bg-blue-700 active:bg-blue-600 disabled:hover:bg-blue-500":
                colorVariant === "upload" && !loading,
            },
            {
              // Danger
              "bg-red-500 text-red-50": colorVariant === "danger",
              "hover:bg-red-400 active:bg-red-600 disabled:hover:bg-red-500":
                colorVariant === "danger" && !loading,
            },
            {
              "w-full": fullWidth,
              "rounded-md": square,
              "px-4 py-2 text-xs uppercase tracking-wider md:px-5 md:py-2.5":
                size === "small",
              "px-6 py-2.5 md:px-8 md:py-3": size === "normal",
              "px-12 py-3 text-xl md:px-16 md:py-4": size === "large",
            },
            className?.button,
          ),
        ),
        loadingIcon: className?.loadingIcon,
      }}
      {...buttonBaseProps}
    >
      {children}
    </ButtonBase>
  );
}
