"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Vacancy } from "types/vacancy";

import TopBG from "common/TopBg";
import { Button, Container, Dialog, Section, Title } from "common/ui";
import { EditVacancyForm } from "components/Vacancies/EditVacancyForm";

import Logo1 from "../static/company_logo1.jpg";
import Logo2 from "../static/company_logo2.jpg";
import Logo3 from "../static/company_logo3.jpg";

const vacancies: Vacancy[] = [
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
];

export default function VacancyPage({ params }: { params: { id: string } }) {
  const [open, setOpen] = useState(false);
  const vacancy = vacancies.find((v) => v.id === Number(params.id));
  const {
    created_at,
    title,
    description,
    company_name,
    company_logo,
    salary,
    experience,
    payment_period,
    location,
    duration,
  } = vacancy!;

  return (
    <>
      <TopBG size={"small"} />
      <Section size={"default"}>
        <Container>
          <div className={"flex flex-col gap-y-8 lg:flex-row lg:gap-x-8"}>
            <div className={"flex w-full flex-col gap-y-8 md:basis-2/3"}>
              <div>
                <p className={"mb-4 text-hub_green-900/70"}>
                  Created at: {created_at} by{" "}
                  <span className={"font-medium text-hub_green-900"}>
                    {company_name}
                  </span>
                </p>
                <Title size={"3xl"}>{title}</Title>
                <div className={"mt-4 flex gap-2"}>
                  <Link
                    className={
                      "group inline-flex items-center gap-2 rounded-md bg-hub_green-50 px-3 py-2 transition-colors hover:bg-hub_green-700 hover:text-white"
                    }
                    href={"#"}
                  >
                    <FaFacebook className={"h-4 w-4"} /> Facebook
                  </Link>
                  <Link
                    className={
                      "group inline-flex items-center gap-2 rounded-md bg-hub_green-50 px-3 py-2 transition-colors hover:bg-hub_green-700 hover:text-white"
                    }
                    href={"#"}
                  >
                    <FaTwitter className={"h-4 w-4"} /> Twitter
                  </Link>
                </div>
              </div>
              <div
                className={
                  "flex flex-col gap-3 rounded-3xl border border-hub_green-900 px-4 py-6 sm:px-8"
                }
              >
                <div className={"flex items-center gap-2"}>
                  <span
                    className={
                      "flex h-7 w-7 items-center justify-center rounded-full bg-hub_green-700 text-white"
                    }
                  >
                    1
                  </span>{" "}
                  <Title size={"2xl"} component={"h5"}>
                    Overview
                  </Title>
                </div>
                <p className={"text-lg text-hub_green-900/90"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate nostrum tempora aspernatur, voluptates earum esse
                  consequuntur explicabo dicta libero, hic error fugit vel
                  molestias placeat quae facere sequi rerum.
                </p>
              </div>
              <div
                className={
                  "flex flex-col gap-3 rounded-3xl border border-hub_green-900 px-4 py-6 sm:px-8"
                }
              >
                <div className={"flex items-center gap-2"}>
                  <span
                    className={
                      "flex h-7 w-7 items-center justify-center rounded-full bg-hub_green-700 text-white"
                    }
                  >
                    2
                  </span>{" "}
                  <Title size={"2xl"} component={"h5"}>
                    Job Description
                  </Title>
                </div>
                <p className={"text-lg text-hub_green-900/90"}>{description}</p>
              </div>
              <div
                className={
                  "flex flex-col gap-3 rounded-3xl border border-hub_green-900 px-4 py-6 sm:px-8"
                }
              >
                <div className={"flex items-center gap-2"}>
                  <span
                    className={
                      "flex h-7 w-7 items-center justify-center rounded-full bg-hub_green-700 text-white"
                    }
                  >
                    3
                  </span>{" "}
                  <Title size={"2xl"} component={"h5"}>
                    Responsibilities
                  </Title>
                </div>
                <p className={"text-lg text-hub_green-900/90"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate nostrum tempora aspernatur, voluptates earum esse
                  consequuntur explicabo dicta libero, hic error fugit vel
                  molestias placeat quae facere sequi rerum.
                </p>
              </div>
              <div
                className={
                  "flex flex-col gap-3 rounded-3xl border border-hub_green-900 px-4 py-6 sm:px-8"
                }
              >
                <div className={"flex items-center gap-2"}>
                  <span
                    className={
                      "flex h-7 w-7 items-center justify-center rounded-full bg-hub_green-700 text-white"
                    }
                  >
                    4
                  </span>{" "}
                  <Title size={"2xl"} component={"h5"}>
                    Required Skills:
                  </Title>
                </div>
                <p className={"text-lg text-hub_green-900/90"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate nostrum tempora aspernatur, voluptates earum esse
                  consequuntur explicabo dicta libero, hic error fugit vel
                  molestias placeat quae facere sequi rerum.
                </p>
              </div>
              <div
                className={
                  "flex flex-col gap-3 rounded-3xl border border-hub_green-900 px-4 py-6 sm:px-8"
                }
              >
                <div className={"flex items-center gap-2"}>
                  <span
                    className={
                      "flex h-7 w-7 items-center justify-center rounded-full bg-hub_green-700 text-white"
                    }
                  >
                    5
                  </span>{" "}
                  <Title size={"2xl"} component={"h5"}>
                    Benefits:
                  </Title>
                </div>
                <p className={"text-lg text-hub_green-900/90"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate nostrum tempora aspernatur, voluptates earum esse
                  consequuntur explicabo dicta libero, hic error fugit vel
                  molestias placeat quae facere sequi rerum.
                </p>
              </div>
              <Button onClick={() => setOpen(true)}>Edit Vacancy</Button>
            </div>
            <aside
              className={
                "flex w-full shrink-0 flex-col gap-y-8 self-start rounded-3xl bg-hub_green-50 px-4 py-6 md:basis-1/3"
              }
            >
              <div className={"flex flex-col items-center gap-y-4"}>
                <div className={"relative h-14 w-14 rounded-2xl"}>
                  <Image
                    src={company_logo!}
                    alt={"Logo"}
                    fill
                    className={"object-cover"}
                  />
                </div>
                <Title size={"2xl"} className={"font-normal"} component={"h4"}>
                  {company_name}
                </Title>
                <Link href={"#"} target={"_blank"}>
                  <Button colorVariant={"secondary"}>Visit website</Button>
                </Link>
              </div>
              <div className={"h-[1px] bg-gray-400"}></div>
              <div
                className={
                  "grid grid-flow-row-dense grid-cols-2 grid-rows-3 gap-x-2 gap-y-5"
                }
              >
                <div className={"text-lg"}>
                  <div className={"mb-2 text-hub_green-900/70"}>Salary</div>
                  <div className={"font-medium"}>
                    {salary}/{payment_period}
                  </div>
                </div>
                <div className={"text-lg"}>
                  <div className={"mb-2 text-hub_green-900/70"}>Expertise</div>
                  <div className={"font-medium"}>{experience}</div>
                </div>
                <div className={"text-lg"}>
                  <div className={"mb-2 text-hub_green-900/70"}>Location</div>
                  <div className={"font-medium"}>{location}</div>
                </div>
                <div className={"text-lg"}>
                  <div className={"mb-2 text-hub_green-900/70"}>Job Type</div>
                  <div className={"font-medium"}>{duration}</div>
                </div>
                <div className={"text-lg"}>
                  <div className={"mb-2 text-hub_green-900/70"}>Date</div>
                  <div className={"font-medium"}>{created_at}</div>
                </div>
                <div className={"text-lg"}>
                  <div className={"mb-2 text-hub_green-900/70"}>Experience</div>
                  <div className={"font-medium"}>{experience}</div>
                </div>
              </div>
              <div className={"flex items-center gap-x-2"}>
                <Link
                  href={"#"}
                  className={
                    "inline-block rounded-full border border-hub_green-900/70 px-3 py-1 text-sm font-medium text-hub_green-900/70 transition-colors hover:border-hub_green-700 hover:bg-hub_green-700 hover:text-white"
                  }
                >
                  java
                </Link>
                <Link
                  href={"#"}
                  className={
                    "inline-block rounded-full border border-hub_green-900/70 px-3 py-1 text-sm font-medium text-hub_green-900/70 transition-colors hover:border-hub_green-700 hover:bg-hub_green-700 hover:text-white"
                  }
                >
                  developer
                </Link>
              </div>
              <Button colorVariant={"secondary"}>Add to work-list</Button>
            </aside>
          </div>
        </Container>
      </Section>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <EditVacancyForm close={() => setOpen(false)} vacancy={vacancy!} />
      </Dialog>
    </>
  );
}
