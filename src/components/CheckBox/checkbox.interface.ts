import React from "react";

export interface iCheckBox {
    label: string;
    name: string;
    value: any;
    checked?: boolean;
    readOnly?: boolean;
    onChange?: () => void;
    disabled?: boolean;
    onColor?: boolean;
    light?: boolean;
  }
  
  export interface ILabel {
    disabled?: boolean;
    onColor?: boolean;
  }
  
  export interface IBox {
    ref: any;
  }

  export interface IMark {
    disabled?: boolean;
    onColor?: boolean;
  }
  