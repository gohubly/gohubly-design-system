export type IChipSizes = "SM" | "MD" | "LG";
export interface IChip {
  selected?: boolean;
  size?: IChipSizes; // MD: Mobile e LG: Desktop
}