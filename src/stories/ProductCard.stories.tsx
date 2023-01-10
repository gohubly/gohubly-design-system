import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductCard } from '..';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});

const product = {
  id: 50007,
  productUrl: "",
  name: "Whole Watermelon Mini Fresh",
  imageUrl: "https://beightoneagency.vteximg.com.br/arquivos/ids/155759/image-a6c9546c1ef34614ba951dda94b27b7e.jpg?v=637419286570530000",
  skus: [
    [
      {
        id: "1",
        name: "Whole Watermelon Mini Fresh",
        listPrice: 15,
        bestPrice: 11,
        isAvailable: true
      },
      {
        id: "2",
        name: "Whole Watermelon Mini Fresh 2",
        listPrice: 15,
        bestPrice: 0,
        isAvailable: true
      }
    ]
  ]
}

Default.args = {
  product
};

export const WithCustomizedButton = Template.bind({});

WithCustomizedButton.args = {
  product,
  buttonProps: {
    icon: 'plus',
    children: (
      <>
        Criar link
      </>
    )
  }  
};

export const WithoutSkuSelector = Template.bind({});

WithoutSkuSelector.args = {
  product,
  hasSkuSelector: false,
  buttonProps: {
    icon: 'plus',
    children: (
      <>
        Criar link
      </>
    )
  }  
};

Default.parameters = {
  backgrounds: {
    default: 'figma',
  },
};

export const WithoutButton = Template.bind({});

WithoutButton.args = {
  product,
  hasSkuSelector: false,
  hideButton: true,
  buttonProps: {
    icon: 'plus',
    children: (
      <>
        Criar link
      </>
    )
  }  
};

export const WithoutPrice = Template.bind({});

WithoutPrice.args = {
  product,
  showPrice: false,
  buttonProps: {
    icon: 'plus',
    children: (
      <>
        Criar link
      </>
    )
  }  
};

Default.parameters = {
  backgrounds: {
    default: 'figma',
  },
};