import React, { useEffect, useState } from 'react';
import { Typography } from '..';

import { iInputCode } from './inputcode.interface';
import { Input, Container, InputsWrapper } from './inputcode.style';

const inputCodeDefaultClass = 'ds-inputcode-rc'
export const InputCode: React.FC<iInputCode> = ({ error, onCode, length, helperText, label, allowClipboard, ...props }) => {
  const [nodes, setNodes] = useState<NodeListOf<Element>>();
  const [codes, setCodes] = useState<string[]>([]);

  useEffect(() => {
    const ipts = document.querySelectorAll(`.${inputCodeDefaultClass}`);
    setNodes(ipts);
  }, [])

  const onNext = (evt: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    
    let { currentTarget, keyCode, charCode, which,  } = evt;
    const code = charCode || keyCode || which
    const value = currentTarget.value?.trim()
    const clipboardCodes = [17, 91, 86, 67]

    if (allowClipboard && clipboardCodes.includes(code)) return;

    const goToNextInputIfExists = () => nodes && nodes[index + 1] && (nodes[index + 1] as HTMLInputElement).focus();
    const goToPreviousInputIfExists = () => nodes && nodes[index - 1] && (nodes[index - 1] as HTMLInputElement).focus();

    // When press space, check if exists next block & focus it
    const isSpace = code === 32
    if (isSpace) {
      goToNextInputIfExists();
    }

    const isBackSpace = code === 8

    if (isBackSpace) {
      goToPreviousInputIfExists()
    }

    const isNumberFromKeyboard = code >= 48 && code <= 57;
    const isNumberFromNumpad = code >= 96 && code <= 105;

    // If key is not a number, clear input value
    if (!isNumberFromKeyboard && !isNumberFromNumpad) {
      currentTarget.value = ''
    }

    // Continue only if key is a number
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

  const handleClipboardPaste = (event: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    const text = (event.clipboardData || (window as any)?.clipboardData).getData('text')

    if (!text) return

    const divided = text.split('');

    const hasOnlyNumbers = (codes: string[]) => {
      return codes.every(value => {        
        return !isNaN(+value)
      })
    }

    const childs = event.currentTarget.parentElement?.children;

    if (hasOnlyNumbers(divided)) {
      if (childs?.length) {
        [].forEach.call(childs, (node: HTMLInputElement, index) => node.value = divided[index])
      }

      return setCodes(divided);
    }

    event.currentTarget.value = ''
  }

  return (
    <Container>
      {label && <Typography size="SM" color="neutralLowDark" fontWeight={500}>{label}</Typography>}
      <InputsWrapper>
        {Array.from(Array(length).keys()).map((_, index) => (
          <Input
            key={index}
            maxLength={1}
            className={inputCodeDefaultClass}
            data-has-error={!!error}
            onKeyUp={e => onNext(e, index)}
            onPaste={event => allowClipboard ? handleClipboardPaste(event, index) : undefined}
            {...props}
          />
        ))}
      </InputsWrapper>
      {helperText && <Typography size="XS" color={error ? 'helper' : 'neutralLow'} fontWeight={500}>{helperText}</Typography>}
    </Container>
  );
}