"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button, LinkButton, Title } from "common/ui";

const formSchema = z.object({
  email: z.string().email().default(""),
});

type Form = z.infer<typeof formSchema>;

export function PasswordResetForm() {
  const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    console.log({ data });
    setTimeout(() => router.push("/new-password"), 1000);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"mx-auto max-w-[980px]"}
      >
        <div className={"mb-6 flex flex-col gap-y-4 text-center md:mb-10"}>
          <Title size={"7xl"} className={"font-garamond text-hub_green-800"}>
            Password Reset
          </Title>
          <p className={"text-sm opacity-70 md:text-base"}>
            Restore access to your account
          </p>
        </div>

        <div className={"flex flex-col gap-y-6 md:gap-y-8"}>
          <div className={"flex flex-col gap-y-4 md:gap-y-5"}>
            <FormTextInput<Form>
              fieldName={"email"}
              label={"Email"}
              placeholder={"email@example.com"}
            />
          </div>

          <div className={"flex flex-col gap-y-3"}>
            <Button
              type={"submit"}
              fullWidth
              square
              loading={form.formState.isLoading}
            >
              Reset Password
            </Button>

            <div
              className={"flex flex-wrap items-center justify-center gap-x-1"}
            >
              <p className={"text-sm opacity-70"}>Go back to</p>
              <LinkButton
                className={{
                  button: "font-medium",
                }}
                onClick={() => router.push("/sign-in")}
                size={"small"}
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
