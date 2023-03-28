import React, { KeyboardEvent, useRef, useState } from "react";
import { iSelect, iSelectOption } from ".";
import { Icon, Typography } from "../..";
import { useClickOutside } from "../../..";
import {
  Wrapper,
  SelectStyled,
  Placeholder,
  Options,
  Option,
  OpenIcon,
  HelperText,
} from "./select.style";

export const SelectV2: React.FC<iSelect> = ({
  placeholder,
  items,
  disabled,
  error,
  helperText,
  selected,
  onSelect,
  width,
  height,
  fontSize = "XS",
  type = "text",
  iconRight,
  iconLeft,
  iconSizeLeft,
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
        {iconLeft && <Icon iconId={iconLeft} size={iconSizeLeft} />}
        <Placeholder fontSize={fontSize}>
          <Typography size={fontSize} color="neutralLowDark" fontWeight={300}>
            {selectedItem?.label || selected?.value || placeholder}
          </Typography>
        </Placeholder>
        <OpenIcon
          iconId={opened ? "chevronUp" : iconRight ?? "chevronDown"}
          opened={!disabled && opened}
          disabled={disabled}
        />
      </SelectStyled>

      {!disabled && opened && items && (
        <Options>
          {items.map((option: iSelectOption) => (
            <Option
              key={option.value}
              height={height}
              type={type}
              fontSize={fontSize}
              tabIndex={0}
              onClick={() => handleSelectOption(option)}
              onKeyPress={(event: KeyboardEvent) =>
                handleKeyPressOnOption(event, option)
              }
              itemSelect={
                selectedItem !== undefined &&
                selectedItem.value === option?.value
              }
            >
              <Typography
                size={fontSize}
                color="neutralLowDark"
                fontWeight={300}
              >
                {option.label || option.value}
              </Typography>
            </Option>
          ))}
        </Options>
      )}

      {helperText && <HelperText hasError={error}>{helperText}</HelperText>}
    </Wrapper>
  );
};
