import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaDribbble, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MainUrl } from "route-urls";
import { twMerge } from "tailwind-merge";

import { Container, Title } from "common/ui";
import { UserType, links } from "components/Header";

import Logo from "./static/logo.svg";
import SquareDecor from "./static/shape_square.svg";

export function Footer() {
  const pathname = usePathname();
  const [userType] = useState<UserType>(null);

  return (
    <footer className={"bg-hub_green-800 text-white"}>
      <Container>
        <div className={"py-6 pt-12"}>
          <div className={"flex flex-col justify-between gap-y-9 md:flex-row"}>
            <Link href={MainUrl.getHome()} className={"relative self-start"}>
              <Image width={230} src={Logo} alt={"Logo"} />
              <Image
                src={SquareDecor}
                alt={"Decor"}
                className={
                  "absolute -bottom-24 left-2 select-none md:-bottom-28"
                }
              />
            </Link>
            {/* <div className={"md:max-w-72"}>
              <div className={"flex flex-col gap-y-2"}>
                <Title size={"lg"} component={"h5"} className={"mb-2"}>
                  Registered Address
                </Title>
                <p className={"text-sm text-white/90"}>
                  6 Perth House, Corby Gate Business Park, Priors Haw Road,
                  Corby, NN17 5JG
                </p>
                <p className={"text-sm text-white/90"}>
                  The Recruitment Resource Hub Ltd is a company registered in
                  England and Wales.
                </p>
                <p className={"text-sm text-white/90"}>
                  Company Number: 13361631.
                </p>
              </div>
            </div> */}
            <nav>
              <Title
                size={"lg"}
                component={"h5"}
                className={"mb-2 text-center md:text-left"}
              >
                Information
              </Title>
              <ul className={"flex flex-col items-center md:items-stretch"}>
                {links(userType).map((link) => {
                  return (
                    <li key={link.title}>
                      <Link
                        href={link.url}
                        className={twMerge(
                          clsx(
                            "block py-2 text-white/70 transition-colors duration-200",
                            {
                              "text-hub_green-500": link.url === pathname,
                              "underline-offset-2 hover:text-white hover:underline active:text-hub_green-600":
                                link.url !== pathname,
                            },
                          ),
                        )}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href={MainUrl.getPrivacyPolicy()}
                    className={twMerge(
                      clsx(
                        "block py-2 text-white/70 transition-colors duration-200",
                        {
                          "text-hub_green-500":
                            MainUrl.getPrivacyPolicy() === pathname,
                          "underline-offset-2 hover:text-white hover:underline active:text-hub_green-600":
                            MainUrl.getPrivacyPolicy() !== pathname,
                        },
                      ),
                    )}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className={
                "flex flex-col items-center gap-2 text-center md:items-stretch md:text-left"
              }
            >
              <Title size={"lg"} component={"h5"} className={"mb-2"}>
                Get In Touch
              </Title>
              <div className={"mb-6 flex-1 md:mb-0"}>
                <Link
                  className={
                    "mb-1 block text-white/70 underline-offset-2 transition-colors duration-200 hover:text-white hover:underline"
                  }
                  href={"mailto:admin@recruitmentresourcehub.co.uk"}
                >
                  admin@recruitmentresourcehub.co.uk
                </Link>
                <Link
                  className={
                    "block text-white/70 underline-offset-2 transition-colors duration-200 hover:text-white hover:underline"
                  }
                  href={"tel:01536850332"}
                >
                  01536 850 332
                </Link>
              </div>
              <div className={"flex gap-5"}>
                <Link
                  href={"#"}
                  className={
                    "block transition-all duration-300 hover:-translate-y-1 hover:text-hub_green-500 active:text-hub_green-600"
                  }
                  target={"_blank"}
                >
                  <FaWhatsapp className={"h-6 w-6"} />
                </Link>
                <Link
                  href={"#"}
                  className={
                    "block transition-all duration-300 hover:-translate-y-1 hover:text-hub_green-500 active:text-hub_green-600"
                  }
                  target={"_blank"}
                >
                  <FaDribbble className={"h-6 w-6"} />
                </Link>
                <Link
                  href={"#"}
                  className={
                    "block transition-all duration-300 hover:-translate-y-1 hover:text-hub_green-500 active:text-hub_green-600"
                  }
                  target={"_blank"}
                >
                  <FaGoogle className={"h-6 w-6"} />
                </Link>
                <Link
                  href={"#"}
                  className={
                    "block transition-all duration-300 hover:-translate-y-1 hover:text-hub_green-500 active:text-hub_green-600"
                  }
                  target={"_blank"}
                >
                  <FaInstagram className={"h-6 w-6"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={"py-8 text-center text-sm text-white/70"}>
          © 2023 - The Recruitment Resource Hub
        </div>
      </Container>
    </footer>
  );
}
