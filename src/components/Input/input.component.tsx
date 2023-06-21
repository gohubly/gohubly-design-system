import React, { useEffect, useRef, useState, useMemo } from "react";
import { Flex } from "rebass";
import { useClickOutside } from "../../hooks";
import { Tag, iTagHierarchy } from "../Tag";
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
  LinkText,
  StyledTextarea,
  CharCount,
  ContainerTextArea,
} from "./input.style";

export const Input: React.FC<iInput> = ({
  size: propsSize,
  fontSize: propsFontSize,
  fontSizeLabel: propsFontSizeLabel,
  ...props
}) => {
  const dropdownRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suffixRef = useRef<HTMLDivElement>(null);
  const prefixRef = useRef<HTMLDivElement>(null);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const [inputValue, setInputValue] = useState(
    props.value || props.defaultValue || ""
  );
  const hasPlaceholderStyled = props.placeholderStyled ? true : false;

  useClickOutside(() => {
    if (dropdownOpened) setDropdownOpened(false);
  }, [dropdownRef, dropdownOpened]);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(evt);
    } else setInputValue(evt.target.value);

    const inputEl = inputRef.current;

    if (inputEl) {
      const cursorPosition = inputEl.selectionStart;
      inputEl.setSelectionRange(cursorPosition, cursorPosition);
    }
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

      if (
        props.hasAllItems &&
        props.dropdown?.indexOf({ label: "Todos", value: "" }) === -1
      ) {
        items?.unshift({ label: "Todos", value: "" });
      }

      return items;
    }

    return props.dropdown;
  }, [inputValue, props.dropdown, props.hasAllItems]);

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

  useEffect(() => {
    if (!inputValue) {
      setIsSelected(true);
      if (hasPlaceholderStyled) {
        setIsPlaceholderVisible(true);
      }
    }
  }, [hasPlaceholderStyled, inputValue]);

  const handleChangeTextArea = (event: any) => {
    const newValue = event.target.value;

    if (props.maxCharacters) {
      if (newValue.length <= props.maxCharacters) {
        setInputValue(newValue);
      } else {
        event.preventDefault();
      }
    } else setInputValue(newValue);
  };

  const hasError =
    typeof inputValue === "string" && props.maxCharacters
      ? inputValue.length === props.maxCharacters
      : false;

  useEffect(() => {
    setInputValue(props.value ?? "");
  }, [props.value]);

  useEffect(() => {
    if (inputRef?.current) {
      if (props.prefix) {
        const prefix = inputRef?.current?.previousSibling as HTMLElement;
        const { width, padding } = window.getComputedStyle(prefix);

        inputRef.current.style.setProperty("--prefix-width", width);
        inputRef.current.style.setProperty(
          "--prefix-padding",
          padding.replace("0px ", "")
        );

        inputRef.current.classList.add("input-with-prefix");
      }

      if (props.suffix) {
        const suffix = inputRef?.current?.nextSibling as HTMLElement;
        const { width, padding } = window.getComputedStyle(suffix);

        inputRef.current.style.setProperty("--suffix-width", width);
        inputRef.current.style.setProperty(
          "--suffix-padding",
          padding.replace("0px ", "")
        );

        inputRef.current.classList.add("input-with-suffix");
      }
    }
  }, [inputRef, props.prefix, props.suffix]);

  useEffect(() => {
    // When there is prefix and icon and/or suffix and icon
    if (prefixRef?.current) {
      if (props.iconLeft && props.prefix) {
        const prefix = prefixRef?.current as HTMLElement;

        const { width, padding } = window.getComputedStyle(prefix);

        const divIconPrefix = prefixRef?.current
          ?.previousSibling as HTMLElement; // select left icon element

        divIconPrefix.style.setProperty("--prefixIcon-width", width); // assign the prefix width value to the --prefixIcon-width
        divIconPrefix.style.setProperty(
          "--prefixIcon-padding",
          padding.replace("0px ", "")
        ); // assign the prefix padding value to the --prefixIcon-padding variable

        divIconPrefix.classList.add("icon-with-prefix"); // add a class to the left icon element to apply the --prefixIcon-width and --prefixIcon-padding variables and calculate their position dynamically
      }
    }

    if (suffixRef?.current) {
      if (props.iconRight && props.suffix) {
        const suffix = suffixRef?.current as HTMLElement;

        const { width, padding } = window.getComputedStyle(suffix);

        const divIconSuffix = suffixRef?.current
          ?.nextElementSibling as HTMLElement; // select right icon element
        divIconSuffix.style.setProperty("--suffixIcon-width", width); // assign the suffix width value to the --suffixIcon-padding variable
        divIconSuffix.style.setProperty(
          "--suffixIcon-padding",
          padding.replace("0px ", "")
        ); // assign the suffix padding value to the --suffixIcon-padding variable
        divIconSuffix.classList.add("icon-with-suffix"); // add a class to the icon element to apply the --suffixIcon-width and --suffixIcon-padding variables and calculate their position dynamically
      }
    }
  }, [
    prefixRef,
    suffixRef,
    props.iconLeft,
    props.iconRight,
    props.prefix,
    props.suffix,
  ]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.addEventListener("blur", function () {
      // Code to be executed when the user exits the textarea
      if (props.textAreaOnBlur) {
        props.textAreaOnBlur();
      }
      // console.log("The textarea lost focus.");
    });
  }, []);

  return (
    <Label
      htmlFor={props?.name}
      data-has-error={props?.error}
      fluid={props.fluid}
      size={propsSize}
    >
      {/* Label */}
      {props?.label && (
        <Flex justifyContent="space-between" alignItems="center">
          <LabelText
            fontSizeLabel={propsFontSizeLabel}
            fontWeightLabel={props.fontWeightLabel}
            OnColor={props.OnColor}
            disabled={props.disabled}
          >
            {props.label}
          </LabelText>

          {props?.link && (
            <LinkText
              onClick={props.linkOnClick}
              data-has-error={props?.error}
              OnColor={props.OnColor}
              Size={propsSize}
              disabled={props.disabled}
            >
              {props.link}
            </LinkText>
          )}
        </Flex>
      )}

      {/* Input Text Area */}
      {props.textArea && (
        <ContainerTextArea>
          <StyledTextarea
            ref={textareaRef}
            id="message"
            name="message"
            value={inputValue}
            onChange={handleChangeTextArea}
            rows={props.rows}
            fluid={props.fluid}
            fontSize={propsFontSize}
            textAreaHeight={props.textAreaHeight}
            placeholder={props.placeholder ?? ""}
            fontWeight={props.fontWeight}
            backgroundTextArea={props.backgroundTextArea}
          ></StyledTextarea>

          {props.maxCharacters && typeof inputValue === "string" && (
            <CharCount
              hasError={hasError}
              Size={propsSize}
              position={props.maxCharactersPosition}
            >
              {inputValue.length}/{props.maxCharacters} caracteres
            </CharCount>
          )}
        </ContainerTextArea>
      )}

      {!props.textArea && (
        <RelativeContainer
          disabled={props.disabled}
          data-has-error={!!props?.error}
        >
          {/* Left icon */}
          {props.iconLeft && (
            <LeftIcon
              fill="transparent"
              stroke="neutralLow"
              strokeWidth={1.5}
              opened={dropdownOpened}
              disabled={props.disabled}
              onClick={props.iconLeftOnClick}
              error={props.error}
              iconId={props.iconLeft}
              iconLeftSize={props.iconLeftSize}
              iconLeftWidth={props.iconLeftWidth}
              iconLeftHeight={props.iconLeftHeight}
              iconLeftPadding={props.iconLeftPadding}
              hasPrefix={!!props.prefix}
              className={props.suffix ? "icon-with-prefix" : ""}
            />
          )}

          {/* Prefix */}
          {props.prefix && (
            <PrefixText
              data-has-error={props?.error}
              onClick={props.iconLeftOnClick}
              style={{
                cursor: props.iconLeftOnClick ? "pointer" : "initial",
              }}
              ref={prefixRef}
              disabled={props.disabled}
            >
              {props.prefix}
            </PrefixText>
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
            hasPrefix={!!props.prefix}
            hasSuffix={!!props.suffix}
            hasLeftIcon={!!props.iconLeft}
            hasRightIcon={!!props.iconRight}
            hasPrefixAndIcon={!!props.iconLeft && !!props.prefix}
            hasSuffixAndIcon={!!props.iconRight && !!props.suffix}
            iconLeftSize={props.iconLeftSize}
            iconLeftWidth={props.iconLeftWidth}
            iconRightSize={props.iconRightSize}
            iconRightWidth={props.iconRightWidth}
            paddingRight={props.paddingRight}
            paddingLeft={props.paddingLeft}
            ref={inputRef || dropdownRef}
            className={
              props.prefix || props.suffix || props.iconLeft || props.iconRight
                ? "input-with-prefix input-with-suffix input-with-icon-and-prefix input-with-icon-and-suffix"
                : ""
            }
          />

          {/* Suffix */}
          {props.suffix && (
            <SuffixText
              data-has-error={!!props?.error}
              className="sufixo"
              onClick={props.iconRightOnClick}
              disabled={props.disabled}
              style={{
                cursor: props.iconRightOnClick ? "pointer" : "initial",
              }}
              ref={suffixRef}
            >
              {props.suffix}
            </SuffixText>
          )}

          {/* Rigth icon */}
          {props.iconRight && (
            <RightIcon
              fill="transparent"
              stroke="neutralLow"
              strokeWidth={1.5}
              error={props.error}
              opened={dropdownOpened}
              disabled={props.disabled}
              onClick={
                props?.dropdown && !props.disabled
                  ? clickIconDropdown
                  : props.iconRightOnClick
              }
              iconId={props.iconRight}
              data-has-error={!!props?.error}
              iconRigthSize={props.iconRightSize}
              iconRightWidth={props.iconRightWidth}
              iconRightHeight={props.iconRightHeight}
              iconRightPadding={props.iconRightPadding}
              hasSuffix={!!props.suffix}
              className={props.suffix ? "icon-with-suffix" : ""}
            />
          )}

          {/* Dropdown */}
          {!!props.dropdown?.length && dropdownOpened && (
            <DropdownWrapper opened={dropdownOpened} ref={dropdownRef}>
              {dropdownItems.map((dropdownItem, index) => {
                return (
                  <DropdownItem
                    fontSize={propsFontSize}
                    onClick={() =>
                      onClickDropdownItem(
                        dropdownItem.value,
                        dropdownItem.label
                      )
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
                      inputValue ===
                        (dropdownItem?.label || dropdownItem?.value)
                    }
                  >
                    {dropdownItem.label || dropdownItem.value}

                    {dropdownItem.tag && (
                      <Tag
                        hierarchy={
                          `${dropdownItem.tag.background}` as iTagHierarchy
                        }
                      >
                        {dropdownItem.tag.label}
                      </Tag>
                    )}
                  </DropdownItem>
                );
              })}
            </DropdownWrapper>
          )}
        </RelativeContainer>
      )}

      {/* Helper text */}
      {props?.helperText && (
        <HelperText
          onClick={props.helperTextOnClick}
          data-has-error={props?.error}
          OnColor={props.OnColor}
          Size={propsSize}
          disabled={props.disabled}
        >
          {props.helperText}
        </HelperText>
      )}
    </Label>
  );
};
