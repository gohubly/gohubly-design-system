import React, { useEffect } from 'react';
import { ThemeProvider } from "styled-components"
import { theme } from "."
import moment from 'moment';

export const DesignSystemProvider: React.FC<{ language: string }> = ({ children, language = '' }) => {
  useEffect(() => {
    console.log('changing legacy ds language', language)

    moment.locale(language)
  }, [language])

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}
