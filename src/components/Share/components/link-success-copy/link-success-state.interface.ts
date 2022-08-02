export type iLinkSuccessState = {
  title: string;
  subtitle: string;
  button: {
    content: JSX.Element | string,
    onClick: () => void
  }
};
