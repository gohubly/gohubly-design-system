import React, { useEffect, useRef, useState } from "react";
import { Flex } from "rebass";
import {
  Label,
  LabelText,
  HelperText,
  LinkText,
  StyledTextarea,
  CharCount,
  ContainerTextArea,
} from "./textarea.style";
import { ITextArea } from "./textarea.interface";

export const TextArea: React.FC<ITextArea> = ({ ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [textValue, setTextValue] = useState(
    props.value || props.defaultValue || ""
  );

  const hasError =
    typeof textValue === "string" && props.maxCharacters
      ? textValue.length === props.maxCharacters
      : false;

  useEffect(() => {
    setTextValue(props.value ?? "");
  }, [props.value]);

  useEffect(() => {
    textareaRef?.current?.focus();
  }, []);

  const handleChangeTextArea = (event: any) => {
    const newValue = event.target.value;

    if (props.maxCharacters) {
      if (newValue.length <= props.maxCharacters) {
        setTextValue(newValue);
      } else {
        event.preventDefault();
      }
    } else {
      setTextValue(newValue);
    }
  };

  useEffect(() => {
    const handleBlur = (event: any) => {
      const newValue = event.target.value;

      if (props.textAreaOnBlur) {
        props.textAreaOnBlur(newValue);
      }
    };

    textareaRef?.current?.addEventListener("blur", handleBlur);

    return () => {
      textareaRef?.current?.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <Label
      htmlFor={props?.name}
      data-has-error={props?.error}
      fluid={props.fluid}
      gapLabel={props.gapLabel}
    >
      {/* Label an link */}
      {props?.label && (
        <Flex justifyContent="space-between" alignItems="center">
          <LabelText
            labelFontSize={props.labelFontSize}
            labelLineHeight={props.labelLineHeight}
            labelFontWeight={props.labelFontWeight}
            OnColor={props.OnColor}
            disabled={props.disabled}
          >
            {props.label}
          </LabelText>

          {props?.link && (
            <LinkText
              onClick={props.linkOnClick}
              linkFontSize={props.linkFontSize}
              linkLineHeight={props.linkLineHeight}
              data-has-error={props?.error}
              OnColor={props.OnColor}
              disabled={props.disabled}
            >
              {props.link}
            </LinkText>
          )}
        </Flex>
      )}

      <Flex flexDirection="column" style={{ gap: props.helpTextGap ?? "8px" }}>
        {/* Text Area */}
        <ContainerTextArea>
          <StyledTextarea
            ref={textareaRef}
            id={props?.name}
            name={props?.name}
            value={textValue}
            onChange={handleChangeTextArea}
            rows={props.rows}
            fluid={props.fluid}
            fontSize={props.fontSize}
            lineHeight={props.lineHeight}
            textAreaHeight={props.textAreaHeight}
            placeholder={props.placeholder ?? ""}
            fontWeight={props.fontWeight}
            backgroundTextArea={props.backgroundTextArea}
          ></StyledTextarea>

          {props.maxCharacters && typeof textValue === "string" && (
            <CharCount
              hasError={hasError}
              position={props.maxCharactersPosition}
            >
              {textValue.length}/{props.maxCharacters} caracteres
            </CharCount>
          )}
        </ContainerTextArea>

        {/* Helper text */}
        {props?.helperText && (
          <HelperText
            onClick={props.helperTextOnClick}
            helperTextFontSize={props.helperTextFontSize}
            helperTextLineHeight={props.helperTextLineHeight}
            data-has-error={props?.error}
            OnColor={props.OnColor}
            disabled={props.disabled}
          >
            {props.helperText}
          </HelperText>
        )}
      </Flex>
    </Label>
  );
};
