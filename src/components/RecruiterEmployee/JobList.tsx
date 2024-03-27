"use client";

import { Job } from "app/recruiter-employee/page";
import jsPDF from "jspdf";
import { useState } from "react";

import { Dialog } from "common/ui";

import { EmployeeDataForm } from "./EmployeeDataForm";
import { JobCard } from "./JobCard";

type JobListProps = {
  jobs: Job[];
};

export function JobList({ jobs }: JobListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateAndDownloadPdf = (job: Job) => {
    const doc = new jsPDF();

    // Document title and employee details
    doc.text("Employment Agreement", 20, 20);
    doc.text(`Employee Name: ${job.name ?? "N/A"}`, 20, 30);
    doc.text(`Position: ${job.position ?? "N/A"}`, 20, 40);

    // Check if the document has been signed
    if (job.signed) {
      const signedByName = job.signed_by_name ? job.signed_by_name : "";
      const signedBySurname = job.signed_by_surname
        ? job.signed_by_surname
        : "";
      const signedAt = job.signed_at
        ? new Date(job.signed_at).toLocaleString()
        : "";

      // Signed details
      doc.text(`Signed By: ${signedByName} ${signedBySurname}`, 20, 50);
      doc.text(`Signed At: ${signedAt}`, 20, 60);
    }

    // Save the PDF document
    doc.save(`employment-agreement-${job.id}.pdf`);
  };

  return (
    <>
      <div className={"grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2"}>
        {jobs.map((job) => {
          return (
            <JobCard
              downloadPDF={generateAndDownloadPdf}
              openModal={() => setIsModalOpen(true)}
              key={job.id}
              job={job}
            />
          );
        })}
      </div>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EmployeeDataForm onClose={() => setIsModalOpen(false)} />
      </Dialog>
    </>
  );
}
