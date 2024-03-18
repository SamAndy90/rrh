"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { FormPasswordInput } from "common/FormInputs";
import { Button, Title } from "common/ui";

const formSchema = z.object({
  new_password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .default(""),
});

type Form = z.infer<typeof formSchema>;

export function PasswordResetConfirmForm() {
  const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    console.log({ data });
    setTimeout(() => router.push("/success"), 1000);
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
            Update your password
          </p>
        </div>
        <div className={"flex flex-col gap-y-6 md:gap-y-8"}>
          <div className={"flex flex-col gap-y-6 md:gap-y-8"}>
            <div className={"flex flex-col gap-y-4 md:gap-y-5"}>
              <FormPasswordInput<Form>
                fieldName={"new_password"}
                label={"New password"}
                placeholder={"12345ABC"}
              />
            </div>
          </div>

          <Button
            type={"submit"}
            square
            fullWidth
            loading={form.formState.isLoading}
          >
            Update password
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
