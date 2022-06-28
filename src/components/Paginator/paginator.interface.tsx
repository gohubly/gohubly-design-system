import { iButton } from "../Button";

export interface iPaginator {
  length: number;
  currentPage?: number;
  groupAt?: number;
  goToPage: (selectedPage: number) => void;
  className?: string;
}

export interface iItens {
  currentPage: number
  index: number
}

export interface iContainerIcon {
  currentPage: number
  disabledPrev?: boolean
  disabledNext?: boolean
  disabled?: boolean
}

export interface iButtonNext extends Partial<iButton> {
  iconRightPadding?: string
}