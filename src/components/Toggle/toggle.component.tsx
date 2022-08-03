import React, { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { IToggle } from "./toggle.interface";
import { Container, ToggleStyled } from "./toggle.style";

export const Toggle: React.FC<IToggle> = (props) => {
  const [checked, setChecked] = useState(props.checked ?? false);

  const handleKeyPress = () => {
    if (props.disabled) return;
    setChecked(!checked);
  };

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  useEffect(() => {
    console.log("checked", checked);
    props.onChange(checked);
  }, [checked]);

  return (
    <Container active={checked} onClick={handleKeyPress} disabled={props.disabled} error={!!props?.error}>
      <input
        type="checkbox"
        name={props.id}
        className="checkbox"
        id={props.id}
        checked={checked}
        onChange={handleKeyPress}
        disabled={props.disabled}
        data-has-error={!!props?.error}
        // tabIndex={props.disabled ? -1 : 1}
        //TODO: fix focus
      />
      <ToggleStyled
        className="label"
        active={checked}
        disabled={props.disabled}
        error={!!props?.error}
      >
        {!props.disabled && <Icon iconId={!!props?.error ? "close" : "check"} size="XXXS" />}
      </ToggleStyled>
    </Container>
  );
};
