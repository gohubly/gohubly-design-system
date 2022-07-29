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
  type = 'text',
  iconSize,
  ...props
}) => {
  const [opened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(selected);
  const selectRef = useRef(null);

  useClickOutside(() => {
    setOpened(false);
  }, [selectRef, setOpened]);

  const handleToggleSelect = () => {
    setOpened(!disabled && !opened);
  };

  const handleSelectOption = (selectedOption: iSelectOption) => {
    setSelectedItem(selectedOption);
    onSelect && onSelect(selectedOption);
    setOpened(false);
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
        type={type}
      >
        {icon && <Icon iconId={icon} size={iconSize} />}
        <Placeholder fontSize={fontSize}>
          {selectedItem?.label || selected?.value || placeholder}
        </Placeholder>
        <OpenIcon iconId="chevronDown" opened={!disabled && opened} disabled={disabled}/>
      </SelectStyled>

      {!disabled && opened && items && (
        <Options>
          {items.map((option: iSelectOption) => (
            <Option
              key={option.value}
              type={type}
              fontSize={fontSize}
              tabIndex={0}
              onClick={() => handleSelectOption(option)}
              onKeyPress={(event: KeyboardEvent) =>
                handleKeyPressOnOption(event, option)
              }
              itemSelect={selectedItem !== undefined && selectedItem.value === option?.value}
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
