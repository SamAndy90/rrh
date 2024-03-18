"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { FormPasswordInput, FormTextInput } from "common/FormInputs";
import { Button, LinkButton, Title } from "common/ui";

const formSchema = z.object({
  firstName: z.string().default(""),
  lastName: z.string().default(""),
  email: z.string().min(1, "Email is required").email().default(""),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .default(""),
});

type Form = z.infer<typeof formSchema>;

export function RegistrationForm() {
  const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    console.log({ data });
    setTimeout(() => router.push("/sign-in"), 1000);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"mx-auto max-w-[980px]"}
      >
        <div className={"mb-6 flex flex-col gap-y-4 text-center md:mb-10"}>
          <Title size={"7xl"} className={"font-garamond text-hub_green-800"}>
            Create an account!
          </Title>
          <p className={"text-sm opacity-70 md:text-base"}>
            Register for an account
          </p>
        </div>

        <div className={"flex flex-col gap-y-6 md:gap-y-8"}>
          <div className={"flex flex-col gap-y-4 md:gap-y-5"}>
            <div className={"grid grid-cols-1 gap-4 md:grid-cols-2"}>
              <FormTextInput<Form>
                fieldName={"firstName"}
                label={"First name"}
                placeholder={"Andrii"}
              />
              <FormTextInput<Form>
                fieldName={"lastName"}
                label={"Last name"}
                placeholder={"Stadnyk"}
              />
            </div>
            <FormTextInput<Form>
              fieldName={"email"}
              label={"Email"}
              placeholder={"email@example.com"}
            />
            <FormPasswordInput<Form>
              fieldName={"password"}
              label={"Password"}
              placeholder={"12345ABC"}
            />
          </div>

          <div className={"flex flex-col gap-y-3"}>
            <Button
              type={"submit"}
              square
              fullWidth
              loading={form.formState.isLoading}
            >
              Create account
            </Button>

            <div
              className={"flex flex-wrap items-center justify-center gap-x-1"}
            >
              <p className={"text-sm opacity-70"}>Already have an account?</p>
              <LinkButton
                className={{
                  button: "font-medium",
                }}
                size={"small"}
                onClick={() => router.push("/sign-in")}
              >
                Login
              </LinkButton>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
