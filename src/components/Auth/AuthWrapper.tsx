import Image from "next/image";
import { PropsWithChildren } from "react";

import IMG from "./static/agency.jpg";

export default function AuthWrapper({ children }: PropsWithChildren) {
  return (
    <div className={"flex h-full items-center"}>
      <div className={"relative hidden h-full shrink-0 basis-1/2 md:block"}>
        <Image src={IMG} alt={"Image"} fill className={"-z-10 object-cover"} />
      </div>
      <div className={"w-full px-4 py-8 md:py-14"}>{children}</div>
    </div>
  );
}
