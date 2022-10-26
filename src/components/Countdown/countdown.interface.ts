import { iButton } from "..";

export interface iCountdown {
  countdown: number
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  highlightedDescription?: string | JSX.Element;
  buttonProps?: iButton;
}