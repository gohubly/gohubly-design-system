import React, { useEffect } from "react";
import { iAvatar } from ".";
import { Wrapper, Badge } from "./avatar.style";

export const Avatar: React.FC<iAvatar> = ({
  badge,
  name,
  image,
  OnColor,
  size = "MD",
  twoLetter = false,
}) => {
  const props = {
    badge,
    image,
    OnColor,
    size,
    twoLetter,
  };

  const CompleteName = (name: string) => {
    if (twoLetter) {
      let separateName;
      separateName = name.split(" ");
      if (separateName.length > 1) {
        return (
          separateName[0].charAt(0).toUpperCase() +
          separateName[separateName.length - 1].charAt(0).toUpperCase()
        );
      } else return name.charAt(0).toUpperCase();
    } else return name.charAt(0).toUpperCase();
  };

  return (
    <Wrapper {...props}>
      {name && <div>{CompleteName(name)}</div>}
      {badge && <Badge />}
    </Wrapper>
  );
};
