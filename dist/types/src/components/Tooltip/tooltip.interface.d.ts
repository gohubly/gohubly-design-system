export declare type iTooltipSizes = 'SM' | 'LG';
export declare type iTooltipPointerOrientation = 'left' | 'right' | 'up' | 'down';
export declare type iTooltipPointerPosition = 'left' | 'center' | 'right';
export interface iTooltip {
    children: any;
    text: string;
    size?: iTooltipSizes;
    position?: iTooltipPointerOrientation;
    pointerPosition?: iTooltipPointerPosition;
    pointerOrientation: iTooltipPointerOrientation;
    shadow?: boolean;
}
export declare type iTooltipWithoutChildren = Omit<iTooltip, 'children'>;
