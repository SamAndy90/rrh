"use client";

import { Button, Container, Section, Title } from "common/ui";

export type ErrorMessageProps = {
  error: Error;
  reset: () => void;
};

export function ErrorMessage(props: ErrorMessageProps) {
  const { error, reset } = props;

  return (
    <Section size={"small"}>
      <Container className={"max-w-screen-sm"}>
        <div className={"flex flex-col items-center gap-y-6 text-center"}>
          <Title size={"3xl"} className={"text-red-500"}>
            Something went wrong!
          </Title>

          <p className={"text-lg"}>
            🫣 We&apos;re sorry, but an error occurred. Try again later.
          </p>

          {error.message && (
            <p
              className={
                "rounded bg-red-50 px-3 py-1 text-start text-sm text-red-500"
              }
            >
              {error.message}
            </p>
          )}

          <Button onClick={() => reset()} size={"small"}>
            Try again
          </Button>
        </div>
      </Container>
    </Section>
  );
}
