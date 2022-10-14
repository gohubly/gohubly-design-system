export interface iPaymentTypeCard {
  type: 'creditCard' | 'bankSlip'
  selected?: boolean
  recomended?: boolean
  flagText?: string
}