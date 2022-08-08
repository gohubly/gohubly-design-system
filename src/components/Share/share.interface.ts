import { iIconTypes } from "../Icon";
import { iLinkSuccessState } from "./components/link-success-copy/link-success-state.interface";

export interface iShare {
  link: string;
  header?: {
    icon?: iIconTypes,
    content: string,
    position?: "start" | "end"
    onIconClick?: () => void
  }
  custom?: {
    shareButton: string
  }
  padding?: string;
  helperText?: JSX.Element;
  loading?: boolean;
  linkSuccessProps: iLinkSuccessState
  onBackClick?: () => void;
  onShare?: (selectedMedia: EShareMedia, link?: string, email?: string) => void;
  success?: boolean
  fluid?: boolean
  apiKeys: {
    facebookMessenger: string
  }
  canAddMultipleEmails?: boolean
};

export enum EShareMedia {
  email,
  instagram,
  whatsapp,
  messenger,
}
