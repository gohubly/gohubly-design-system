import React from "react";

import { iButton } from ".";
import {
  Button as StyledButton,
  ButtonSpinnerContainer,
  ContentContainer,
  IconStyled,
} from "./button.style";
import { Spinner } from "../Spinner";

export const Button: React.FC<iButton> = ({
  children,
  disabled,
  hierarchy = "primary",
  size = "MD",
  radius = "SM",
  error,
  loading,
  icon,
  // iconSize,
  OnColor,
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled || loading}
      loading={loading}
      hierarchy={hierarchy}
      data-has-error={error}
      size={size}
      radius={radius}
      OnColor={OnColor}
      {...props}
    >
      {icon && (
        <IconStyled
          size='SM'
          iconId={icon}
          hierarchy={hierarchy}
          OnColor={OnColor}
          loading={loading}
          sizeProps={size}
        />
      )}
      <ContentContainer loading={loading}>{children}</ContentContainer>
      {loading && (
        <ButtonSpinnerContainer>
          <Spinner size="100%" onColor={OnColor} />
        </ButtonSpinnerContainer>
      )}
    </StyledButton>
  );
};
