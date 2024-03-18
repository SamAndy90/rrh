import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type TitleProps = {
  children: React.ReactNode;
  component?: React.ElementType;
  className?: string;
  size?:
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl";
};

export function Title(props: TitleProps) {
  const {
    children,
    component: Component = "h2",
    className,
    size = "5xl",
  } = props;

  return (
    <Component
      className={twMerge(
        clsx(
          "font-semibold",
          {
            "text-base": size === "base",
            "text-lg": size === "lg",
            "text-xl": size === "xl",
            "text-2xl": size === "2xl",
            "text-2xl md:text-3xl": size === "3xl",
            "text-2xl sm:text-3xl md:text-4xl": size === "4xl",
            "text-3xl sm:text-4xl md:text-5xl": size === "5xl",
            "text-4xl md:text-5xl lg:text-6xl": size === "6xl",
            "text-5xl md:text-6xl lg:text-7xl": size === "7xl",
            "text-4xl sm:text-6xl md:text-7xl lg:text-8xl": size === "8xl",
          },
          className,
        ),
      )}
    >
      {children}
    </Component>
  );
}
