import { Dialog as HuiDialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TbX } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

import { IconButton } from "common/ui";

export type DialogProps = {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: {
    overlay?: string;
    contentWrapper?: string;
    content?: string;
  };
};

export function Dialog(props: DialogProps) {
  const {
    open = false,
    onClose = () => {
      console.warn("Close dialog not implemented");
    },
    children,
    className,
  } = props;

  return (
    <Transition appear show={open} as={Fragment}>
      <HuiDialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter={"ease-out duration-300"}
          enterFrom={"opacity-0"}
          enterTo={"opacity-100"}
          leave={"ease-in duration-200"}
          leaveFrom={"opacity-100"}
          leaveTo={"opacity-0"}
        >
          <div
            className={twMerge(
              "fixed inset-0 z-[190] bg-black/60 backdrop-blur-sm",
              className?.overlay,
            )}
            aria-hidden
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter={"ease-out duration-300"}
          enterFrom={"opacity-0"}
          enterTo={"opacity-100"}
          leave={"ease-in duration-200"}
          leaveFrom={"opacity-100"}
          leaveTo={"opacity-0"}
        >
          <HuiDialog.Panel
            className={twMerge(
              `fixed left-1/2 top-1/2 z-[200] max-h-full w-[500px] max-w-[calc(100%-20px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-x-hidden`,
              className?.contentWrapper,
            )}
          >
            <div
              className={twMerge(
                "relative overflow-hidden rounded-xl bg-white px-4 py-3 shadow-md",
                className?.content,
              )}
            >
              <IconButton
                className={{
                  button: "absolute right-3 top-3 z-50",
                }}
                colorVariant={"secondary"}
                size={"small"}
                onClick={onClose}
                startIcon={<TbX className={"h-5 w-5"} />}
              />

              {children}
            </div>
          </HuiDialog.Panel>
        </Transition.Child>
      </HuiDialog>
    </Transition>
  );
}
