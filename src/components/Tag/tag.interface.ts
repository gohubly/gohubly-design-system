export type iTagHierarchy =
  | "primary"
  | "success"
  | "alert"
  | "warning"
  | "gray";

export interface iTag {
  hierarchy?: iTagHierarchy;
  OnColor?: boolean;
  fluid?: boolean;
  onClick?: () => void;
}
