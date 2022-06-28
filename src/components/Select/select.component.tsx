import React, { KeyboardEvent, useRef, useState } from "react";
import { iSelect, iSelectOption } from ".";
import { Icon } from "..";
import { useClickOutside } from "../..";
import {
  Wrapper,
  SelectStyled,
  Placeholder,
  Options,
  Option,
  OpenIcon,
  HelperText,
} from "./select.style";

export const Select: React.FC<iSelect> = ({
  placeholder,
  icon,
  items,
  disabled,
  error,
  helperText,
  selected,
  onSelect,
  width,
  height,
  fontSize,
  ...props
}) => {
  const [opened, setOpened] = useState(false);
  const selectRef = useRef(null);

  useClickOutside(() => {
    setOpened(false);
  }, [selectRef, setOpened]);

  const handleToggleSelect = () => {
    setOpened(!disabled && !opened);
  };

  const handleSelectOption = (selectedOption: iSelectOption) => {
    setOpened(false);
    onSelect && onSelect(selectedOption);
  };

  const handleKeyPressOnSelect = ({ key }: KeyboardEvent) => {
    setOpened(key === "Enter");
  };

  const handleKeyPressOnOption = (
    { key }: KeyboardEvent,
    selectedOption: iSelectOption
  ) => {
    if (key === "Enter") handleSelectOption(selectedOption);
  };

  return (
    <Wrapper {...props} ref={selectRef}>
      <SelectStyled
        disabled={disabled}
        error={error}
        onClick={handleToggleSelect}
        tabIndex={0}
        onKeyPress={handleKeyPressOnSelect}
        opened={opened}
        width={width}
        height={height}
      >
        {icon && <Icon iconId={icon} size="SM" />}
        <Placeholder fontSize={fontSize ? fontSize : "XS"}>
          {selected?.label || selected?.value || placeholder}
        </Placeholder>
        <OpenIcon iconId="chevronDown" opened={!disabled && opened} />
      </SelectStyled>

      {!disabled && opened && (
        <Options>
          {items.map((option: iSelectOption) => (
            <Option
              fontSize={fontSize ? fontSize : "XS"}
              tabIndex={0}
              onClick={() => handleSelectOption(option)}
              onKeyPress={(event: KeyboardEvent) =>
                handleKeyPressOnOption(event, option)
              }
            >
              {option.label || option.value}
            </Option>
          ))}
        </Options>
      )}

      {helperText && <HelperText>{helperText}</HelperText>}
    </Wrapper>
  );
};
