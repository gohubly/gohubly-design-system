import React from "react"

const translations = {
  en: {
    pickOption: 'or, pick an option',
    shareBy: 'Share by',
    email: 'email',
    addEmail: 'Add email',
    shareContact: <>Share the link to <br /> your network on <br /></>,
    success: 'Link shared successfully',
    share: 'Share',
    input: {
      label: 'Enter an email',
      placeholder: 'example@email.com',
      errors: {
        invalidEmail: 'Invalid email',
        emailAreadyUsed: 'This email has already been added',
      }
    }
  },
  pt: {
    pickOption: 'ou, escolha uma opção',
    shareBy: 'Compartilhar por',
    email: 'e-mail',
    addEmail: 'Adicionar e-mail',
    shareContact: <>Compartilhe o link para<br /> a sua rede de contatos no <br /></>,
    success: <>Link compartilhado <br /> com sucesso!</>,
    share: 'Compartilhar',
    input: {
      label: 'Digite um e-mail',
      placeholder: 'exemplo@email.com',
      errors: {
        invalidEmail: 'E-mail inválido',
        emailAreadyUsed: 'Este e-mail já foi adicionado',
      }
    }
  },
}

export default translations