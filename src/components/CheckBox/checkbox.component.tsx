import React, { useRef, useState } from 'react';
import { iCheckBox } from './checkbox.interface';
import { Box, Label, Mark } from './checkbox.style';

export const CheckBox: React.FC<iCheckBox> = (props) => {
  const [checkedValue, setCheckedValue] = useState(props.checked)

  const ref = useRef();

  const onChange = (evt: any) => {
    setCheckedValue(!checkedValue);
    if (props.onChange)
      props.onChange(evt.target.value);
  }

  return (
    <Label
      {...props}
      htmlFor={props.name}
      disabled={props.disabled}
      onColor={props.onColor}
      className={props.disabled ? 'disabled' : ''}
    >
      {props.label}
      <Box
        id={props.name}
        ref={ref}
        checked={checkedValue}
        disabled={props.disabled}
        onChange={onChange} />
      <Mark
        onColor={props.onColor}
        disabled={props.disabled}
        className={props.disabled ? 'disabled' : ''} />
    </Label>
  );
};

