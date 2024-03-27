"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button, Title } from "common/ui";

const employeeDataSchema = z.object({
  name: z.string().default(""),
  surname: z.string().default(""),
});

type Form = z.infer<typeof employeeDataSchema>;

type EmployeeDataFormProps = {
  onClose: () => void;
};

export function EmployeeDataForm({ onClose }: EmployeeDataFormProps) {
  const form = useForm<Form>({
    resolver: zodResolver(employeeDataSchema),
    defaultValues: getDefaults(employeeDataSchema),
  });

  function onSubmit(data: Form) {
    console.log({ data });
    onClose();
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"mx-auto flex max-w-[980px] flex-col gap-y-6"}
      >
        <Title
          size={"4xl"}
          className={"mt-4 text-center font-garamond text-hub_green-800"}
        >
          Add name
        </Title>
        <div className={"flex flex-col gap-y-6 md:flex-row md:gap-x-4"}>
          <FormTextInput<Form>
            fieldName={"name"}
            label={"Name"}
            placeholder={"Andrii"}
          />

          <FormTextInput<Form>
            fieldName={"surname"}
            label={"Surname"}
            placeholder={"Stadnyk"}
          />
        </div>
        <p
          className={
            "rounded bg-red-50 px-4 py-1 text-center text-sm text-red-500"
          }
        >
          By typing your name, you are signing this document.
        </p>
        <div className={"flex items-center justify-center gap-x-12"}>
          <Button
            type={"submit"}
            size={"small"}
            square
            loading={form.formState.isLoading}
          >
            Submit
          </Button>
          <Button
            colorVariant={"danger"}
            size={"small"}
            square
            loading={form.formState.isLoading}
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
