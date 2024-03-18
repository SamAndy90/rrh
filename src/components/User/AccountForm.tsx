"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button, Title } from "common/ui";

const accountSchema = z.object({
  personTitle: z.string().default(""),
  firstName: z.string().default(""),
  lastName: z.string().default(""),
  phone: z.string().default(""),
  email: z.string().min(1, "Email is required").email().default(""),
});

type Form = z.infer<typeof accountSchema>;

export function AccountForm() {
  const router = useRouter();

  const form = useForm<Form>({
    resolver: zodResolver(accountSchema),
    defaultValues: getDefaults(accountSchema),
  });

  useEffect(() => {
    form.setValue("email", "stadnyk.andy@gmail.com");
  }, []);

  function onSubmit(data: Form) {
    console.log({ data });
    setTimeout(() => router.push("/"), 1000);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"mx-auto max-w-[980px]"}
      >
        <div className={"mb-6 flex flex-col gap-y-4 text-center md:mb-10"}>
          <Title size={"7xl"} className={"font-garamond text-hub_green-800"}>
            Account details
          </Title>
        </div>

        <div className={"flex flex-col gap-y-6 md:gap-y-8"}>
          <div className={"flex flex-col gap-y-4 md:gap-y-5"}>
            <FormTextInput<Form>
              fieldName={"personTitle"}
              label={"Title"}
              placeholder={"Your title"}
            />
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
              fieldName={"phone"}
              label={"Email"}
              placeholder={"email@example.com"}
            />
            <FormTextInput<Form>
              fieldName={"email"}
              label={"Email"}
              placeholder={"email@example.com"}
              disabled
            />
          </div>

          <Button
            type={"submit"}
            square
            fullWidth
            loading={form.formState.isLoading}
          >
            Update
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
