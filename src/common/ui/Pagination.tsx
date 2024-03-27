"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { isNum } from "utils/js-types";

import { Button, ButtonBase } from "common/ui";

export type PaginationProps = {
  total: number;
  activePage: number;
};

export function Pagination(props: PaginationProps) {
  const { total, activePage } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startButtonDisabled = activePage === 1;
  const endButtonDisabled = activePage === total;

  function getPageUrl(page: string | number) {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", String(page));
    return `${pathname}?${newParams.toString()}`;
  }

  return (
    <div className={"overflow-auto text-center"}>
      <nav className={"inline-flex gap-x-3 md:gap-x-4"}>
        <Button
          component={startButtonDisabled ? "button" : Link}
          href={startButtonDisabled ? undefined : getPageUrl(activePage - 1)}
          disabled={startButtonDisabled}
          size={"small"}
          colorVariant={"secondary"}
          className={{
            button: "px-2",
          }}
        >
          <FiChevronLeft className={"h-5 w-5"} />
          <span className={"hidden md:block"}>Previous</span>
        </Button>

        <ul className={"flex gap-x-1"}>
          {getPaginationArray(total, activePage).map((page, idx) => {
            if (isNum(page)) {
              const disabled = page === activePage;

              return (
                <li key={page}>
                  <ButtonBase
                    component={disabled ? "button" : Link}
                    href={disabled ? undefined : getPageUrl(page)}
                    className={{
                      button: clsx(
                        "flex h-9 w-9 items-center justify-center rounded border text-sm transition-colors md:h-10 md:w-10",
                        {
                          "border-hub_green-100 bg-hub_green-50 font-medium text-hub_green-600":
                            page === activePage,
                          "border-gray-200 hover:border-hub_green-900":
                            page !== activePage,
                        },
                      ),
                    }}
                    disabled={disabled}
                  >
                    {page}
                  </ButtonBase>
                </li>
              );
            }

            return (
              <li
                key={`empty-${idx}`}
                className={
                  "w-6 self-end text-center text-lg tracking-widest text-gray-600"
                }
              >
                ...
              </li>
            );
          })}
        </ul>

        <Button
          component={endButtonDisabled ? "button" : Link}
          href={endButtonDisabled ? undefined : getPageUrl(activePage + 1)}
          disabled={endButtonDisabled}
          size={"small"}
          colorVariant={"secondary"}
          className={{
            button: "px-2",
          }}
        >
          <span className={"hidden md:block"}>Next</span>
          <FiChevronRight className={"h-5 w-5"} />
        </Button>
      </nav>
    </div>
  );
}

function getPaginationArray(totalPages: number, activePage: number) {
  const pages = [...Array(totalPages)].map((_, i) => i + 1);
  if (pages.length <= 6) return pages;

  if (activePage <= 3) {
    return [...pages.slice(0, 4), "...", totalPages];
  }

  if (activePage >= totalPages - 2) {
    return [1, "...", ...pages.slice(totalPages - 4, totalPages)];
  }

  return [
    1,
    "...",
    ...pages.slice(activePage - 2, activePage + 1),
    "...",
    totalPages,
  ];
}
