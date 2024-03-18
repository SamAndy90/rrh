import Image, { ImageProps } from "next/image";
import { TbUser } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { Optional } from "utility-types";

export type AvatarProps = {
  imageSize?: number;
  className?: {
    wrapper?: string;
    inner?: string;
    emptyIconWrapper?: string;
    emptyIcon?: string;
  };
  component?: React.ElementType;
  emptyIcon?: React.ReactNode;
} & Optional<
  Omit<ImageProps, "width" | "height" | "fill" | "className">,
  "src" | "alt"
>;

export function Avatar(props: AvatarProps) {
  const {
    src,
    alt,
    imageSize = 42,
    className,
    component: Component = "div",
    emptyIcon = <TbUser className={"h-full w-full"} />,
    ...imageProps
  } = props;

  return (
    <Component
      className={twMerge(
        "relative z-0 h-12 w-12 rounded-full bg-white",
        className?.wrapper,
      )}
    >
      <div
        className={twMerge(
          "absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full",
          className?.inner,
        )}
      >
        {src && (
          <Image
            {...imageProps}
            src={src}
            alt={alt ?? ""}
            width={imageSize}
            height={imageSize}
            className={"absolute z-10 h-full w-full rounded-full object-cover"}
            onError={(e) => {
              const { target } = e;
              if (target instanceof HTMLImageElement) {
                target.classList.add("hidden");
              }
            }}
          />
        )}

        {emptyIcon && (
          <div
            className={twMerge(
              "bg-hub_green-800 absolute inset-[1px] z-0 rounded-full",
              className?.emptyIconWrapper,
            )}
          >
            <div
              className={twMerge(
                "absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 text-white",
                className?.emptyIcon,
              )}
            >
              {emptyIcon}
            </div>
          </div>
        )}
      </div>
    </Component>
  );
}

export type AvatarGroupProps = {
  children: React.ReactNode;
};

export function AvatarGroup(props: AvatarGroupProps) {
  const { children } = props;

  return <ul className={"flex flex-row -space-x-4"}>{children}</ul>;
}
