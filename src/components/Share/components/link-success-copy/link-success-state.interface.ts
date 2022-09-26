export type iLinkSuccessState = {
  title: string;
  subtitle: string;
  padding?: string;
  button: {
    content: JSX.Element | string,
    onClick: () => void
  }
};
