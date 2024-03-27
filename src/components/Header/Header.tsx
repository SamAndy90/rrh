import { Menu, Transition } from "@headlessui/react";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TbX } from "react-icons/tb";
import { MainUrl, ProtectedUrl, UserUrl } from "route-urls";
import { twMerge } from "tailwind-merge";

import { Button, ButtonBase, Container } from "common/ui";
import { Avatar } from "common/ui/Avatar";
import { useAuthContext } from "contexts/AuthContext";

import useSticky from "hooks/use-sticky";

import Logo from "./static/logomark.svg";

export type UserType = "user" | "admin" | "agency" | "recruiter" | null;

export function Header() {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [userType] = useState<UserType>(null);
  const { isAuth, setIsAuth } = useAuthContext();
  const { sticky } = useSticky();

  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = menuIsOpen ? "hidden" : "";
  }, [menuIsOpen]);

  return (
    <header
      className={twMerge(
        clsx(
          "absolute left-0 top-0 z-[110] w-full bg-transparent py-7 transition-all duration-500",
          {
            "fixed bg-hub_green-900 py-2.5": sticky,
          },
        ),
      )}
    >
      <Container className={"max-w-[1360px]"}>
        <div className={"flex items-center justify-between gap-x-4"}>
          <Link href={MainUrl.getHome()}>
            <Image src={Logo} alt={"Logo"} className={"w-10 md:w-[50px]"} />
          </Link>
          <nav className={"hidden flex-1 md:block"}>
            <ul
              className={
                "flex gap-x-8 font-medium text-white md:flex-row md:items-center md:justify-center"
              }
            >
              {links(userType).map((link) => {
                return (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className={clsx(
                        "transition-colors duration-200 hover:text-hub_green-500 active:text-hub_green-600",
                        { "text-hub_green-500": link.url === pathname },
                      )}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {!isAuth && (
            // TODO Link to button
            <Button
              colorVariant={"outlined"}
              className={{
                button: "hidden md:block",
              }}
              onClick={() => router.push("/sign-in")}
            >
              Login/Sign Up
            </Button>
          )}
          {isAuth && (
            <Menu as={"div"} className={"relative hidden leading-[0] md:block"}>
              <Menu.Button>
                <Avatar />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter={"transition duration-100 ease-out"}
                enterFrom={"transform scale-95 opacity-0"}
                enterTo={"transform scale-100 opacity-100"}
                leave={"transition duration-75 ease-out"}
                leaveFrom={"transform scale-100 opacity-100"}
                leaveTo={"transform scale-95 opacity-0"}
              >
                <Menu.Items
                  as={"ul"}
                  className={
                    "absolute right-0 z-10 mt-1 min-w-[180px] origin-top-right overflow-hidden rounded-lg bg-white py-1.5 leading-tight text-hub_green-900 shadow-lg ring-1 ring-black/5 focus:outline-none"
                  }
                >
                  <Menu.Item as={"li"}>
                    {({ active }) => (
                      <Link
                        href={UserUrl.getAccount()}
                        className={clsx("block p-3", {
                          "bg-hub_green-500/10": active,
                        })}
                      >
                        Account
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item as={"li"}>
                    {({ active }) => (
                      <Link
                        href={UserUrl.getSettings()}
                        className={clsx("block p-3", {
                          "bg-hub_green-500/10": active,
                        })}
                      >
                        Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item as={"li"} className={"mt-1.5 px-1.5 text-center"}>
                    <Button square fullWidth onClick={() => setIsAuth(false)}>
                      Logout
                    </Button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
          <div
            className={clsx(
              "fixed bottom-0 right-0 top-0 z-40 flex min-w-[240px] flex-col items-stretch gap-y-4 bg-hub_green-900 p-3 pt-12 text-white shadow-xl transition-transform",
              {
                "translate-x-full": !menuIsOpen,
              },
            )}
          >
            <ButtonBase
              className={{
                button:
                  "absolute right-3 top-3 appearance-none text-white transition-colors hover:text-hub_green-500 active:text-hub_green-600 md:hidden",
              }}
              onClick={() => setMenuIsOpen(false)}
            >
              <TbX className={"h-7 w-7"} />
            </ButtonBase>

            <nav>
              <ul
                className={"flex flex-col text-center font-medium text-white"}
              >
                {links(userType).map((link) => {
                  return (
                    <li key={link.title}>
                      <Link
                        href={link.url}
                        className={clsx(
                          "block py-2.5 text-lg transition-colors duration-200 hover:text-hub_green-500 active:text-hub_green-600",
                          { "text-hub_green-500": link.url === pathname },
                        )}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className={"h-[1px] bg-white/10"}></div>
            {isAuth && (
              <>
                <nav
                  className={"flex flex-col text-center font-medium text-white"}
                >
                  <Link
                    href={UserUrl.getAccount()}
                    className={clsx(
                      "block py-2.5 text-lg transition-colors duration-200 hover:text-hub_green-500 active:text-hub_green-600",
                      { "text-hub_green-500": pathname === "/profile" },
                    )}
                  >
                    Account
                  </Link>
                  <Link
                    href={UserUrl.getSettings()}
                    className={clsx(
                      "block py-2.5 text-lg transition-colors duration-200 hover:text-hub_green-500 active:text-hub_green-600",
                      { "text-hub_green-500": pathname === "/settings" },
                    )}
                  >
                    Settings
                  </Link>
                </nav>
                <div className={"h-[1px] bg-white/10"}></div>
                <Button square fullWidth onClick={() => setIsAuth(false)}>
                  Logout
                </Button>
              </>
            )}
            {!isAuth && (
              <Button square fullWidth onClick={() => router.push("/sign-in")}>
                Login/Sign Up
              </Button>
            )}
          </div>
          <ButtonBase
            type={"button"}
            className={{
              button:
                "block appearance-none text-white transition-colors hover:text-hub_green-500 active:text-hub_green-600 md:hidden",
            }}
            onClick={() => setMenuIsOpen(true)}
            title={"Open mobile menu"}
          >
            <FiMenu className={"h-8 w-8 stroke-2"} />
          </ButtonBase>
        </div>
      </Container>
    </header>
  );
}

// export const links = [
//   {
//     title: "Home",
//     url: MainUrl.getHome(),
//   },
//   {
//     title: "Vacancies",
//     url: MainUrl.getHome(),
//   },
//   {
//     title: "Applicants",
//     url: MainUrl.getHome(),
//   },
//   {
//     title: "Apply",
//     url: MainUrl.getHome(),
//   },
//   {
//     title: "About",
//     url: MainUrl.getAbout(),
//   },
//   {
//     title: "Contact Us",
//     url: MainUrl.getContactUs(),
//   },
//   {
//     title: "My Company",
//     url: MainUrl.getAbout(),
//   },
//   {
//     title: "Account",
//     url: MainUrl.getAbout(),
//   },
// ];

export function links(type: UserType) {
  const defaultLinks = [
    {
      title: "Home",
      url: MainUrl.getHome(),
    },
    {
      title: "About",
      url: MainUrl.getAbout(),
    },
    {
      title: "Contact Us",
      url: MainUrl.getContactUs(),
    },
  ];
  const adminLinks = [
    {
      title: "Home",
      url: MainUrl.getHome(),
    },
    {
      title: "Vacancies",
      url: ProtectedUrl.getVacancies(),
    },
    {
      title: "Applicants",
      url: ProtectedUrl.getApplicants(),
    },
    {
      title: "About",
      url: MainUrl.getAbout(),
    },
    {
      title: "Contact Us",
      url: MainUrl.getContactUs(),
    },
    {
      title: "Account",
      url: UserUrl.getAccount(),
    },
  ];
  const agencyLinks = [
    {
      title: "Home",
      url: MainUrl.getHome(),
    },
    {
      title: "Vacancies",
      url: ProtectedUrl.getVacancies(),
    },
    {
      title: "Applicants",
      url: ProtectedUrl.getApplicants(),
    },
    {
      title: "About",
      url: MainUrl.getAbout(),
    },
    {
      title: "Contact Us",
      url: MainUrl.getContactUs(),
    },
    {
      title: "Account",
      url: UserUrl.getAccount(),
    },
  ];
  const recruiterLinks = [
    {
      title: "Home",
      url: MainUrl.getHome(),
    },
    {
      title: "Vacancies",
      url: ProtectedUrl.getVacancies(),
    },
    {
      title: "About",
      url: MainUrl.getAbout(),
    },
    {
      title: "Contact Us",
      url: MainUrl.getContactUs(),
    },
    {
      title: "My Company",
      url: UserUrl.getMyCompany(),
    },
    {
      title: "Account",
      url: UserUrl.getAccount(),
    },
  ];
  const userLinks = [
    {
      title: "Home",
      url: MainUrl.getHome(),
    },
    {
      title: "Apply",
      url: UserUrl.getApply(),
    },
    {
      title: "About",
      url: MainUrl.getAbout(),
    },
    {
      title: "Contact Us",
      url: MainUrl.getContactUs(),
    },
    {
      title: "Account",
      url: UserUrl.getAccount(),
    },
  ];
  switch (type) {
    case "admin":
      return adminLinks;
    case "agency":
      return agencyLinks;
    case "recruiter":
      return recruiterLinks;
    case "user":
      return userLinks;
    default:
      return defaultLinks;
  }
}
