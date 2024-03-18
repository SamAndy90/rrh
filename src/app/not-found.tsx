import Link from "next/link";
import { MainUrl } from "route-urls";

import TopBG from "common/TopBg";
import { LinkButton, Section, Title } from "common/ui";

export default function NotFound() {
  return (
    <Section className={"flex h-full flex-col"}>
      <TopBG size={"small"} />
      <div
        className={
          "mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-y-4 py-12 text-center sm:gap-y-6 sm:py-16"
        }
      >
        <p className={"text-4xl font-medium text-red-500 sm:text-6xl"}>404</p>

        <div className={"flex flex-col gap-y-2"}>
          <Title
            component={"h1"}
            size={"3xl"}
            className={"font-normal text-hub_green-700"}
          >
            🔍 Page not found
          </Title>
          <p>
            Check the correct spelling of the page address
            <br />
            or go to the{" "}
            <Link href={MainUrl.getHome()}>
              <LinkButton>main page</LinkButton>
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
