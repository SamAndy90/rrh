"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import TopBG from "common/TopBg";
import { Container, Pagination, Section, SelectInput, Title } from "common/ui";
import { JobList } from "components/RecruiterEmployee/JobList";

// import Filters from "components/Vacancies/Filters";

export type Job = {
  id: number;
  unique_id: number | null;
  jobid: number | null;
  name: string | null;
  surname: string | null;
  position: string;
  contribution: number;
  contact: string | null;
  created_at: string;
  isApplicantOnly: boolean;
  signed?: boolean;
  signed_by_name?: string | null;
  signed_by_surname?: string | null;
  signed_at?: string | null;
};

// type ExtendedJob = Job & {
//   isInBoth?: boolean;
//   isApplicantOnly?: boolean;
//   contribution?: number;
//   status?: string;
// };

const jobs = [
  {
    position: "position",
    isApplicantOnly: true,
    contribution: 20,
    contact: "contact",
    created_at: "created_at",
    id: 1,
    jobid: 11,
    name: "name",
    surname: "surname",
    unique_id: 123,
    signed: true,
    signed_by_name: "signed_by_name",
    signed_by_surname: "signed_by_surname",
    signed_at: "22.33.112121",
  },
  {
    position: "position 2",
    isApplicantOnly: false,
    contribution: 30,
    contact: "contact 2",
    created_at: "created_at 2",
    id: 2,
    jobid: 12,
    name: "name2",
    surname: "surname2",
    unique_id: 234,
    signed: false,
    signed_by_name: "signed_by_name 2",
    signed_by_surname: "signed_by_surname 2",
    signed_at: "22.33.2024",
  },
  {
    position: "position 3",
    isApplicantOnly: false,
    contribution: 40,
    contact: "contact 3",
    created_at: "created_at 3",
    id: 3,
    jobid: 33,
    name: "name 3",
    surname: "surname 3",
    unique_id: 333,
    signed: true,
    signed_by_name: "signed_by_name 3",
    signed_by_surname: "signed_by_surname 3",
    signed_at: "26.03.2024",
  },
];

export default function RecruiterEmployeePage() {
  const [filter, setFilter] = useState({ sort: "", order: "", count: "5" });
  const searchParams = useSearchParams();
  const pages = 5;

  function getPage() {
    const newParams = new URLSearchParams(searchParams.toString());
    return Number(newParams.get("page"));
  }
  const totalEarned = 300.5789;
  return (
    <>
      <TopBG />
      <Section size={"small"}>
        <Container>
          <div className={"flex flex-col gap-8 py-5"}>
            <Title
              size={"6xl"}
              className={
                "text-center font-garamond font-medium text-hub_green-800"
              }
            >
              Indeed Job List
            </Title>
            {/* <Filters /> */}
            <p className={"text-xl font-semibold text-blue-800"}>
              Total Earned: £{totalEarned.toFixed(2)}
            </p>

            <JobList jobs={jobs} />

            {/* Pagination and Items per page */}
            <div
              className={clsx(
                "flex flex-col-reverse items-center gap-y-8 md:flex-row md:items-end",
                {
                  "md:justify-end": pages <= 1,
                  "md:justify-between": pages > 1,
                },
              )}
            >
              {pages > 1 && <Pagination total={pages} activePage={getPage()} />}
              <SelectInput
                label={"Items per page:"}
                value={filter.count}
                onChange={(v) => setFilter({ ...filter, count: v })}
                options={[
                  { value: "5", label: "5" },
                  { value: "10", label: "10" },
                  { value: "25", label: "25" },
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
