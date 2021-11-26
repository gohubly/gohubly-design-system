import React, { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';

import { iInput } from './input.interface';
import { Label, LabelText, HelperText, Input as StyledInput, LeftIcon, RelativeContainer, RightIcon, PrefixText, SuffixText, DropdownWrapper, DropdownItem } from './input.style';

export const Input: React.FC<iInput> = (props) => {
  const dropdownRef = useRef(null)
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [inputValue, setInputValue] = useState(props.value || props.defaultValue || '')

  useEffect(() => {
    setInputValue(props.value ?? '')
  }, [props.value])

  useClickOutside(() => {
    if (dropdownOpened) setDropdownOpened(false)
  }, [dropdownRef, dropdownOpened])

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(evt)
    else setInputValue(evt.target.value)
  }

  const onClickDropdownItem = (itemValue: string) => {
    setDropdownOpened(false)
    setInputValue(itemValue)
  }

  const onFocusInput = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (props.onFocus) props.onFocus(evt)

    if (!dropdownOpened) setDropdownOpened(true)
  }

  return (
    <Label htmlFor={props?.name} data-has-error={props?.error}>
      {/* Label */}
      {props?.label && 
        <LabelText OnColor={props.OnColor}>{props.label}</LabelText>
      }

      <RelativeContainer>
        {/* Icone Esquerda */}
        {props.iconLeft && <LeftIcon src="http://piq.codeus.net/static/media/userpics/piq_45983_400x400.png" width="20px" />}
       
        {/* Prefixo */}
        {props.prefix && !props.iconLeft && <PrefixText data-has-error={props?.error}>{props.prefix}</PrefixText>}

        {/* Input */}
        <StyledInput
          {...props}
          value={inputValue}
          data-has-error={!!props?.error}
          onChange={onInputChange}
          onFocus={onFocusInput}
          autoComplete={props.autoComplete || props.dropdown && 'off'}
          contentLeft={!!props.iconLeft || !!props.prefix}
          contentRight={!!props.iconRight || !!props.suffix}
        />
        
        {/* Icone Direita */}
        {props.iconRight && <RightIcon src="http://piq.codeus.net/static/media/userpics/piq_45983_400x400.png" width="20px" />}

        {/* Sufixo */}
        {props.suffix && !props.iconRight && <SuffixText data-has-error={!!props?.error}>{props.suffix}</SuffixText>}

        {props.dropdown?.length && (
          <DropdownWrapper opened={dropdownOpened} ref={dropdownRef}>
            {props.dropdown.map((dropdownItem, index) => (
              <DropdownItem
                onClick={() => onClickDropdownItem(dropdownItem.value)}
                key={`input-dropdown-item-${dropdownItem.value}-${index}`}
                active={dropdownItem.value === inputValue}
              >
                {dropdownItem.value}
              </DropdownItem>
            ))}
          </DropdownWrapper>
        )}
      </RelativeContainer>

      {/* Helper text */}
      {props?.helperText && 
        <HelperText data-has-error={props?.error} OnColor={props.OnColor}>{props.helperText}</HelperText>
      }
    </Label>
  );
};