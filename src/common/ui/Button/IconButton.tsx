import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { ButtonBase, ButtonBaseProps } from "common/ui";

export type IconButtonProps<T> = {
  size?: "small" | "normal" | "large";
  colorVariant?: "secondary" | "ghost";
} & Omit<ButtonBaseProps<T>, "endIcon">;

export function IconButton<T>(props: IconButtonProps<T>) {
  const {
    size = "normal",
    colorVariant = "secondary",
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
              // Secondary
              "text-mediumBlue-900 bg-gray-50": colorVariant === "secondary",
              "hover:bg-gray-100 active:bg-gray-200 disabled:hover:bg-gray-50":
                colorVariant === "secondary" && !loading,
            },
            {
              // Ghost
              "text-mediumBlue-900": colorVariant === "ghost",
              "hover:bg-gray-50 active:bg-gray-100 disabled:hover:bg-transparent":
                colorVariant === "ghost" && !loading,
            },
            {
              "h-8 w-8 p-1": size === "small",
              "h-10 w-10 p-1": size === "normal",
              "h-12 w-12 p-1": size === "large",
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
