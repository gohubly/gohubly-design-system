import React, { useEffect, useRef, useState } from 'react';
import { iCheckBox } from './checkbox.interface';
import { Box, Label, Mark } from './checkbox.style';

export const CheckBox: React.FC<iCheckBox> = (props) => {
  const [checkedValue, setCheckedValue] = useState(props.checked)

  const ref = useRef();

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
        onChange={() => { setCheckedValue(!checkedValue) }} />
      <Mark
        onColor={props.onColor}
        disabled={props.disabled}
        className={props.disabled ? 'disabled' : ''} />
    </Label>
  );
};

