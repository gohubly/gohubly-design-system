import { iButton } from "../Button";

export interface iProductCard {
  product: iIntegrationProduct
  hasSkuSelector?: boolean
  hideButton?: boolean
  showPrice?: boolean
  hideDiscountFlag?: boolean
  buttonProps: iButton,
  locale?: string;
  currency?: string;
}

export interface iIntegrationProduct {
  id: number;
  name: string;
  skus: {
    id: string;
    name: string;
    listPrice: number;
    bestPrice: number;
    isAvailable?: boolean;
  }[][];
  imageUrl: string;
  productUrl: string;
}