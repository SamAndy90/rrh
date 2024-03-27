import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { ButtonBase, ButtonBaseProps } from "common/ui";

export type IconButtonProps<T> = {
  size?: "small" | "normal" | "large";
  colorVariant?: "primary" | "secondary" | "ghost";
} & Omit<ButtonBaseProps<T>, "endIcon">;

export function IconButton<T>(props: IconButtonProps<T>) {
  const {
    size = "normal",
    colorVariant = "primary",
    className,
    loading = false,
    children,
    ...buttonBaseProps
  } = props;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: twMerge(
          clsx(
            "cursor-pointer justify-center rounded-full transition-colors ease-linear disabled:cursor-not-allowed",
            {
              "disabled:opacity-50": !loading,
            },
            {
              "opacity-90": loading,
            },
            {
              // Primary
              "text-white": colorVariant === "primary",
              "bg-hub_green-700 hover:bg-hub_green-500 active:bg-hub_green-600 disabled:bg-gray-400":
                colorVariant === "primary" && !loading,
            },
            // {
            //   // Secondary
            //   "border border-gray-300 text-gray-400":
            //     colorVariant === "secondary",
            //   "hover:border-none hover:bg-hub_green-300 hover:text-hub_green-900 active:bg-hub_green-300/50 disabled:hover:bg-gray-50":
            //     colorVariant === "secondary" && !loading,
            // },
            {
              // Ghost
              "border border-gray-300 text-gray-400": colorVariant === "ghost",
              "hover:border-hub_green-300 hover:bg-hub_green-300 hover:text-hub_green-900 active:bg-hub_green-300/50 disabled:hover:!border-gray-300 disabled:hover:bg-transparent disabled:hover:text-gray-400":
                colorVariant === "ghost" && !loading,
            },
            {
              "h-8 w-8": size === "small",
              "h-10 w-10": size === "normal",
              "h-12 w-12": size === "large",
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
