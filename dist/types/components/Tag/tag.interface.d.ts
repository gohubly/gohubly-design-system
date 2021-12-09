export declare type iTagHierarchy = "primary" | "success" | "alert" | "warning";
export interface iTag {
    hierarchy?: iTagHierarchy;
    OnColor?: boolean;
    fluid?: boolean;
    onClick?: () => void;
}
