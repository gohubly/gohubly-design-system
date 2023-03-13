import React from "react";
import { IAppTab } from ".";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { StepWrapper, StyledIcon, TabItem, Wrapper } from "./tabs.style";

export const AppTab: React.FC<IAppTab> = ({
  items,
  onSelect,
  selected,
  isDesktop = true,
}) => {
  return (
    <Wrapper>
      {items.map((tabName, index) => {
        const isTabSelected = index === selected;
        const hasNextStep = index + 1 < items.length;
        const isStepCompleted = selected > index;

        return (
          <TabItem
            key={index}
            selected={isTabSelected}
            isDesktop={isDesktop}
            isStepCompleted={isStepCompleted}
          >
            <StepWrapper
              key={`step-wrapper-${index}`}
              selected={isTabSelected}
              isStepCompleted={isStepCompleted}
            >
              {isStepCompleted ? (
                <Icon iconId="check" size="XXXS" />
              ) : (
                <Typography
                  color={isTabSelected ? "primaryMedium" : "neutralLowLight"}
                  size="XXXS"
                  lineHeight="MD"
                  fontWeight={900}
                >
                  {index + 1}
                </Typography>
              )}
            </StepWrapper>
            {tabName}

            {hasNextStep && (
              <StyledIcon>
                <svg
                  width="28"
                  height="4"
                  viewBox="0 0 28 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    fill="#142159"
                    fill-opacity="0.3"
                  />
                  <circle
                    cx="14"
                    cy="2"
                    r="2"
                    fill="#142159"
                    fill-opacity="0.3"
                  />
                  <circle
                    cx="26"
                    cy="2"
                    r="2"
                    fill="#142159"
                    fill-opacity="0.3"
                  />
                </svg>
              </StyledIcon>
            )}
          </TabItem>
        );
      })}
    </Wrapper>
  );
};
