"use client";

import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { Vacancy } from "types/vacancy";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button, Title } from "common/ui";

const editVacancySchema = z.object({
  title: z.string().default(""),
  company_name: z.string().default(""),
  location: z.string().default(""),
  salary: z.string().default(""),
  description: z.string().default(""),
});

type Form = z.infer<typeof editVacancySchema>;

type EditVacancyFormProps = {
  vacancy: Vacancy | null;
  close: () => void;
};

export function EditVacancyForm({ vacancy, close }: EditVacancyFormProps) {
  // const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(editVacancySchema),
    defaultValues: vacancy
      ? editVacancySchema.parse({
          title: vacancy.title,
          company_name: vacancy.company_name,
          location: vacancy.location,
          salary: vacancy.salary,
          description: vacancy.description,
        })
      : getDefaults(editVacancySchema),
  });

  function onSubmit(data: Form) {
    console.log({ data });
    // setTimeout(() => router.push("/sign-in"), 1000);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"mx-auto max-w-[980px]"}
      >
        <Title
          size={"6xl"}
          className={"mb-4 text-center font-garamond text-hub_green-800"}
        >
          Edit Job
        </Title>

        <div className={"flex flex-col gap-y-6 md:gap-y-8"}>
          <div className={"flex flex-col gap-y-4 md:gap-y-5"}>
            <FormTextInput<Form>
              fieldName={"title"}
              label={"Job Title"}
              placeholder={"Developer"}
            />
            <FormTextInput<Form>
              fieldName={"company_name"}
              label={"Company Name"}
              placeholder={"The RRH"}
            />
            <FormTextInput<Form>
              fieldName={"location"}
              label={"Location"}
              placeholder={"London"}
            />
            <FormTextInput<Form>
              fieldName={"salary"}
              label={"Salary ($)"}
              placeholder={"2100"}
            />
            <FormTextInput<Form>
              fieldName={"description"}
              label={"Description"}
              placeholder={"Description"}
              multiline
            />
          </div>

          <Button
            type={"submit"}
            fullWidth
            loading={form.formState.isLoading}
            onClick={close}
          >
            Update Job
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
