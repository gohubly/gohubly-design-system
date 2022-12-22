import React, { useMemo, useState } from 'react';
import moment, { Moment } from 'moment';

import { iPeriodPicker } from './periodpicker.interface';
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
} from './periodpicker.style';
import { iCalendar } from '.';
import { Button, Icon } from '..';

import 'moment/locale/pt-br';
moment.locale('pt-br');

export const PeriodPicker: React.FC<iPeriodPicker> = ({ onChange, onReset, containerRef, ...props }) => {
  const [centralDate, setCentralDate] = useState(moment());
  const [initialDate, setInitialDate] = useState<Moment | null>(null);
  const [finalDate, setFinalDate] = useState<Moment | null>(null);

  const [isSelectInitialDate, setSelectIsInitialDate] = useState(true);

  const exibitionMonths = useMemo(() => {
    const firstMonth = centralDate.clone().subtract(1, 'months');
    const lastMonth = centralDate.clone().add(1, 'months');

    return [firstMonth, centralDate, lastMonth];
  }, [centralDate]);

  const getCalendarByMomentDate = (date: Moment): iCalendar => {
    const calendar = [];
    const startDay = date.clone().startOf('month').startOf('week');
    const endDay = date.clone().endOf('month').endOf('week');

    let day = startDay.clone().subtract(1, 'day');

    while (day.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone()),
      });
    }

    return calendar;
  };

  const handleClickNextMonth = () => {
    setCentralDate((preValue) => preValue.clone().add(1, 'months'));
  };

  const handleClickPreviousMonth = () => {
    setCentralDate((preValue) => preValue.clone().subtract(1, 'months'));
  };

  const handleClickDay = (day: Moment) => {

    if(!finalDate) {
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
    setCentralDate(moment())
    if (onReset) onReset()
  };

  const handleClickSubmit = () => {
    if (initialDate && finalDate) onChange({ initialDate, finalDate });
  };

  return (
    <Container ref={containerRef}>
      <PreviousButtonContainer onClick={handleClickPreviousMonth}>
        <Icon iconId={'chevronLeft'} size="SM" />
      </PreviousButtonContainer>
      <NextButtonContainer onClick={handleClickNextMonth}>
        <Icon iconId={'chevronRight'} size="SM" />
      </NextButtonContainer>

      <MonthsContainer>
        {exibitionMonths.map((month) => {
          return (
            <Month key={month.toDate().getTime()}>
              <MonthApresentation>{month.format('MMMM / YYYY')}</MonthApresentation>

              <MonthWeeks>
                <Week>
                  {moment.weekdays().map((item) => (
                    <DayName>{item[0].toUpperCase()}</DayName>
                  ))}
                </Week>
                {getCalendarByMomentDate(month).map((week) => (
                  <Week>
                    {week.days.map((day) => {
                      if (!day.isSame(month, 'month')) return <div></div>

                      const isBetween = day.isBetween(initialDate, finalDate);
                      const isInitialDate = day.isSame(initialDate);
                      const isSelected = day.isSame(initialDate) || day.isSame(finalDate);
                      const isTotalSelected = !!(initialDate && finalDate);
                      const isTotalSelectedAndDatesAreDifferents = isTotalSelected && !initialDate.isSame(finalDate);

                      return (
                        <DayNumber 
                          onClick={() => handleClickDay(day)} 
                          isBetween={isBetween} 
                          isSelected={isSelected} 
                          isInitialDate={isInitialDate} 
                          isTotalSelected={isTotalSelectedAndDatesAreDifferents}
                        >
                          <span>{day.format('DD')}</span>
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

      <Footer>
        <HelperContainer>
          {(initialDate === null || finalDate === null) && `Selecione a data ${isSelectInitialDate ? 'inicial' : 'final'}`}
          {initialDate && finalDate && (
            <PeriodCallout>
              Período selecionado: {initialDate.format('DD/MM/YYYY')} a {finalDate.format('DD/MM/YYYY')}
            </PeriodCallout>
          )}
        </HelperContainer>

        <Button hierarchy="ghost" onClick={handleClickReset}>
          Redefinir
        </Button>
        <Button disabled={!initialDate || !finalDate} onClick={handleClickSubmit}>
          Aplicar Período
        </Button>
      </Footer>
    </Container>
  );
};
