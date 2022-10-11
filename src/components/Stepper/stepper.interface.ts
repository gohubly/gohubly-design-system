export type iStepperHierarchy = 'primary' | 'secondary' | 'ghost' | 'white'

export interface iStepper {
  currentStep?: number
  steps?: number
  hierarchy?: iStepperHierarchy
  hasProgressBar?: boolean
  mini?: boolean
  className?: string
  onClick?: (step: number) => void
}