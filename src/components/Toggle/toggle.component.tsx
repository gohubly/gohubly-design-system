import React, { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { IToggle } from "./toggle.interface";
import { Container, ToggleStyled } from "./toggle.style";

export const Toggle: React.FC<IToggle> = ({
  id,
  active: activeProps,
  disabled = false,
  onClick,
  error = false,
}: IToggle) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!!activeProps);
  }, [activeProps]);

  const handleClick = (): void => {
    if (disabled) return;

    if (onClick) {
      if (!isActive) {
        setIsActive(true);
        onClick(true);
      } else {
        setIsActive(false);
        onClick(false);
      }
    }
  };

  return (
    <Container
      active={isActive}
      onClick={handleClick}
      disabled={disabled}
      error={!!error}
    >
      <input
        type="checkbox"
        name={id}
        className="checkbox"
        id={id}
        checked={isActive}
        onChange={handleClick}
        disabled={disabled}
        data-has-error={error}
        // tabIndex={props.disabled ? -1 : 1}
        //TODO: fix focus
      />
      <ToggleStyled
        className="label"
        active={isActive}
        disabled={disabled}
        error={error}
      >
        {!disabled && <Icon iconId={error ? "close" : "check"} size="XXXS" />}
      </ToggleStyled>
    </Container>
  );
};
