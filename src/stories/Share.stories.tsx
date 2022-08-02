import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Share } from '..';

export default {
  title: 'Components/Share',
  component: Share,
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args) => <Share {...args} />;

export const Default = Template.bind({});

Default.args = {
  linkSuccessProps: {
    title: "Carrinho pronto!",
    subtitle: "Compartilhe com seus contatos.",
    button: {
      content: "Copiar meu link",
      onClick: () => null
    }
  }
};

export const WithMultipleEmails = Template.bind({});

WithMultipleEmails.args = {
  canAddMultipleEmails: true,
  linkSuccessProps: {
    title: "Carrinho pronto!",
    subtitle: "Compartilhe com seus contatos.",
    button: {
      content: "Copiar meu link",
      onClick: () => null
    }
  }
};

export const WithSuccess = Template.bind({});

WithSuccess.args = {
  canAddMultipleEmails: true,
  success: true,
  linkSuccessProps: {
    title: "Carrinho pronto!",
    subtitle: "Compartilhe com seus contatos.",
    button: {
      content: "Copiar meu link",
      onClick: () => null
    }
  }
};