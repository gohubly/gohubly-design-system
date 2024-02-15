import React from "react";
import { iTabs } from ".";
import { TabItem, Wrapper } from "./tabs.style";

export const Tabs: React.FC<iTabs> = ({
  items,
  onSelect,
  selected,
  direction = "horizontal",
  isDesktop = true,
  className,
  isActiveClassName,
}) => {
  return (
    <Wrapper direction={direction}>
      {items.map((tabName, index) => {
        const isTabSelected = index === selected;

        return (
          <TabItem
            key={index}
            selected={isTabSelected}
            className={`ds-tab-item ${
              isTabSelected ? `ds-tab-item--selected ${isActiveClassName}` : ""
            } ${className}`}
            onClick={() => {
              onSelect(index);
            }}
            isDesktop={isDesktop}
            direction={direction}
          >
            {tabName}
          </TabItem>
        );
      })}
    </Wrapper>
  );
};
