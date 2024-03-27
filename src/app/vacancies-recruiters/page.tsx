"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import TopBG from "common/TopBg";
import { Container, Pagination, Section, SelectInput, Title } from "common/ui";
import Filters from "components/Vacancies/Filters";
import VacanciesList from "components/Vacancies/VacanciesList";

import Logo1 from "./static/company_logo1.jpg";
import Logo2 from "./static/company_logo2.jpg";
import Logo3 from "./static/company_logo3.jpg";

export default function VacanciesRecruitersPage() {
  const [filter, setFilter] = useState({ sort: "", order: "", count: "5" });
  const searchParams = useSearchParams();
  const pages = 5;

  function getPage() {
    const newParams = new URLSearchParams(searchParams.toString());
    return Number(newParams.get("page"));
  }
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
            <Filters />
            <VacanciesList
              vacancies={[
                {
                  agency: 1,
                  company_logo: Logo1,
                  duration: "Fulltime",
                  experience: "No-Experience",
                  payment_period: "Monthly",
                  company_name: "Company 1",
                  created_at: "created_at",
                  description: "description",
                  id: 1,
                  location: "location",
                  salary: "500",
                  title: "Title 1",
                  unique_id: 111,
                },
                {
                  agency: 2,
                  company_logo: Logo2,
                  experience: "Middle",
                  payment_period: "Weekly",
                  duration: "Part time",
                  company_name: "Company 2",
                  created_at: "created_at 2",
                  description: "description 2",
                  id: 2,
                  location: "location 2",
                  salary: "900",
                  title: "Title 2",
                  unique_id: 222,
                },
                {
                  agency: 3,
                  company_logo: Logo3,
                  experience: "Expert",
                  payment_period: "Weekly",
                  duration: "Fixed price",
                  company_name: "Company 3",
                  created_at: "created_at 3",
                  description: "description 3",
                  id: 3,
                  location: "location 3",
                  salary: "900",
                  title: "Title 3",
                  unique_id: 333,
                },
              ]}
            />
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
