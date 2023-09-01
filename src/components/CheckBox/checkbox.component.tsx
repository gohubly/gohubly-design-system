import React, { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { ICheckBox } from "./checkbox.interface";
import { Box, Label, Mark } from "./checkbox.style";

export const CheckBox: React.FC<ICheckBox> = (props) => {
  const [checkedValue, setCheckedValue] = useState(props.checked);

  const onChange = (evt: React.FormEvent<HTMLLabelElement>) => {
    const newCheckedValue = !checkedValue;
    setCheckedValue(newCheckedValue);
    props.onChange?.(newCheckedValue);
    props.onValueChange?.(evt);
  };

  useEffect(() => {
    setCheckedValue(props.checked);
  }, [props.checked]);

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
        type="checkbox"
        id={props.name}
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
            <Icon size="XXXS" OnColor={!props.onColor} iconId={"check"} />
          ) : (
            <Icon size="XXXS" OnColor={!props.checked} iconId={"check"} />
          ))}
      </Mark>
    </Label>
  );
};
