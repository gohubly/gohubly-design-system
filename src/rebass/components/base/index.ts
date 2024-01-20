import styled, { css } from "styled-components";
import { CommonProps } from "../types";
import { applyProps } from "../../../helpers/styles";

export const BaseRebassComponent = styled.div<CommonProps>`
  * { box-sizing: border-box !important; }

  ${({ marginX, marginY, mx, my }) => (marginX || marginY) && css`margin: ${marginY || my} ${marginX || mx}`};
  ${({ m }) => m && css`margin: ${m} ${m} ${m} ${m} !important`};
  ${({ margin }) => margin && css`margin: ${margin} !important`};

  ${({ mt, marginTop }) => (mt || marginTop) && css`margin-top: ${mt || marginTop};`}
  ${({ ml, marginLeft }) => (ml || marginLeft) && css`margin-left: ${ml || marginLeft};`}
  ${({ mr, marginRight }) => (mr || marginRight) && css`margin-right: ${mr || marginRight};`}
  ${({ mb, marginBottom }) => (mb || marginBottom) && css`margin-bottom: ${mb || marginBottom};`}

  ${({ paddingX, paddingY, py, px }) => (paddingX || paddingY || py || px) && css`padding: ${paddingY || py} ${paddingX || px}`};
  ${({ p }) => p && css`padding: ${p} ${p} ${p} ${p} !important`};
  ${({ padding }) => padding && css`padding: ${padding} !important`};

  ${({ pt, paddingTop }) => (pt || paddingTop) && css`padding-top: ${pt || paddingTop};`}
  ${({ pl, paddingLeft }) => (pl || paddingLeft) && css`padding-left: ${pl || paddingLeft};`}
  ${({ pr, paddingRight }) => (pr || paddingRight) && css`padding-right: ${pr || paddingRight};`}
  ${({ pb, paddingBottom }) => (pb || paddingBottom) && css`padding-Bottom: ${pb || paddingBottom};`}

  ${({ bg }) => bg && css`background: ${bg}`};

  ${({ sx }) => sx && css `${sx}`};

  ${props => applyProps(props)};
`