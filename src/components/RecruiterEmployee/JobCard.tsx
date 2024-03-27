import { Job } from "app/recruiter-employee/page";

import { Button, Title } from "common/ui";

type JobCardProps = {
  job: Job;
  downloadPDF: (job: Job) => void;
  openModal: () => void;
};

export function JobCard({ job, downloadPDF, openModal }: JobCardProps) {
  const {
    name,
    surname,
    unique_id,
    contact,
    isApplicantOnly,
    signed,
    contribution,
  } = job;

  return (
    <div
      className={
        "flex flex-col gap-y-1 rounded-xl border border-gray-300 px-5 py-3 transition-colors hover:border-hub_green-600 hover:shadow"
      }
    >
      <Title className={"text-hub_green-700"} component={"h5"} size={"xl"}>
        {name}
      </Title>
      <p className={"text-hub_green-900/70"}>
        Company:{" "}
        <span className={"font-medium text-hub_green-900"}>
          {surname || "N/A"}
        </span>
      </p>
      <p className={"text-hub_green-900/70"}>
        Unique ID:{" "}
        <span className={"font-medium text-hub_green-900"}>{unique_id}</span>
      </p>
      <p className={"text-hub_green-900/70"}>
        Location:{" "}
        <span className={"font-medium text-hub_green-900"}>
          {contact || "N/A"}
        </span>
      </p>
      <div className={"flex items-center gap-4 py-2"}>
        {isApplicantOnly ? (
          <p
            className={"rounded bg-orange-50 px-4 py-1 text-sm text-orange-500"}
          >
            Waiting for Approval...
          </p>
        ) : (
          <>
            {signed && (
              <>
                <Button
                  size={"small"}
                  square
                  colorVariant={"upload"}
                  onClick={() => downloadPDF(job)}
                >
                  Download Agreement
                </Button>
                <p
                  className={
                    "rounded bg-hub_green-50 px-4 py-1 text-center text-sm text-hub_green-500"
                  }
                >
                  Document Signed
                </p>
              </>
            )}
            {!signed && (
              <Button square size={"small"} onClick={openModal}>
                Sign Document
              </Button>
            )}
          </>
        )}
      </div>
      <p className={"mt-2 text-hub_green-500"}>
        Contribution:{" "}
        <span className={"font-medium text-hub_green-700"}>
          £{contribution?.toFixed(2)}
        </span>
      </p>
    </div>
  );
}
