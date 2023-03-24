import React from "react";
import { Flex } from "rebass";
import { ITabsV2 } from ".";
import { Icon } from "../../Icon";
import { TabItem, Wrapper } from "./tabs.style";

export const TabsV2: React.FC<ITabsV2> = ({
  items,
  onSelect,
  selected,
  direction = "horizontal",
  isDesktop = true,
  iconItems,
  strokeWidth,
}) => {
  return (
    <Wrapper direction={direction}>
      {items.map((tabName, index) => {
        const isTabSelected = index === selected;

        return (
          <TabItem
            key={index}
            selected={isTabSelected}
            onClick={() => {
              onSelect(index);
            }}
            isDesktop={isDesktop}
            direction={direction}
          >
            {iconItems &&
              iconItems.map((icon, idx) => {
                if (idx === index)
                  return (
                    <Icon
                      iconId={icon}
                      size={isDesktop ? "SM" : "XS"}
                      strokeWidth={strokeWidth ?? 2}
                      stroke="neutralLow"
                      fill="transparent"
                    />
                  );
              })}

            {tabName}
          </TabItem>
        );
      })}
    </Wrapper>
  );
};
