import { forwardRef, useState } from "react";
import { TbEye, TbEyeOff } from "react-icons/tb";

import { IconButton } from "common/ui";
import { TextInput, TextInputProps } from "common/ui/Inputs";

export const PasswordInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <TextInput
        {...{
          ...props,
          type: isVisible ? "text" : "password",
        }}
        ref={ref}
        endAdornment={
          isVisible ? (
            <IconButton
              onMouseUp={() => setIsVisible(false)}
              colorVariant={"secondary"}
            >
              <TbEyeOff className={"h-5 w-5 text-hub_green-600"} />
            </IconButton>
          ) : (
            <IconButton
              onMouseDown={() => setIsVisible(true)}
              colorVariant={"secondary"}
            >
              <TbEye className={"h-5 w-5 text-hub_green-600"} />
            </IconButton>
          )
        }
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";
