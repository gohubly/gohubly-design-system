import { Theme } from "../../theme";
import { iIcon } from "../Icon";

export interface iCardSelector {
  title: string  | JSX.Element;
  color: 'primary' | 'successMedium' | 'helperMedium' | 'warning'
  icon: Pick<iIcon, 'size' | 'fluid' | 'iconId' | 'fill'>
  onClick?: () => void
  responsive?: boolean
  highlighted?: boolean
  bordered?: boolean;
  spaced?: boolean;
  selected?: boolean
}