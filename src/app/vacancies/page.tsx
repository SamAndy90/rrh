"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import TopBG from "common/TopBg";
import { Container, Pagination, Section, SelectInput } from "common/ui";

export default function VacanciesPage() {
  const [filter, setFilter] = useState({ sort: "", order: "", count: "10" });
  const searchParams = useSearchParams();
  const pages = 12;

  function getPage() {
    const newParams = new URLSearchParams(searchParams.toString());
    return Number(newParams.get("page"));
  }
  return (
    <>
      <TopBG />
      <Section>
        <Container>
          <div className={"py-5"}>
            <div className={"mb-8 flex gap-10"}>
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
              <SelectInput
                label={"Items per page:"}
                value={filter.count}
                onChange={(v) => setFilter({ ...filter, count: v })}
                options={[
                  { value: "10", label: "10" },
                  { value: "20", label: "20" },
                  { value: "30", label: "30" },
                  { value: "50", label: "50" },
                ]}
              />
            </div>
            {pages > 1 && <Pagination total={pages} activePage={getPage()} />}
          </div>
        </Container>
      </Section>
    </>
  );
}
