import moment from "moment";
import React, { useRef, useState } from "react";
import { Box, Flex } from "rebass";
import { Input } from "../Input";
import { PeriodPicker } from "../PeriodPicker";
import { iDatePickerProps } from "./date-picker.types";
import * as css from "./date-picker.styles";
import { useClickOutside } from "../../hooks";

export const DatePicker: React.FC<iDatePickerProps> = ({
  from,
  to,
  count = 3,
  limit,
  onReset,
  onPeriodChange,
  width,
  inputSize,
  fontSizeInput,
  fontWeightInput,
  iconLeftSizeInput,
  fontSizeLabelInput,
  fontWeightLabelInput,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(() => {
    setShowPicker(false);
  }, [ref]);

  return (
    <css.Container>
      <Flex style={{ gap: "8px" }}>
        <Box width={width ?? "224px"}>
          <Input
            iconLeft="calendar"
            iconRight="chevronRight"
            iconRightPadding="MD"
            iconGray
            placeholder="Selecionar"
            label="Inicia em"
            fontSizeLabel={fontSizeLabelInput}
            fontWeightLabel={fontWeightLabelInput}
            value={from ? moment(from)?.format("DD/MM/YYYY") : ""}
            onKeyDown={(e) => e.preventDefault()}
            onClick={() => setShowPicker((show) => !show)}
            style={{ cursor: "pointer" }}
            readOnly
            fluid
            size={inputSize}
            fontSize={fontSizeInput}
            fontWeight={fontWeightInput}
            iconLeftSize={iconLeftSizeInput}
          />
        </Box>

        <Box width={width ?? "224px"}>
          <Input
            iconLeft="calendar"
            iconGray
            placeholder="Selecionar"
            label="Termina em"
            fontSizeLabel={fontSizeLabelInput}
            fontWeightLabel={fontWeightLabelInput}
            onKeyDown={(e) => e.preventDefault()}
            value={to ? moment(to)?.format("DD/MM/YYYY") : ""}
            style={{ cursor: "pointer" }}
            readOnly
            fluid
            disabled={!from && !to}
            size={inputSize}
            fontSize={fontSizeInput}
            fontWeight={fontWeightInput}
            iconLeftSize={iconLeftSizeInput}
          />
        </Box>
      </Flex>

      <css.PickerContainer show={showPicker}>
        <PeriodPicker
          onChange={(period) => {
            onPeriodChange(period);
            setShowPicker(false);
          }}
          onReset={onReset}
          containerRef={ref}
          count={count}
          limit={limit}
          period={{
            initialDate: moment(from).utc(),
            finalDate: moment(to).utc(),
          }}
        />
      </css.PickerContainer>
    </css.Container>
  );
};
