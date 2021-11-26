import React, { ThemeProvider } from "styled-components"
import { theme } from "."

export const DesignSystemProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
