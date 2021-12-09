/// <reference types="react" />
import { iInput } from '.';
interface iInputDropdownWrapper {
    opened: boolean;
}
interface iInputDropdownItem {
    active: boolean;
}
interface iStyledCommonProps extends Partial<iInput> {
    contentLeft?: boolean;
    contentRight?: boolean;
}
export declare const LabelText: import("styled-components").StyledComponent<"span", any, iStyledCommonProps, never>;
export declare const HelperText: import("styled-components").StyledComponent<"span", any, iStyledCommonProps, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, iStyledCommonProps, never>;
export declare const Label: import("styled-components").StyledComponent<"label", any, iStyledCommonProps, never>;
export declare const LeftIcon: import("styled-components").StyledComponent<import("react").FC<import("../Icon").iIcon>, any, {}, never>;
export declare const RightIcon: import("styled-components").StyledComponent<import("react").FC<import("../Icon").iIcon>, any, {}, never>;
export declare const RelativeContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SuffixText: import("styled-components").StyledComponent<"div", any, iStyledCommonProps, never>;
export declare const PrefixText: import("styled-components").StyledComponent<"div", any, iStyledCommonProps, never>;
export declare const DropdownWrapper: import("styled-components").StyledComponent<"div", any, iInputDropdownWrapper, never>;
export declare const DropdownItem: import("styled-components").StyledComponent<"div", any, iInputDropdownItem, never>;
export {};
