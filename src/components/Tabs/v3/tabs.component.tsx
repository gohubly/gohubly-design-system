import React from 'react';
import { ITabsV3 } from '.';
import { TabItem, Wrapper } from './tabs.style';

export const TabsV3: React.FC<ITabsV3> = ({ items, onSelect, selected, direction = 'horizontal', isDesktop = true }) => {
  return (
    <Wrapper direction={direction}>
      {items.map((tabName, index) => {
        const isTabSelected = index === selected;

        return (
          <TabItem
            key={index}
            selected={isTabSelected}
            className={`ds-tab-item ${isTabSelected ? 'ds-tab-item--selected' : ''}`}
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
