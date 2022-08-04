import React, { useEffect, useRef, useState, useMemo } from "react";
import { useClickOutside } from "../../hooks";
import { iInput } from "./input.interface";
import {
  Label,
  LabelText,
  HelperText,
  Input as StyledInput,
  LeftIcon,
  RelativeContainer,
  RightIcon,
  PrefixText,
  SuffixText,
  DropdownWrapper,
  DropdownItem,
  PlaceholderStyled,
} from "./input.style";

export const Input: React.FC<iInput> = ({
  size: propsSize,
  fontSize: propsFontSize,
  ...props
}) => {
  const dropdownRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const [inputValue, setInputValue] = useState(
    props.value || props.defaultValue || ""
  );
  const hasPlaceholderStyled = props.placeholderStyled ? true : false;

  useEffect(() => {
    if (!inputValue) {
      setIsSelected(true);
      if (hasPlaceholderStyled) {
        setIsPlaceholderVisible(true);
      }
    }
  }, [inputValue]);

  useEffect(() => {
    setInputValue(props.value ?? "");
  }, [props.value]);

  useClickOutside(() => {
    if (dropdownOpened) setDropdownOpened(false);
  }, [dropdownRef, dropdownOpened]);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(evt);
    else setInputValue(evt.target.value);
  };

  const onClickDropdownItem = (itemValue: string, itemLabel?: string) => {
    setDropdownOpened(false);
    setIsSelected(false);
    setInputValue(itemLabel || itemValue);
    props.onClickDropdownItem &&
      props.onClickDropdownItem(itemValue, itemLabel);
  };

  const onFocusInput = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (props.onFocus) props.onFocus(evt);

    if (!dropdownOpened) setDropdownOpened(true);
  };

  const dropdownItems = useMemo(() => {
    if (!props.dropdown?.length) return [];

    const stringInputValue = inputValue.toString().toLowerCase();
    const foundItems = props.dropdown?.filter(({ value, label }) => {
      return (
        value.toLowerCase().includes(stringInputValue) ||
        label?.toLowerCase()?.includes(stringInputValue)
      );
    });

    if (foundItems) {
      const filtered = props.dropdown.filter(({ value }) => {
        return !foundItems.find((item) => value === item.value);
      });

      let items = [...foundItems, ...filtered];

      if(props.hasAllItems && props.dropdown?.indexOf({label: 'Todos', value: ''}) === -1) {
        items?.unshift({label: 'Todos', value: ''})
      }

      return items;
    }

    return props.dropdown;
  }, [inputValue, props.dropdown]);

  const isDropdownItemActive = (
    dropdownValue: string,
    dropdownLabel?: string
  ) => {
    if (!props.dropdown) return false;

    const stringInputValue = inputValue.toString().toLowerCase();

    return (
      stringInputValue !== "" &&
      (dropdownValue.includes(stringInputValue) ||
        dropdownLabel?.includes(stringInputValue))
    );
  };

  const clickIconDropdown = () => {
    setDropdownOpened(!dropdownOpened);
  };

  const clickPlaceholder = () => {
    setIsPlaceholderVisible(true);
    setDropdownOpened(true);
    inputRef?.current?.focus();
  };

  return (
    <Label
      htmlFor={props?.name}
      data-has-error={props?.error}
      fluid={props.fluid}
    >
      {/* Label */}
      {props?.label && (
        <LabelText OnColor={props.OnColor}>{props.label}</LabelText>
      )}

      <RelativeContainer disabled={props.disabled}>
        {/* Icone Esquerda */}
        {props.iconLeft && (
          <LeftIcon
            opened={dropdownOpened}
            disabled={props.disabled}
            onClick={props.iconLeftOnClick}
            iconId={props.iconLeft}
            iconLeftSize={props.iconLeftSize}
            iconLeftPadding={props.iconLeftPadding}
          />
        )}

        {/* Prefixo */}
        {props.prefix && (
          <PrefixText data-has-error={props?.error}>{props.prefix}</PrefixText>
        )}

        {hasPlaceholderStyled && inputValue === "" && (
          <PlaceholderStyled
            isSelected={isSelected}
            onClick={!props.disabled ? clickPlaceholder : () => null}
            size={propsSize}
            disabled={props.disabled}
            hasIconLeft={!!props.iconLeft}
            sizeIconLeft={props.iconLeftSize}
            opened={dropdownOpened}
          >
            {props.placeholderStyled}
          </PlaceholderStyled>
        )}

        {/* Input */}
        <StyledInput
          {...props}
          opened={dropdownOpened}
          Size={propsSize}
          fontSize={propsFontSize}
          value={inputValue}
          data-has-error={!!props?.error}
          placeholder={props.placeholder ?? ""}
          onChange={onInputChange}
          onFocus={onFocusInput}
          autoComplete={props.autoComplete || (props.dropdown && "off")}
          contentLeft={!!props.iconLeft || !!props.prefix}
          contentRight={!!props.iconRight || !!props.suffix}
          ref={inputRef || dropdownRef}
        />

        {/* Icone Direita */}
        {props.iconRight && (
          <RightIcon
            error={props.error}
            opened={dropdownOpened}
            disabled={props.disabled}
            onClick={
              props?.dropdown && !props.disabled
                ? clickIconDropdown
                : props.iconRightOnClick
            }
            iconId={props.iconRight}
            iconRigthSize={props.iconRightSize}
            iconRightPadding={props.iconRightPadding}
          />
        )}

        {/* Sufixo */}
        {props.suffix && (
          <SuffixText data-has-error={!!props?.error} className="sufixo">
            {props.suffix}
          </SuffixText>
        )}

        {!!props.dropdown?.length && dropdownOpened && (
          <DropdownWrapper opened={dropdownOpened} ref={dropdownRef}>
            {dropdownItems.map((dropdownItem, index) => (
              <DropdownItem
                fontSize={propsFontSize}
                onClick={() =>
                  onClickDropdownItem(dropdownItem.value, dropdownItem.label)
                }
                key={`input-dropdown-item-${dropdownItem.value}-${index}`}
                active={
                  !!isDropdownItemActive(
                    dropdownItem.value.toLowerCase(),
                    dropdownItem.label?.toLowerCase()
                  )
                }
                itemSelect={
                  inputValue !== undefined &&
                  inputValue === (dropdownItem?.label || dropdownItem?.value)
                }
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
