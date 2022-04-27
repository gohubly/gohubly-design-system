import React from 'react';
import { ThemeProvider } from "styled-components"
import { theme } from "."

export const DesignSystemProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}
