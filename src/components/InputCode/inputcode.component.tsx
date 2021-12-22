import React, { useEffect, useState } from 'react';
import { Typography } from '..';

import { iInputCode } from './inputcode.interface';
import { Input, Container, InputsWrapper } from './inputcode.style';

const inputCodeDefaultClass = 'ds-inputcode-rc'
export const InputCode: React.FC<iInputCode> = ({ error, onCode, length, helperText, label, ...props }) => {
  const [nodes, setNodes] = useState<NodeListOf<Element>>();
  const [codes, setCodes] = useState<string[]>([]);

  useEffect(() => {
    const ipts = document.querySelectorAll(`.${inputCodeDefaultClass}`);
    setNodes(ipts);
  }, [])
  
  const onNext = (evt: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    let { currentTarget, keyCode, charCode, which } = evt;
    const code = charCode || keyCode || which
    const value = currentTarget.value?.trim()
    
    const goToNextInputIfExists = () => nodes && nodes[index + 1] && (nodes[index + 1] as HTMLInputElement).focus();

    // When press space, check if exists next block & focus it
    const isSpace = code === 32
    if (isSpace) {
      goToNextInputIfExists();
    }

    // Continue only if key is a number
    const isNumberFromKeyboard = code >= 48 && code <= 57;
    const isNumberFromNumpad = code >= 96 && code <= 105;

    if (!isNumberFromKeyboard && !isNumberFromNumpad) {
      currentTarget.value = ''
    }

    if (isNumberFromKeyboard || isNumberFromNumpad) {
      const inputValue = value
      let newCode = [...codes]
      newCode[index] = inputValue
      currentTarget.value = inputValue
  
      // Update code on state
      setCodes(newCode);
  
      // Callback on change code
      const newCodeStringfied = newCode.join('')
      onCode && onCode(newCodeStringfied)
  
      goToNextInputIfExists();
    }
  };

  return (
    <Container>
      {label && <Typography size="SM" color="neutralLowDark" fontWeight="regular">{label}</Typography>}
      <InputsWrapper>
        {Array.from(Array(length).keys()).map((_, index) => (
          <Input
            maxLength={1}
            className={inputCodeDefaultClass}
            data-has-error={!!error}
            onKeyUp={e => onNext(e, index)}
            {...props}
          />
        ))}
      </InputsWrapper>
      {helperText && <Typography size="XS" color={error ? 'helper' : 'neutralLow'} fontWeight="medium">{helperText}</Typography>}
    </Container>
  );
}