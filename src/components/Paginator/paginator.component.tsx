import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { Icon } from "..";
import { iPaginator } from "./paginator.interface";
import {
  ButtonPrevNext,
  Container,
  Itens,
  More,
  Number,
} from "./paginator.style";

export const Paginator: React.FC<iPaginator> = (props: iPaginator) => {
  const [currentPage, setCurrentPage] = useState(props?.currentPage ?? 0);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);
  const [visibleNumbers, setVisibleNumbers] = useState<number[]>();
  const [showCollapsedFew, setShowCollapsedFew] = useState<boolean>(false);
  const [showCollapsedMore, setShowCollapsedMore] = useState<boolean>(false);

  const groupAt = !props.groupAt || props.groupAt === 0 ? 3 : props.groupAt;

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setDisabledPrev(false);
    }
  };

  const nextPage = () => {
    if (currentPage < props.length) {
      setCurrentPage(currentPage + 1);
      setDisabledPrev(false);
    }
  };

  const enableDisable = () => {
    if (currentPage === 0 && props.length === 1) {
      setDisabledPrev(true);
      setDisabledNext(true);
    } else if (currentPage === 0 && props.length > 1) {
      setDisabledPrev(true);
      setDisabledNext(false);
    } else if (currentPage === props.length - 1) {
      setDisabledNext(true);
      setDisabledPrev(false);
    } else {
      setDisabledPrev(false);
      setDisabledNext(false);
    }
    if (props.disableNextPage && !disabledNext) {
      setDisabledNext(true);
    }
  };

  const loadVisibleNumbers = () => {
    let numbers: any = [];

    if (
      groupAt &&
      groupAt !== 0 &&
      groupAt >= 3 &&
      groupAt < props.length &&
      props.length - groupAt > 4
    ) {
      if (currentPage < groupAt) {
        // first part of pager
        for (let i = 0; i < groupAt; i++) {
          numbers.push(i);
        }
        if (numbers[numbers.length - 1] < props.length) {
          setShowCollapsedMore(true);
        } else {
          setShowCollapsedMore(false);
        }
        setShowCollapsedFew(false);
      }

      // middle part of pager
      if (currentPage >= groupAt && currentPage < props.length - groupAt) {
        let counter = 0;

        for (let i = currentPage - 1; i < currentPage + groupAt - 1; i++) {
          if (i > 0 && i < props.length - 1) {
            numbers.push(i);
            counter++;
          }
        }
        setShowCollapsedMore(true);
        setShowCollapsedFew(true);
      }

      // end part of pager
      if (
        currentPage > props.length - groupAt ||
        currentPage === props.length - groupAt
      ) {
        for (let i = props.length - groupAt; i < props.length; i++) {
          numbers.push(i);
        }

        if (numbers[numbers.length - 1] < props.length) {
          setShowCollapsedFew(true);
        } else {
          setShowCollapsedFew(false);
        }
        setShowCollapsedMore(false);
      }
    } else {
      for (let i = 0; i < props.length; i++) {
        numbers.push(i);
      }
      setShowCollapsedMore(false);
      setShowCollapsedFew(false);
    }
    setVisibleNumbers(numbers);
  };

  useEffect(() => {
    loadVisibleNumbers();
  }, []);

  useEffect(() => {
    loadVisibleNumbers();
  }, [groupAt]);

  useEffect(() => {
    props.goToPage(currentPage);
    loadVisibleNumbers();
    enableDisable();
  }, [currentPage, props.length, props.disableNextPage]);

  return (
    <Container>
      <ButtonPrevNext onClick={previousPage} disabled={disabledPrev}>
        <Icon iconId={"chevronLeft"} size="XS" />
      </ButtonPrevNext>

      {showCollapsedFew && (
        <>
          <Itens
            key={0}
            currentPage={currentPage}
            index={0}
            onClick={() => goToPage(0)}
          >
            <Number>{1}</Number>
          </Itens>
        </>
      )}

      {showCollapsedFew && (
        <More>
          <Icon iconId="moreHorizontal" size="XS" />
        </More>
      )}

      {visibleNumbers &&
        visibleNumbers.map((page: number, index: number) => {
          return (
            <Fragment key={index}>
              {
                <Itens
                  currentPage={currentPage}
                  index={page}
                  onClick={
                    page > 0 && props.disableNextPage
                      ? undefined
                      : () => goToPage(page)
                  }
                  disabled={page > 0 && props.disableNextPage}
                >
                  <Number>{page + 1}</Number>
                </Itens>
              }
            </Fragment>
          );
        })}

      {showCollapsedMore && (
        <More>
          <Icon iconId="moreHorizontal" size="XS" />
        </More>
      )}

      {showCollapsedMore && (
        <>
          <Itens
            key={props.length - 1}
            currentPage={currentPage}
            index={props.length - 1}
            onClick={() => goToPage(props.length - 1)}
          >
            <Number>{props.length}</Number>
          </Itens>
        </>
      )}

      <ButtonPrevNext onClick={nextPage} disabled={disabledNext}>
        <Icon iconId={"chevronRight"} size="XS" />
      </ButtonPrevNext>
    </Container>
  );
};
