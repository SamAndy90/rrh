import clsx from "clsx";
import Image from "next/image";

import LineDecor from "./static/shape_line.svg";
import SquareDecor from "./static/shape_square.svg";

type TopBGProps = {
  size?: "normal" | "small";
};

export default function TopBG({ size = "normal" }: TopBGProps) {
  return (
    <div
      className={clsx("relative  bg-hub_green-800", {
        "h-32 md:h-36 lg:h-40": size === "normal",
        "h-28 lg:h-32": size === "small",
      })}
    >
      <Image
        src={LineDecor}
        alt={"Decor"}
        className={"absolute left-[60%] top-3"}
      />
      <Image
        src={SquareDecor}
        alt={"Decor"}
        className={"absolute bottom-0 left-0"}
      />
    </div>
  );
}
