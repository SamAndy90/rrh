"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { FormPasswordInput, FormTextInput } from "common/FormInputs";
import { Button, LinkButton, Title } from "common/ui";
import { useAuthContext } from "contexts/AuthContext";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email().default(""),
  password: z.string().min(1, "Password is required").default(""),
});

type Form = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const { setIsAuth } = useAuthContext();
  const form = useForm<Form>({
    resolver: zodResolver(loginSchema),
    defaultValues: getDefaults(loginSchema),
  });

  function onSubmit(data: Form) {
    console.log({ data });
    setIsAuth(true);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"mx-auto max-w-[980px]"}
      >
        <div className={"mb-6 flex flex-col gap-y-4 text-center md:mb-10"}>
          <Title size={"7xl"} className={"font-garamond text-hub_green-800"}>
            Login
          </Title>
          <p className={"text-sm opacity-70 md:text-base"}>
            Login to your account
          </p>
        </div>

        <div className={"flex flex-col gap-y-6 md:gap-y-8"}>
          <div className={"flex flex-col gap-y-4 md:gap-y-5"}>
            <FormTextInput<Form>
              fieldName={"email"}
              label={"Email"}
              placeholder={"email@example.com"}
            />

            <div className={"flex flex-col gap-y-2"}>
              <FormPasswordInput<Form>
                fieldName={"password"}
                label={"Password"}
                placeholder={"12345ABC"}
              />

              <div className={"flex flex-col items-end"}>
                <LinkButton
                  colorVariant={"secondary"}
                  size={"small"}
                  onClick={() => router.push("/password-reset")}
                >
                  Forgot Password?
                </LinkButton>
              </div>
            </div>
          </div>

          <div className={"flex flex-col gap-y-3"}>
            <Button
              type={"submit"}
              square
              fullWidth
              loading={form.formState.isLoading}
            >
              Login
            </Button>

            <div
              className={"flex flex-wrap items-center justify-center gap-x-1"}
            >
              <p className={"text-sm opacity-70"}>Don’t have an account yet?</p>
              <LinkButton
                className={{
                  button: "font-medium",
                }}
                size={"small"}
                onClick={() => router.push("/sign-up")}
              >
                Sign Up
              </LinkButton>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
