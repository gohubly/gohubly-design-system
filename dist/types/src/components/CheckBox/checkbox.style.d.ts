import { ILabelCheckBox, IBoxCheckBox, IMarkCheckBox } from './checkbox.interface';
export declare const Label: import("styled-components").StyledComponent<"label", any, ILabelCheckBox, never>;
export declare const Box: import("styled-components").StyledComponent<"input", any, {
    type: "checkbox";
} & IBoxCheckBox, "type">;
export declare const Mark: import("styled-components").StyledComponent<"span", any, IMarkCheckBox, never>;
