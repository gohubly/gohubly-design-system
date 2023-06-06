import React, { useRef, useState } from "react";
import { Typography } from "../Typography";
import {
  IStyledRadio,
  IStyledRadioOptions,
} from "./styled-radio-button.interface";
import { Box, Container, Label, Mark } from "./styled-radio-button.style";

export const StyledRadioButton: React.FC<IStyledRadio> = (props) => {
  const [checkedValue, setCheckedValue] = useState<string>(props.value);

  const onChangeValue = (evt: any) => {
    console.log(evt.target.value)
    setCheckedValue(evt.target.value);
    if (props.onChange) props.onChange(evt.target.value);
  };

  const ref = useRef();

  return (
    <Container>
      {props.options &&
        props.options.map((value: IStyledRadioOptions, index: number) => {
          return (
            <>
              <Label
                {...props}
                key={index}
                htmlFor={value.title}
                disabled={props.disabled}
                onColor={props.onColor}
                className={props.disabled ? "disabled" : ""}
                gapOptions={props.gapOptions}
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
                  onChange={(evt) => onChangeValue(evt)}
                />

                <Mark
                  onColor={props.onColor}
                  disabled={props.disabled}
                  className={props.disabled ? "disabled" : "mark"}
                  positionLeft={props.positionLeft ?? "0"}
                  positionRight={props.positionRight ?? "0"}
                  positionTop={props.positionTop ?? "0"}
                  positionBottom={props.positionBottom ?? "0"}
                  transformX={props.transformX}
                  transformY={props.transformY}
                  lengthRadio={props.lengthRadio}
                  lengthMark={props.lengthMark}
                />
              </Label>
            </>
          );
        })}
    </Container>
  );
};
