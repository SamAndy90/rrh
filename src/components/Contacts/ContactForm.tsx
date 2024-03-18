"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button, Title } from "common/ui";

const contactFormSchema = z.object({
  fullname: z.string().min(1, "Name is required").default(""),
  email: z.string().min(1, "Email is required").email().default(""),
  message: z.string().min(30, "Message is required").default(""),
});

type Form = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<Form>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: getDefaults(contactFormSchema),
  });

  function onSubmit(data: Form) {
    console.log({ data });
    form.reset();
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"mx-auto flex max-w-[980px] flex-col gap-6"}
      >
        <div className={"mb-6 flex flex-col gap-y-4 text-center md:mb-10"}>
          <Title size={"7xl"} className={"font-garamond text-hub_green-800"}>
            Contact Us
          </Title>
          <p className={"text-sm opacity-70 md:text-base"}>
            Please use the form below to send us a message and somebody will get
            in touch with you a soon as possible.
          </p>
        </div>
        <div className={"flex flex-col gap-5 md:flex-row "}>
          <FormTextInput<Form>
            fieldName={"fullname"}
            label={"Full name"}
            placeholder={"Andrii Stadnyk"}
          />
          <FormTextInput<Form>
            fieldName={"email"}
            label={"Email"}
            placeholder={"email@example.com"}
          />
        </div>
        <FormTextInput<Form>
          multiline
          fieldName={"message"}
          label={"Message"}
          placeholder={"Your message"}
        />

        <Button square type={"submit"} loading={form.formState.isSubmitting}>
          Send
        </Button>
      </form>
    </FormProvider>
  );
}
