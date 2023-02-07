import React from "react";
import { FC } from "react";
import { Modal } from "../Modal";
import { iDialogProps } from "./dialog.types";

export * from './dialog.styles';

export const Dialog: FC<iDialogProps> = ({
  width,
  title,
  children,
  isOpen = false,
  onClose
}) => {
  return (
    <Modal
      width={width}
      show={isOpen}
      toggleModal={onClose}
      showCloseIcon
      title={title}
      padding="XS"
    >
      { children }
    </Modal>
  )
}