import { InputHTMLAttributes } from "react";
import { theme } from "../../theme";

type iInputHTML = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
export type IMaxCharactersPositionTA = "right" | "left";

export interface ITextArea extends iInputHTML {
  OnColor?: boolean;
  fluid?: boolean;
  disabled?: boolean;
  error?: boolean;

  fontSize?: keyof typeof theme.fontSize;
  lineHeight?: keyof typeof theme.lineHeight;
  fontWeight?: keyof typeof theme.fontWeight;

  label?: string;
  labelFontSize?: keyof typeof theme.fontSize;
  labelLineHeight?: keyof typeof theme.lineHeight;
  labelFontWeight?: keyof typeof theme.fontWeight;

  gapLabel?: string;

  link?: string;
  linkOnClick?: () => void;
  linkFontSize?: keyof typeof theme.fontSize;
  linkLineHeight?: keyof typeof theme.lineHeight;

  helperText?: string;
  helperTextOnClick?: () => void;
  helperTextFontSize?: keyof typeof theme.fontSize;
  helperTextLineHeight?: keyof typeof theme.lineHeight;
  helpTextGap?: string;

  rows?: number;
  textAreaHeight?: string;
  maxCharacters?: number;
  maxCharactersPosition?: IMaxCharactersPositionTA;
  backgroundTextArea?: keyof typeof theme.colors;
  texteAreaOnBlur?: (value?: any) => void;
  texteAreaOnChange?: (value?: any) => void;
}
