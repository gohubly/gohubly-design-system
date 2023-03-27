import React, { useRef, useState } from "react";
import { Icon } from "../Icon";
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
      {props.label}

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
