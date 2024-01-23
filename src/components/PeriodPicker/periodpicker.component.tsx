import React, { useEffect, useMemo, useState } from "react";
import moment, { Moment } from "moment";
import {
  Container,
  Month,
  MonthApresentation,
  DayNumber,
  DayName,
  MonthsContainer,
  MonthWeeks,
  Week,
  PreviousButtonContainer,
  NextButtonContainer,
  Footer,
  HelperContainer,
  PeriodCallout,
  ButtonContainer,
} from "./periodpicker.style";
import { iCalendar } from ".";
import { Button, Icon, Typography } from "..";
import { IPeriodPicker } from "./periodpicker.interface";

import { Flex } from "rebass";

export const PeriodPicker: React.FC<IPeriodPicker> = ({
  width,
  onChange,
  onReset,
  containerRef,
  count = 3,
  limit,
  isMobile = false,
  oneDateOnly,
  paddingButtonContainer,
  sizeButtons,
  positionButtons,
  fluidButton = true,
  shapeSelected,
  containerBorderRadius,
  period,
  ...props
}) => {
  const [centralDate, setCentralDate] = useState(moment());

  const [initialDate, setInitialDate] = useState<Moment | null>(null);
  const [finalDate, setFinalDate] = useState<Moment | null>(null);

  const [isSelectInitialDate, setSelectIsInitialDate] = useState(true);

  useEffect(() => {
    if (period && period.finalDate && period.initialDate) {
      setInitialDate(period?.initialDate);
      setFinalDate(period?.finalDate);
    }
  }, [period]);

  const exibitionMonths = useMemo(() => {
    const months = [
      ...(count > 1
        ? Array(count - 1)
            .fill(0)
            .map((_, idx) => {
              console.log(centralDate.clone(), idx + 1);
              return centralDate.clone().subtract(idx + 1, "months");
            })
        : []
      ).reverse(),
      centralDate,
    ];

    return months;
  }, [centralDate, count]);

  const getCalendarByMomentDate = (date: Moment): iCalendar => {
    const calendar = [];
    const startDay = date.clone().startOf("month").startOf("week");
    const endDay = date.clone().endOf("month").endOf("week");

    let day = startDay.clone().subtract(1, "day");

    while (day.isBefore(endDay, "day")) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone()),
      });
    }

    return calendar;
  };

  const handleClickNextMonth = () => {
    setCentralDate((preValue) => preValue.clone().add(1, "months"));
  };

  const handleClickPreviousMonth = () => {
    setCentralDate((preValue) => preValue.clone().subtract(1, "months"));
  };

  const isBlockedEndDate = useMemo(() => {
    if (limit) {
      const { endDate } = limit;

      if (endDate) {
        return !moment(centralDate)
          .utc()
          .isBefore(moment(endDate).utc(), "month");
      }
    }

    return false;
  }, [limit, centralDate]);

  const isBlockedInitialDate = useMemo(() => {
    if (limit) {
      const { initialDate } = limit;

      if (initialDate) {
        return moment(centralDate)
          .utc()
          .isSame(moment(initialDate).utc(), "day");
      }
    }

    return false;
  }, [limit, centralDate]);

  const handleClickDay = (day: Moment) => {
    if (oneDateOnly) {
      setInitialDate(day);
      setFinalDate(day);
      setSelectIsInitialDate(false);
      return;
    }

    if (!finalDate) {
      if (!initialDate) {
        setInitialDate(day);
        setSelectIsInitialDate(false);
        return;
      }

      if (day.isBefore(initialDate)) {
        // invert dates
        setFinalDate(initialDate);
        setInitialDate(day);
      } else {
        setFinalDate(day);
      }
      setSelectIsInitialDate(true);
      return;
    }

    if (isSelectInitialDate) {
      if (day.isSameOrAfter(finalDate)) {
        handleClickReset();
        setInitialDate(day);
        setSelectIsInitialDate(false);
      } else {
        setInitialDate(day);
        setSelectIsInitialDate(false);
      }
    } else {
      if (day.isSameOrBefore(initialDate)) {
        handleClickReset();
        setFinalDate(day);
      } else {
        setFinalDate(day);
        setSelectIsInitialDate(true);
      }
    }
  };

  const handleClickReset = () => {
    setInitialDate(null);
    setFinalDate(null);
    setSelectIsInitialDate(true);
    setCentralDate(moment());
    if (onReset) onReset();
  };

  const handleClickSubmit = () => {
    if (initialDate && finalDate) onChange({ initialDate, finalDate });
  };

  return (
    <Container
      ref={containerRef}
      style={{ ...(width && { width }) }}
      containerBorderRadius={containerBorderRadius}
    >
      <PreviousButtonContainer
        onClick={isBlockedInitialDate ? () => {} : handleClickPreviousMonth}
        disabled={isBlockedInitialDate}
      >
        <Icon iconId={"chevronLeft"} size="MD" />
      </PreviousButtonContainer>

      <NextButtonContainer
        onClick={isBlockedEndDate ? () => {} : handleClickNextMonth}
        disabled={isBlockedEndDate}
      >
        <Icon iconId={"chevronRight"} size="MD" />
      </NextButtonContainer>

      <MonthsContainer count={count}>
        {exibitionMonths.map((month, index) => {
          return (
            <Month
              key={month.toDate().getTime()}
              hasNext={index < exibitionMonths.length - 1}
              mobile={isMobile}
            >
              <MonthApresentation>
                {month.format("MMMM YYYY")}
              </MonthApresentation>

              <MonthWeeks>
                <Week mobile={isMobile}>
                  {moment.weekdays().map((item) => (
                    <DayName>
                      {item[0].toUpperCase() + item.slice(1, 3)}
                    </DayName>
                  ))}
                </Week>

                {getCalendarByMomentDate(month).map((week) => (
                  <Week mobile={isMobile}>
                    {week.days.map((day) => {
                      if (limit?.initialDate) {
                        if (
                          !day.isSame(month, "month") ||
                          day.isBefore(limit?.initialDate, "day")
                        )
                          return (
                            <DayNumber onClick={() => {}} disabled>
                              <span>{day.format("D")}</span>
                            </DayNumber>
                          );
                      } else {
                        if (!day.isSame(month, "month"))
                          return (
                            <DayNumber onClick={() => {}} disabled>
                              <span>{day.format("D")}</span>
                            </DayNumber>
                          );
                      }

                      const isBetween = day.isBetween(
                        initialDate,
                        finalDate,
                        "day"
                      );
                      const isInitialDate = day.isSame(initialDate, "day");
                      const isSelected =
                        day.isSame(initialDate, "day") ||
                        day.isSame(finalDate, "day");
                      const isTotalSelected = !!(initialDate && finalDate);
                      const isTotalSelectedAndDatesAreDifferents =
                        isTotalSelected &&
                        !initialDate.isSame(finalDate, "day");

                      return (
                        <DayNumber
                          onClick={() => handleClickDay(day)}
                          isBetween={isBetween}
                          isSelected={isSelected}
                          isInitialDate={isInitialDate}
                          isTotalSelected={isTotalSelectedAndDatesAreDifferents}
                          shapeSelected={shapeSelected}
                        >
                          <span>{day.format("D")}</span>
                        </DayNumber>
                      );
                    })}
                  </Week>
                ))}
              </MonthWeeks>
            </Month>
          );
        })}
      </MonthsContainer>

      <Footer
        onlyOne={count === 1}
        paddingButtonContainer={paddingButtonContainer}
      >
        {(initialDate || finalDate) && !oneDateOnly && (
          <HelperContainer>
            <PeriodCallout>Você selecionou</PeriodCallout>

            <Flex style={{ gap: "5px" }}>
              {initialDate && (
                <Typography
                  color="neutralLow"
                  size="XXXS"
                  lineHeight="MD"
                  fontWeight={600}
                >
                  {initialDate.format("DD/MM/YYYY")}
                </Typography>
              )}

              {finalDate && (
                <Flex style={{ gap: "5px" }} alignItems="center">
                  <Icon
                    iconId="arrowRigth"
                    size="XXXS"
                    stroke="neutralLow"
                    strokeWidth={2.25}
                  />
                  <Typography
                    color="neutralLow"
                    size="XXXS"
                    lineHeight="MD"
                    fontWeight={600}
                  >
                    {finalDate.format("DD/MM/YYYY")}
                  </Typography>
                </Flex>
              )}
            </Flex>
          </HelperContainer>
        )}

        <ButtonContainer positionButtons={positionButtons}>
          <Button
            disabled={!initialDate || !finalDate}
            hierarchy="secondary"
            onClick={handleClickReset}
            fluid={fluidButton}
            size={sizeButtons ? sizeButtons : isMobile ? "SM" : "MD"}
          >
            Redefinir
          </Button>
          <Button
            disabled={!initialDate || !finalDate}
            onClick={handleClickSubmit}
            fluid={fluidButton}
            size={sizeButtons ? sizeButtons : isMobile ? "SM" : "MD"}
          >
            Aplicar
          </Button>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};
