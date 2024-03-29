import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { ButtonBase, ButtonBaseProps } from "common/ui";

export type LinkButtonProps<T> = {
  size?: "small" | "normal" | "large";
  colorVariant?: "primary" | "secondary" | "outlined";
} & ButtonBaseProps<T>;

export function LinkButton<T>(props: LinkButtonProps<T>) {
  const {
    size = "normal",
    colorVariant = "primary",
    children,
    className = {},
    loading = false,
    ...baseButtonProps
  } = props;

  const { button: buttonClassName, loadingIcon: loadingIconClassName } =
    className;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: twMerge(
          clsx(
            "inline-flex items-center justify-center transition ease-linear",
            {
              // Primary
              "underline-offset-2 hover:underline": !loading,
              "text-hub_green-100": colorVariant === "primary" && loading,
              "text-hub_green-600 hover:text-hub_green-700":
                colorVariant === "primary" && !loading,
              // Secondary
              "opacity-40": colorVariant === "secondary" && loading,
              "opacity-70 hover:opacity-100":
                colorVariant === "secondary" && !loading,
              // Outlined
              "border-hub_green-900/40 text-hub_green-900/40":
                colorVariant === "outlined" && loading,
              "border-hub_green-900/70 text-hub_green-900/70 hover:border-hub_green-700 hover:bg-hub_green-700 hover:text-white":
                colorVariant === "outlined" && !loading,
            },
            // Size
            {
              "text-sm": size === "small",
              "text-lg": size === "large",
            },
            buttonClassName,
          ),
        ),
        loadingIcon: loadingIconClassName,
      }}
      {...baseButtonProps}
    >
      {children}
    </ButtonBase>
  );
}

LinkButton.displayName = "LinkButton";
