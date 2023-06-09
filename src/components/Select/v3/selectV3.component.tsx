import React, { KeyboardEvent, useRef, useState } from "react";
import { ISelect, ISelectOption } from ".";
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
} from "./selectV3.style";
import { Flex } from "rebass";

export const SelectV3: React.FC<ISelect> = ({
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
  iconSizeRight,
  heightOptions,
  styledLabel,
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

  const handleSelectOption = (selectedOption: ISelectOption) => {
    setSelectedItem(selectedOption);
    onSelect && onSelect(selectedOption);
    setOpened(false);
  };

  const handleKeyPressOnSelect = ({ key }: KeyboardEvent) => {
    setOpened(key === "Enter");
  };

  const handleKeyPressOnOption = (
    { key }: KeyboardEvent,
    selectedOption: ISelectOption
  ) => {
    if (key === "Enter") handleSelectOption(selectedOption);
  };

  return (
    <Wrapper {...props} ref={selectRef} width={width}>
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
          {styledLabel ? (
            <Typography
              size={fontSize}
              color="textNeutralDefault"
              fontWeight={300}
            >
              {styledLabel}
            </Typography>
          ) : (
            <Typography
              size={fontSize}
              color="textNeutralDefault"
              fontWeight={300}
            >
              {selectedItem?.label || selected?.value || placeholder}
            </Typography>
          )}
        </Placeholder>

        <OpenIcon
          iconId={opened ? "chevronUp" : iconRight ?? "chevronDown"}
          opened={!disabled && opened}
          disabled={disabled}
          size={iconSizeRight ?? "XS"}
        />
      </SelectStyled>

      {!disabled && opened && items && (
        <Options>
          {items.map((option: ISelectOption) => (
            <Option
              key={option.value}
              heightOptions={heightOptions}
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
              <Flex
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  size={fontSize}
                  color={
                    selectedItem !== undefined &&
                    selectedItem.value === option?.value
                      ? "textNeutralDefault"
                      : "textNeutralSubtlest"
                  }
                  fontWeight={300}
                >
                  {option.label || option.value}
                </Typography>

                {selectedItem !== undefined &&
                  selectedItem.value === option?.value && (
                    <Icon
                      iconId="check"
                      stroke="iconDefault"
                      size="XS"
                      strokeWidth={2.3}
                    />
                  )}
              </Flex>
            </Option>
          ))}
        </Options>
      )}

      {helperText && <HelperText hasError={error}>{helperText}</HelperText>}
    </Wrapper>
  );
};
