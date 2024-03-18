"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Title } from "common/ui";

export function PasswordResetSuccess() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className={"flex flex-col gap-y-4 text-center"}>
      <Title size={"7xl"} className={"font-garamond text-hub_green-800"}>
        Password reset
      </Title>
      <p className={"opacity-70 md:text-lg"}>
        Your password has been successfully reset. If your account exists, you
        will receive further instructions via email.
      </p>
    </div>
  );
}
