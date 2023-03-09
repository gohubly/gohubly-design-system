import React from "react";
import { iTag } from ".";
import { Icon, iIconTypes } from "../Icon";
import { IconTag, Tag as StyledTag } from "./tag.style";

export const Tag: React.FC<iTag> = ({ children, icon, ...props }) => {
  return (
    <StyledTag {...props} icon={icon}>
      {icon && (
        <IconTag hierarchy={props?.hierarchy}>
          <Icon iconId={icon} size="XS" />
        </IconTag>
      )}
      {children}
    </StyledTag>
  );
};
