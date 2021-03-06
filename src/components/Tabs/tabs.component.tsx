import React from 'react';
import { iTabs } from '.';
import { TabItem, Wrapper } from './tabs.style';

export const Tabs: React.FC<iTabs> = ({ items, onSelect, selected, direction = 'horizontal' }) => {
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
          >
            {tabName}
          </TabItem>
        );
      })}
    </Wrapper>
  );
};
