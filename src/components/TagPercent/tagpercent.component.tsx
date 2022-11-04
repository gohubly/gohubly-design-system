import React, { useEffect, useState } from "react";
import { Flex } from "rebass";
import { ITagPercent, ITagPercentStatus } from ".";
import { theme } from "../../theme";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { Tag as StyledTag } from "./tagpercent.style";

export const TagPercent: React.FC<ITagPercent> = ({ children, ...props }) => {
  const [isGrowth, setIsGrowth] = useState(false);
  const [status, setStatus] = useState<ITagPercentStatus>("alert");

  useEffect(() => {
    if (props.value >= 0) {
      setIsGrowth(true);
      setStatus("success");
    } else {
      setIsGrowth(false);
      setStatus("alert");
    }
  }, [props.value]);

  return (
    <StyledTag {...props} status={status}>
      <Flex
        width="16px"
        height="16px"
        backgroundColor={
          isGrowth ? theme.colors.successDark : theme.colors.helperDark
        }
        justifyContent="center"
        alignItems="center"
        style={{ borderRadius: "50%" }}
      >
        <Icon size="XXS" iconId={isGrowth ? "chevronUp" : "chevronDown"} />
      </Flex>
      <Typography size="XXXS"  color={isGrowth ? "successDark" : "helperDark"}>
        {`${isGrowth ? "CRESCEU" : "CAIU"} ${props.value.toFixed(1)}%`}
      </Typography>
    </StyledTag>
  );
};
