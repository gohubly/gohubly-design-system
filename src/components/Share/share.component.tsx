import React, { ReactText, useState } from 'react';
import copy from 'clipboard-copy';
import * as css from './share.style';
import { emailRegex, getLinkToSocialMedia } from '../../helpers';
import { iShare, EShareMedia } from './share.interface';
import { Button } from '../Button';
import { iIconTypes, Icon } from '../Icon';
import { Input } from '../Input';
import { Typography } from '../Typography';
import LinkSuccessCopy from './components/link-success-copy';
import { Box, Flex } from 'rebass';
import { Avatar } from '../Avatar';

export const Share: React.FC<iShare> = ({
  link,
  padding,
  header,
  helperText,
  loading,
  linkSuccessProps,
  onShare,
  onBackClick,
  canAddMultipleEmails,
  success,
  fluid,
  apiKeys,
  custom
}): JSX.Element => {
  const [selectedMedia, setSelectedMedia] = useState<EShareMedia>(EShareMedia.email);
  const medias = Object.keys(EShareMedia).filter(key => isNaN(+key));
  const [value, setValue] = useState<string | undefined>('')
  const [error, setError] = useState<string | undefined>('')
  const [emails, setEmails] = useState<string[]>([])

  const handleCopyLinkClick = (): void => {
    copy(link);

    if (linkSuccessProps.button) linkSuccessProps.button.onClick()
  };

  const handleShareClick = (): void => {
    if (selectedMedia !== EShareMedia.email) {
      window.open(
        getLinkToSocialMedia(
          EShareMedia[(selectedMedia as unknown) as keyof typeof EShareMedia],
          link as string,
          apiKeys
        ),
        '_blank',
      );
    }

    if (onShare) onShare(selectedMedia, link, emails[0]);
  };

  const handleAddEmail = () => {
    emails.push(value as string);
    setValue("");
  }
  
  const handleRemoveEmail = (emailToRemove?: string) => {
    setEmails(emails.filter(email => email !== emailToRemove))
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = event

    setValue(value);

    if (!emailRegex.test(value)) {
      return setError("E-mail inválido");
    }

    if (canAddMultipleEmails && emails.includes(value)) {
      return setError("Este e-mail já foi adicionado")
    }

    setError(undefined);
  }

  const ICON_RELATIONSHIP: { [key in keyof typeof EShareMedia]: iIconTypes } = {
    email: 'envelope',
    instagram: 'instagramColor',
    messenger: 'messenger',
    whatsapp: 'whatsapp',
  };

  return (
    <css.Container padding={padding} fluid={fluid}>
      {header && (
        <>
          <css.FlexContainer>
            { header?.icon && <Icon iconId={header.icon} stroke="neutralLow" onClick={onBackClick} /> }

            <Typography size="MD" fontWeight={600} color="neutralLow">
              {header.content}
            </Typography>
          </css.FlexContainer>

          <css.Spacer marginTop="24px" />
        </>
      )}


      <LinkSuccessCopy {...linkSuccessProps} button={{ ...linkSuccessProps.button, onClick: handleCopyLinkClick }} />

      <css.Spacer marginTop="16px" marginBottom="24px">
        <Typography size="XS" color="neutralLowMedium" fontWeight={600}>
          ou, escolha uma opção
        </Typography>
      </css.Spacer>

      <css.FlexContainer>
        {medias.map(media => (
          <css.ShareItemContainer
            key={media}
            onClick={(): void => setSelectedMedia(EShareMedia[media as keyof typeof EShareMedia])}
            selected={EShareMedia[media as keyof typeof EShareMedia] === selectedMedia}
          >
            <Icon iconId={ICON_RELATIONSHIP[media as keyof typeof EShareMedia]} />
          </css.ShareItemContainer>
        ))}
      </css.FlexContainer>

      {selectedMedia === EShareMedia.email && (
        <css.Spacer marginTop="32px">
          <Typography size="XS" color="neutralLowLight">
            Compartilhar por {''}
            <Typography size="XS" fontWeight={600} color="neutralLow">
              e-mail
            </Typography>
          </Typography>

          <css.Divider
            marginTop="8px"
            marginBottom="24px"
          />

          {!success && (
            <Input
              label="Digite um e-mail"
              placeholder="exemplo@email.com"
              value={value}
              onChange={handleEmailChange}
              helperText={error}
              error={(error?.length ?? 0) > 1}
              fluid
            />
          )}
        </css.Spacer>
      )}

      {!canAddMultipleEmails && selectedMedia === EShareMedia.email && <css.Spacer marginBottom="24px" />}

      { helperText && (
        <>
          helperText
          <css.Spacer marginTop="29px" />
        </>
      ) }


      { canAddMultipleEmails && !success && (
        <Box marginY="15px">
          <Button hierarchy='ghost' onClick={handleAddEmail} disabled={(error?.length ?? 0) > 0} fluid>
            Adicionar mais e-mails
          </Button>
        </Box>
      )}

      {canAddMultipleEmails && !success && emails.length > 0 && emails.map(email => (
        <css.EmailsContainer>
          <Flex style={{ gap: '16px' }} alignItems="center">
            <Avatar />

            <Typography size='XXS' color='neutralLow' fontWeight={500}>
              {email}
            </Typography>
          </Flex>

          {/* @ts-ignore */}
          <Icon iconId='trash' onClick={handleRemoveEmail.bind(handleRemoveEmail, email)} />
        </css.EmailsContainer>
      ))}

      {selectedMedia !== EShareMedia.email && !success && (
        <Flex flexDirection="column" justifyContent="center" alignItems="center" paddingY="36px">
          <css.IconContainer>
            <Icon iconId='information' size='LG' />
          </css.IconContainer>

          <Box marginTop="24px" />

          <Typography size="XS" fontWeight={400} color='neutralLow' lineHeight='LG' textAlign='center'>
            Compartilhe o link para<br /> a sua rede de contatos no <br />
            <Typography size="XS" fontWeight={400} color='primary' lineHeight='LG' textAlign='center'>
              {`${EShareMedia[selectedMedia].toString().substring(0, 1).toUpperCase()}${EShareMedia[selectedMedia].toString().substring(1)}`}
            </Typography>
          </Typography>
        </Flex>
      )}

      {selectedMedia === EShareMedia.email && success && (
        <Flex flexDirection="column" justifyContent="center" alignItems="center" paddingY="33px">
          <css.IconContainer backgroundColor='successLight'>
            <Icon iconId='check' size='LG' stroke='successMedium' />
          </css.IconContainer>

          <Box marginTop="16px" />

          <Typography size="SM" color='neutralLow' lineHeight='LG' textAlign='center'>
          Link compartilhado <br /> com sucesso!
          </Typography>
        </Flex>
      )}

      <Button
        icon="share"
        onClick={handleShareClick}
        loading={loading}
        disabled={!emails.length && selectedMedia === EShareMedia.email}
      >
        { custom?.shareButton ?? 'Compartilhar' }
      </Button>
    </css.Container>
  );
};