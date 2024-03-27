// import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { IconButton, SelectInput } from "common/ui";

export default function Filters() {
  const [filter, setFilter] = useState({ sort: "", order: "" });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={
        "relative flex flex-col overflow-hidden rounded-2xl bg-hub_green-50 px-6 transition-all"
      }
    >
      <div
        className={
          "relative z-10 flex items-center justify-between gap-x-4 bg-hub_green-50 py-6"
        }
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={"text-2xl font-bold"}>Filter By</span>
        <IconButton colorVariant={"ghost"}>
          <FiChevronDown
            className={clsx("h-5 w-5 transition-transform", {
              "rotate-180": isOpen,
            })}
          />
        </IconButton>
      </div>
      {/* <Transition
        show={isOpen}
        enter={"transition ease-in-out duration-300 transform"}
        enterFrom={"-translate-y-full opacity-0"}
        enterTo={"translate-y-0 opacity-100"}
        leave={"transition ease-in-out duration-300 transform"}
        leaveFrom={"translate-y-0 opacity-100"}
        leaveTo={"-translate-y-full opacity-0"}
      > */}
      <div
        // className={clsx(
        //   "-mt-[229px] flex flex-col gap-4 border-t border-gray-400 py-6 transition-all duration-500 sm:-mt-[131px] sm:flex-row",
        //   { "!mt-0 mb-8": isOpen },
        // )}
        className={clsx(
          "flex max-h-0 flex-col gap-4 transition-all duration-300 sm:flex-row",
          { "mb-8 !max-h-[500px] border-t border-gray-400 py-6": isOpen },
        )}
      >
        <SelectInput
          label={"Sort by:"}
          value={filter.sort}
          onChange={(v) => setFilter({ ...filter, sort: v })}
          options={[
            { value: "created_at", label: "Date Created" },
            { value: "job_title", label: "Job Title" },
            { value: "company_name", label: "Company Name" },
            { value: "salary", label: "Salary" },
          ]}
        />
        <SelectInput
          label={"Order:"}
          value={filter.order}
          onChange={(v) => setFilter({ ...filter, order: v })}
          options={[
            { value: "ascending", label: "Ascending" },
            { value: "descending", label: "Descending" },
          ]}
        />
      </div>
      {/* </Transition> */}
    </div>
  );
}
