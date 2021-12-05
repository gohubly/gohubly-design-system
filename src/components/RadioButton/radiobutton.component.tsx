import React, { useRef, useState } from 'react';
import { iRadioOption } from '.';
import { iRadio } from './radiobutton.interface';
import { Box, Label, Mark, Spacer } from './radiobutton.style';

export const RadioButton: React.FC<iRadio> = (props) => {

  const [checkedValue, setCheckedValue] = useState<string>(props.value);

  const onChangeValue = (evt: any) => {
    setCheckedValue(evt.target.value);
    if (props.onChange)
      props.onChange(evt.target.value);
  }
  const ref = useRef();

  return (
    <div>
      {
        props.options &&
        (props.options.map((value: iRadioOption, index: number) => {
          return (
            <>
              <Label
                {...props}
                key={index}
                htmlFor={value.title}
                disabled={props.disabled}
                onColor={props.onColor}
                className={props.disabled ? 'disabled' : ''}
              >
                {value.title}
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
                  className={props.disabled ? 'disabled' : ''} />
              </Label>
              <Spacer />
            </>
          )
        }))
      }
    </div>
  )
};

