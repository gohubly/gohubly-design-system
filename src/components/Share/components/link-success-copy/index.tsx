import React from 'react';
import { Box, Flex } from 'rebass';
import * as css from './link-success-state.style';
import { iLinkSuccessState } from './link-success-state.interface';
import { theme } from '../../../../theme';
import { Icon } from '../../../Icon';
import { Typography } from '../../../Typography';
import { Button } from '../../../Button';

const LinkSuccessCopy: React.FC<iLinkSuccessState> = ({
  title,
  subtitle,
  button: { content: buttonContent, onClick }
}): JSX.Element => {
  return (
    <css.Container
      padding="16px"
      flexDirection="column"
      backgroundColor={theme.colors.primaryLightest}
    >
      <Flex>
        <css.Container backgroundColor="white" padding="16px" marginRight="16px">
          <Icon iconId="check" />
        </css.Container>

        <Flex flexDirection="column">
          <Typography fontWeight={600} size="XXS" color="neutralLow">
            { title }
          </Typography>

          <Box marginTop="4px" />

          <Typography fontWeight={400} size="XXXS" color="neutralLow">
            { subtitle }
          </Typography>
        </Flex>
      </Flex>

      <Box marginTop="16px" />

      <Button icon="link" hierarchy="secondary" onClick={onClick}>
        { buttonContent }
      </Button>
    </css.Container>
  );
};

export default LinkSuccessCopy;
