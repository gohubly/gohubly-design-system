import React, { ReactText, useEffect, useState } from 'react';
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
	custom,
}): JSX.Element => {
	const [selectedMedia, setSelectedMedia] = useState<EShareMedia>(EShareMedia.email);
	const medias = Object.keys(EShareMedia).filter(key => isNaN(+key));
	const [value, setValue] = useState<string | undefined>('');
	const [error, setError] = useState<string | undefined>('initial');
	const [emails, setEmails] = useState<string[]>([]);

	useEffect(() => {
		if (success) {
			setValue('');
		}
	}, [success]);

	const handleCopyLinkClick = (): void => {
		copy(link);

		if (linkSuccessProps.button) {linkSuccessProps.button.onClick();}
	};

	const handleShareClick = (): void => {
		if (selectedMedia !== EShareMedia.email) {
			window.open(
				getLinkToSocialMedia(
					EShareMedia[selectedMedia as unknown as keyof typeof EShareMedia],
          link as string,
          apiKeys,
				),
				'_blank',
			);
		}

		if (onShare) {onShare(selectedMedia, link, canAddMultipleEmails ? emails : [value ?? '']);}
	};

	const handleAddEmail = () => {
		emails.push(value as string); setValue('');
	};
  
	const handleRemoveEmail = (emailToRemove?: string) => {
		setEmails(emails.filter(email => email !== emailToRemove));
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { currentTarget: { value } } = event;

		setValue(value);

		if (!value.length && emails.length && canAddMultipleEmails) {
			return setError('');
		}

		if (!emailRegex.test(value)) {
			return setError('E-mail inválido');
		}

		if (canAddMultipleEmails && emails.includes(value)) {
			return setError('Este e-mail já foi adicionado');
		}

		setError(undefined);
	};

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
					<Flex flexDirection={(header.position ?? "start") === 'start' ? 'row' : 'row-reverse'} justifyContent={(header.position ?? "start") === 'start' ? 'initial' : 'space-between'} alignItems="center">
						{ header?.icon && <Icon iconId={header.icon} stroke="neutralLow" onClick={header?.onIconClick} /> }

						<Typography size="MD" fontWeight={600} color="neutralLow">
							{header.content}
						</Typography>
					</Flex>

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
							helperText={error !== 'initial' ? error : ''}
							error={((error?.length ?? 0) > 1) && error !== 'initial'}
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


			{ canAddMultipleEmails && !success && selectedMedia === EShareMedia.email && (
				<Box marginY="15px">
					<Button hierarchy="ghost" onClick={handleAddEmail} disabled={(error?.length ?? 0) > 0} fluid>
            Adicionar mais e-mails
					</Button>
				</Box>
			)}

			{canAddMultipleEmails && !success && emails.length > 0 && emails.map(email => (
				<css.EmailsContainer>
					<Flex style={{ gap: '16px' }} alignItems="center">
						<Avatar image="data:image/png;base64,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" />

						<Typography size="XXS" color="neutralLow" fontWeight={500}>
							{email}
						</Typography>
					</Flex>

					{/* @ts-ignore */}
					<Icon iconId="trash" onClick={handleRemoveEmail.bind(handleRemoveEmail, email)} />
				</css.EmailsContainer>
			))}

			{selectedMedia !== EShareMedia.email && !success && (
				<Flex flexDirection="column" justifyContent="center" alignItems="center" paddingY="36px">
					<css.IconContainer>
						<Icon iconId="information" size="LG" />
					</css.IconContainer>

					<Box marginTop="24px" />

					<Typography size="XS" fontWeight={400} color="neutralLow" lineHeight="LG" textAlign="center">
            Compartilhe o link para<br /> a sua rede de contatos no <br />
						<Typography size="XS" fontWeight={400} color="primary" lineHeight="LG" textAlign="center">
							{`${EShareMedia[selectedMedia].toString().substring(0, 1).toUpperCase()}${EShareMedia[selectedMedia].toString().substring(1)}`}
						</Typography>
					</Typography>
				</Flex>
			)}

			{selectedMedia === EShareMedia.email && success && (
				<Flex flexDirection="column" justifyContent="center" alignItems="center" paddingY="33px">
					<css.IconContainer backgroundColor="successLight">
						<Icon iconId="check" size="LG" stroke="successMedium" />
					</css.IconContainer>

					<Box marginTop="16px" />

					<Typography size="SM" color="neutralLow" lineHeight="LG" textAlign="center">
          Link compartilhado <br /> com sucesso!
					</Typography>
				</Flex>
			)}

			<Button
				icon="shareOutline"
				onClick={handleShareClick}
				loading={loading}
				disabled={((canAddMultipleEmails && !emails.length) || !!error) && selectedMedia === EShareMedia.email}
			>
				{ custom?.shareButton ?? 'Compartilhar' }
			</Button>
		</css.Container>
	);
};