import React, { useRef, useState } from "react";
import ellipsiText from "../../helpers/ellipsiText";
import { Icon } from "../Icon";
import { TooltipV2 } from "../Tooltip";
import { Typography } from "../Typography";
import { iCheckBox } from "./checkbox.interface";
import { Box, Label, Mark } from "./checkbox.style";

export const CheckBox: React.FC<iCheckBox> = (props) => {
  const [checkedValue, setCheckedValue] = useState(props.checked);

  const ref = useRef();

  const onChange = (evt: any) => {
    setCheckedValue(!checkedValue);
    if (props.onChange) props.onChange(evt.target.value);
  };

  return (
    <Label
      {...props}
      htmlFor={props.name}
      disabled={props.disabled}
      onColor={props.onColor}
      className={props.disabled ? "disabled" : ""}
      checked={checkedValue}
      onChange={onChange}
    >
      {props.tooltip && typeof props.label === "string" && props.ellipsiCount && (
        <TooltipV2
          id={props.label}
          text={props.label}
          position="down"
          pointerOrientation="up"
          pointerPosition="center"
          maxWidth="250px"
          size="LG"
        >
          <Typography
            size="XXS"
            lineHeight="LG"
            color="neutralLowDark"
            fontWeight={500}
            as="p"
          >
            {ellipsiText(props.label, props.ellipsiCount)}
          </Typography>
        </TooltipV2>
      )}

      {!props.tooltip && typeof props.label !== "string" && props.label}

      <Box
        id={props.name}
        ref={ref}
        checked={checkedValue}
        disabled={props.disabled}
      />

      <Mark
        onColor={props.onColor}
        disabled={props.disabled}
        className={props.disabled ? "disabled" : "mark"}
      >
        {checkedValue &&
          (!props.disabled ? (
            <Icon size="XXXS" OnColor={!props.onColor} iconId={`check`} />
          ) : (
            <Icon size="XXXS" OnColor={!props.checked} iconId={`check`} />
          ))}
      </Mark>
    </Label>
  );
};
