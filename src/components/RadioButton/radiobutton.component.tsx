import React, { useRef, useState } from "react";
import { iRadioOption } from ".";
import { Typography } from "../Typography";
import { iRadio } from "./radiobutton.interface";
import { Box, Container, Label, Mark, Spacer } from "./radiobutton.style";

export const RadioButton: React.FC<iRadio> = (props) => {
  const [checkedValue, setCheckedValue] = useState<string>(props.value);

  const onChangeValue = (evt: any) => {
    setCheckedValue(evt.target.value);
    if (props.onChange) props.onChange(evt.target.value);
  };
  const ref = useRef();

  return (
    <Container>
      {props.options &&
        props.options.map((value: iRadioOption, index: number) => {
          return (
            <>
              <Label
                {...props}
                key={index}
                htmlFor={value.title}
                disabled={props.disabled}
                onColor={props.onColor}
                className={props.disabled ? "disabled" : ""}
                underlined={props.underlined}
                paddingOptions={props.paddingOptions}
              >
                {value.title && (
                  <Typography
                    color="neutralLowDark"
                    size="XXS"
                    lineHeight="LG"
                    fontWeight={400}
                    as="p"
                  >
                    {value.title}
                  </Typography>
                )}

                {value.child && (
                  <div style={{ width: "100%" }}>{value.child}</div>
                )}

                <Box
                  id={value.title}
                  name={props.name}
                  ref={ref}
                  value={value.value}
                  checked={checkedValue === value.value}
                  disabled={props.disabled}
                  onChange={onChangeValue}
                />

                <Mark
                  onColor={props.onColor}
                  disabled={props.disabled}
                  className={props.disabled ? "disabled" : "mark"}
                />
              </Label>

              {(props?.options?.length ?? 0) > 1 && !props.underlined && (
                <Spacer />
              )}
            </>
          );
        })}
    </Container>
  );
};
