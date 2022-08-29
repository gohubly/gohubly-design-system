import React, { useState } from 'react';
import { Flex, Text } from 'rebass';
import { ProductItem } from './product-card.style';
import { Button, Typography, Select } from '../';
import { iProductCard } from './product-card.interface';

export const ProductCard: React.FC<iProductCard> = ({
  product,
  hasSkuSelector = true,
  hideButton,
  hideDiscountFlag,
  buttonProps
}) => {
  const {
    imageUrl,
    name,
    skus: [skus]
  } = product
  const [selectedItem, setSelectedItem] = useState<typeof skus[0]>(skus.at(0) as typeof skus[0]);

  const bestPrice = selectedItem.bestPrice === 0 ? selectedItem.listPrice : selectedItem.bestPrice
  const listPrice = selectedItem.listPrice

  const percent = ((bestPrice * 100) / listPrice - 100).toFixed(2);

  const getProductName = (): string => {
    if (name === selectedItem.name) return selectedItem.name;

    return `${name} ${selectedItem ? selectedItem.name : ''}`;
  };

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

  return (
    <ProductItem>
      {imageUrl ? (
        <div
          className={'coverImage'}
          style={{ backgroundImage: `url('${imageUrl}')` }}
          title={getProductName()}
        />
      ) : (
        <div
          className={'coverImage'}
          style={{
            backgroundImage: `url('https://plugone-staging.nyc3.digitaloceanspaces.com/app-assets/semfoto.jpeg')`,
          }}
          title={'Sem imagem'}
        />
      )}
      <Typography as="p" size="XXXS" color="neutralLowMedium" lineHeight="MD" fontWeight={500}>
        <div title={getProductName()}>{getProductName()}</div>
      </Typography>
      {
        hasSkuSelector && (
          <Select
            width="100%"
            height="34px"
            fontSize="XXS"
            type="number"
            onSelect={({ value }): void => setSelectedItem(skus.find(({ id }) => id === value.toString()) as typeof skus[0])}
            items={skus.map(({ name, id }) => {
              return {
                label: name,
                value: id,
              };
            })}
            selected={{
              label: selectedItem.name,
              value: selectedItem.id,
            }}
          />
        )
      }

      <Flex className="price" flexDirection="column" justifyContent="end">
        {listPrice > bestPrice && (
          <Text
            fontSize="12px"
            lineHeight="16px"
            fontWeight={400}
            color="#555555"
            style={{
              textDecoration: 'line-through',
            }}
          >
            {formatPrice(listPrice)}
          </Text>
        )}
        <Flex justifyContent="space-between" alignItems="center">
          <Flex>
            {bestPrice && (
              <Text fontSize="16px" color="#000" lineHeight="24px" fontWeight={600}>
                {formatPrice(bestPrice)}
              </Text>
            )}
          </Flex>
          {listPrice > bestPrice && !hideDiscountFlag && (
            <Flex>
              <Text
                fontSize="12px"
                lineHeight="16px"
                fontWeight={600}
                color="#fff"
                padding="2px 4px"
                style={{
                  background: '#EB0045',
                  borderRadius: '500px',
                }}
              >
                {percent}%
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>

      {!hideButton && (
        <Button
          size="SM"
          hierarchy="primary"
          fluid
          {...buttonProps}
        >
          { buttonProps?.children ?? 'Adicionar' }
        </Button>
      )}
    </ProductItem>
  )
};

export default ProductCard;
