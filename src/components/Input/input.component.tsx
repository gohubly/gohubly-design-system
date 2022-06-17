import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useClickOutside } from '../../hooks';

import { iInput } from './input.interface';
import { Label, LabelText, HelperText, Input as StyledInput, LeftIcon, RelativeContainer, RightIcon, PrefixText, SuffixText, DropdownWrapper, DropdownItem } from './input.style';

export const Input: React.FC<iInput> = ({ size: propsSize, ...props }) => {
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

  const onClickDropdownItem = (itemValue: string, itemLabel?: string) => {
    setDropdownOpened(false)
    setInputValue(itemLabel || itemValue)
    props.onClickDropdownItem && props.onClickDropdownItem(itemValue, itemLabel)
  }

  const onFocusInput = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (props.onFocus) props.onFocus(evt)

    if (!dropdownOpened) setDropdownOpened(true)
  }

  const dropdownItems = useMemo(() => {
    if (!props.dropdown?.length) return []
    
    const stringInputValue = inputValue.toString().toLowerCase()
    const index = props.dropdown?.findIndex(({ value, label }) => {
      return value.toLowerCase().includes(stringInputValue) || label?.toLowerCase()?.includes(stringInputValue)
    })

    if (index !== -1) {
      const cloned = [...props.dropdown]
      const sliced = cloned.splice(index, 1)

      return [...sliced, ...cloned]
    }

    return props.dropdown
  }, [inputValue, props.dropdown])

  const isDropdownItemActive = (dropdownValue: string, dropdownLabel?: string) => {
    if (!props.dropdown) return false
    
    const stringInputValue = inputValue.toString().toLowerCase()

    return stringInputValue !== '' && (dropdownValue.includes(stringInputValue) || dropdownLabel?.includes(stringInputValue))
  }

  return (
    <Label
      htmlFor={props?.name}
      data-has-error={props?.error}
      fluid={props.fluid}
    >
      {/* Label */}
      {props?.label &&
        <LabelText OnColor={props.OnColor}>{props.label}</LabelText>
      }

      <RelativeContainer>
        {/* Icone Esquerda */}
        {props.iconLeft && (
          <LeftIcon
            onClick={props.iconLeftOnClick}
            iconId={props.iconLeft}
            iconLeftPadding={props.iconLeftPadding}
          />
        )}

        {/* Prefixo */}
        {props.prefix && !props.iconLeft && (
          <PrefixText data-has-error={props?.error}>{props.prefix}</PrefixText>
        )}

        {/* Input */}
        <StyledInput
          {...props}
          Size={propsSize}
          value={inputValue}
          data-has-error={!!props?.error}
          onChange={onInputChange}
          onFocus={onFocusInput}
          autoComplete={props.autoComplete || (props.dropdown && "off")}
          contentLeft={!!props.iconLeft || !!props.prefix}
          contentRight={!!props.iconRight || !!props.suffix}
        />

        {/* Icone Direita */}
        {props.iconRight && (
          <RightIcon
            onClick={props.iconRightOnClick}
            iconId={props.iconRight}
            iconRightPadding={props.iconRightPadding}
          />
        )}

        {/* Sufixo */}
        {props.suffix && !props.iconRight && (
          <SuffixText data-has-error={!!props?.error}>
            {props.suffix}
          </SuffixText>
        )}

        {props.dropdown?.length && (
          <DropdownWrapper opened={dropdownOpened} ref={dropdownRef}>
            {dropdownItems.map((dropdownItem, index) => (
              <DropdownItem
                onClick={() => onClickDropdownItem(dropdownItem.value, dropdownItem.label)}
                key={`input-dropdown-item-${dropdownItem.value}-${index}`}
                active={!!isDropdownItemActive(dropdownItem.value.toLowerCase(), dropdownItem.label?.toLowerCase())}
              >
                {dropdownItem.label || dropdownItem.value}
              </DropdownItem>
            ))}
          </DropdownWrapper>
        )}
      </RelativeContainer>

      {/* Helper text */}
      {props?.helperText && (
        <HelperText
          onClick={props.helperTextOnClick}
          data-has-error={props?.error}
          OnColor={props.OnColor}
        >
          {props.helperText}
        </HelperText>
      )}
    </Label>
  );
};