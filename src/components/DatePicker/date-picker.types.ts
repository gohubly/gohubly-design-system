import { theme } from "../../theme";
import { iIconSizes } from "../Icon";
import { iInputSizes } from "../Input";
import { DateLimit, iPeriod } from "../PeriodPicker";

export interface iDatePickerProps {
  from?: string;
  to?: string;
  count?: 1 | 2 | 3;
  limit?: DateLimit;
  onPeriodChange: (period: iPeriod) => void;
  onReset?: () => void;
  width?: string;
  inputSize?: iInputSizes;
  fontSizeInput?: keyof typeof theme.fontSize;
  fontWeightInput?: keyof typeof theme.fontWeight;
  iconLeftSizeInput?: iIconSizes;
  fontSizeLabelInput?: keyof typeof theme.fontSize;
  fontWeightLabelInput?: keyof typeof theme.fontWeight;
}
