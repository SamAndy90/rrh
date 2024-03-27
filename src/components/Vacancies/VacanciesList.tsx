import { Vacancy } from "types/vacancy";

import VacancyCard from "./VacancyCard";

type VacanciesListProps = {
  vacancies: Vacancy[];
};

export default function VacanciesList({ vacancies }: VacanciesListProps) {
  return (
    <div>
      <div className={"mb-4 text-hub_green-900/50"}>
        All{" "}
        <span className={"font-medium text-hub_green-900"}>
          {vacancies.length}
        </span>{" "}
        jobs found
      </div>
      <div className={"flex flex-col gap-4"}>
        {vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
}
