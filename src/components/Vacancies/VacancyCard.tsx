"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { Vacancy } from "types/vacancy";

import { Button, IconButton, Title } from "common/ui";

import NoIMG from "./static/no_image.jpg";

type VacancyCardProps = {
  vacancy: Vacancy;
};

export default function VacancyCard({ vacancy }: VacancyCardProps) {
  const [checked, setChecked] = useState(false);
  const {
    id,
    title,
    company_logo,
    experience,
    payment_period,
    duration,
    location,
    salary,
  } = vacancy;
  return (
    <div
      className={
        "flex flex-col gap-x-2 gap-y-4 rounded-xl border border-gray-200 px-6 py-4 transition hover:border-hub_green-600 hover:shadow sm:flex-row sm:items-center sm:py-8"
      }
    >
      <div
        className={
          "flex w-full flex-1 basis-5/12 flex-row-reverse justify-between gap-x-8 sm:flex-row sm:items-center sm:justify-stretch"
        }
      >
        <div className={"relative h-14 w-14 overflow-hidden rounded-lg p-1"}>
          <Image
            src={company_logo || NoIMG}
            alt={"Company logo"}
            fill
            className={"object-cover"}
          />
        </div>
        <div className={"flex flex-col items-start gap-1"}>
          <Link
            className={
              "font-medium text-hub_green-500 transition-colors hover:text-hub_green-600"
            }
            href={`vacancies/${id}`}
          >
            {duration}
          </Link>
          <Link className={"group"} href={`vacancies/${id}`}>
            <Title
              className={"transition-colors group-hover:text-hub_green-600"}
              component={"h5"}
              size={"xl"}
            >
              {title}
            </Title>
          </Link>
        </div>
      </div>

      <div
        className={
          "flex flex-1 basis-5/12 flex-col items-start gap-1 font-light"
        }
      >
        <p className={"text-hub_green-900/70"}>{location}</p>
        <p>
          <span className={"font-semibold"}>${salary}</span>
          <span className={"text-hub_green-900/40"}>
            {" / "}
            {payment_period}
            {" | "}
            {experience}
          </span>
        </p>
      </div>
      <div className={"flex items-center justify-end gap-4"}>
        <IconButton
          size={"small"}
          colorVariant={checked ? "primary" : "ghost"}
          className={{ loadingIcon: "text-hub_green-700" }}
          onClick={() => setChecked((prev) => !prev)}
        >
          {checked ? (
            <CiBookmarkCheck className={"h-5 w-5"} />
          ) : (
            <CiBookmark className={"h-5 w-5"} />
          )}
        </IconButton>
        <Link href={`vacancies/${id}`}>
          <Button colorVariant={"secondary"} size={"small"}>
            APPLY
          </Button>
        </Link>
      </div>
    </div>
  );
}
