"use client";

import {
  ErrorMessage,
  ErrorMessageProps,
} from "common/ErrorBoundary/ErrorMessage";
import TopBG from "common/TopBg";

export type ErrorProps = ErrorMessageProps;

export default function Error(props: ErrorProps) {
  return (
    <>
      <TopBG size={"small"} />
      <ErrorMessage {...props} />;
    </>
  );
}
