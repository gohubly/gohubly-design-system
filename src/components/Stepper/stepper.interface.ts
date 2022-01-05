export type iStepperHierarchy = 'primary' | 'secondary' | 'ghost'

export interface iStepper {
  currentStep?: number
  steps?: number
  hierarchy?: iStepperHierarchy
  hasProgressBar?: boolean
  mini?: boolean
}