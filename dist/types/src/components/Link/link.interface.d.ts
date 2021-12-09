import { iIconTypes } from "../Icon";
export interface iLink {
    children: any;
    onClick?: () => void;
    OnColor?: boolean;
    disabled?: boolean;
    icon?: iIconTypes;
}
