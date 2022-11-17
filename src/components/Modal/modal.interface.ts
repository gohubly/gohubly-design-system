export interface IModal {
  show: boolean;
  toggleModal: any;
  title?: string;
  showCloseIcon?: boolean;
  scrollable?: boolean;
  width?: string;
  minHeight?: string;
  backdropPosition?: {
    width?: string;
    left?: string;
  };
  isDesktop?: boolean;
  children: JSX.Element | React.ReactChild | any;
}
