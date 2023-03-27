const ellipsiText = (text: string, textUntilIndex: number): string =>
  text.length > textUntilIndex ? `${text.substring(0, textUntilIndex)}...` : text;

export default ellipsiText;