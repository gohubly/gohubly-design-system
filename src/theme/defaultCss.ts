import { css } from "styled-components";

export const defaultCss = css`
  @font-face {
    font-family: "InterLight";
    src: url("/fonts/Inter-Light.ttf") format("truetype");
  }

  @font-face {
    font-family: "InterRegular";
    src: url("/fonts/Inter-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "InterMedium";
    src: url("/fonts/Inter-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "InterSemiBold";
    src: url("/fonts/Inter-SemiBold.ttf") format("truetype");
  }
  
  @font-face {
    font-family: "InterBold";
    src: url("/fonts/Inter-Bold.ttf") format("truetype");
  }

  * {
    font-family: "InterMedium", "InterRegular", sans-serif;
  }
`;
