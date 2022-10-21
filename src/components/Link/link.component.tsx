import React from "react";

import { iLink } from ".";
import { Icon } from "../Icon";
import { Link as StyledLink, Wrapper } from "./link.style";

export const Link: React.FC<iLink> = ({
  children,
  onClick,
  OnColor,
  disabled,
  icon,
  underline,
  size,
  iconSize,
}) => {
  const handleClick = () => {
    if (disabled) return;
    onClick && onClick();
  };

  return (
    <Wrapper
      size={size}
      onClick={handleClick}
      OnColor={OnColor}
      data-disabled={disabled}
      underline={underline}
    >
      <StyledLink>{children}</StyledLink>

      <Icon size={iconSize} iconId={icon} OnColor={OnColor} />
    </Wrapper>
  );
};
