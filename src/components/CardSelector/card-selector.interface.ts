import { Theme } from "../../theme";
import { iIcon } from "../Icon";

export interface iCardSelector {
  title: string;
  color: 'primary' | 'successMedium' | 'helperMedium' | 'warning'
  icon: Pick<iIcon, 'size' | 'fluid' | 'iconId' | 'fill'>
  onClick?: () => void
  responsive?: boolean
  selected?: boolean
}