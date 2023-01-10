import React from "react";
import { Box, Flex } from "rebass";
import { Button } from "../../Button";
import { Icon } from "../../Icon";
import { Typography } from "../../Typography";
import { iExpandableItem } from "./expandable-item.types";
import * as css from "./expandable-item.styles";
import { Avatar } from "../../Avatar";

export const ExpandableItemV2: React.FC<iExpandableItem> = ({
  title,
  minWidth = "300px",
  data,
  itemRight,
  onItemClick,
  expanded,
  onExpandClick,
  buttonsProps = [],
  children,
  avatar,
  containerLeftMaxWidth,
}): JSX.Element => {
  return (
    <css.Container minWidth={minWidth}>
      <css.ContainerList notAvatar={!avatar} expanded={expanded}>
        <css.ContainerLeft containerLeftMaxWidth={containerLeftMaxWidth}>
          {avatar && <Avatar size="XS" name={title} twoLetter />}
          <css.ContainerTitle>
            <Typography
              size={avatar ? "XXXS" : "XXS"}
              lineHeight={avatar ? "MD" : "LG"}
              fontWeight={avatar ? 500 : 400}
              color="neutralLowDark"
            >
              {title}
            </Typography>
          </css.ContainerTitle>
        </css.ContainerLeft>

        <css.ContainerRight avatar={avatar}>
          <Typography
            size={avatar ? "XXXS" : "XXS"}
            lineHeight={avatar ? "MD" : "LG"}
            fontWeight={avatar ? 500 : 400}
            color="neutralLowDark"
          >
            {itemRight}
          </Typography>

          <Icon
            iconId={expanded ? "chevronUp" : "chevronDown"}
            gray
            size="SM"
            onClick={onExpandClick}
          />
        </css.ContainerRight>
      </css.ContainerList>

      {expanded && (
        <Flex width="100%" justifyContent="center">
          <Flex className="item" width="100%" paddingBottom="8px">
            <Flex
              flexDirection="column"
              width="100%"
              justifyContent="space-between"
            >
              <Flex flexDirection="column">
                {data.map(({ label, value }) => (
                  <css.Item avatar={avatar}>
                    <Typography
                      size="XXXS"
                      lineHeight="MD"
                      fontWeight={400}
                      color="neutralLow"
                    >
                      {label}
                    </Typography>

                    <Typography
                      size="XXXS"
                      lineHeight="MD"
                      fontWeight={400}
                      color="neutralLowDark"
                    >
                      {value}
                    </Typography>
                  </css.Item>
                ))}
              </Flex>

              {children && <Box pt="8px">{children}</Box>}

              {buttonsProps && buttonsProps.length > 0 && (
                <Flex
                  justifyContent="space-between"
                  flex="1 1 0px"
                  marginTop="20px"
                  style={{ ...(buttonsProps.length > 1 && { gap: "8px" }) }}
                >
                  {buttonsProps.map((props, index) => (
                    <Button {...props} size="SM" fluid>
                      <Typography
                        size="XXXS"
                        lineHeight="LG"
                        color={index !== 0 ? "primary" : "white"}
                      >
                        {props.children}
                      </Typography>
                    </Button>
                  ))}
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>
      )}
    </css.Container>
  );
};

export default ExpandableItemV2;
