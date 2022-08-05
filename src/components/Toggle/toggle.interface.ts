export interface IToggle {
  id: string;
  checked: boolean;
  onClick: (value: boolean) => void;
  disabled?: boolean;
  error?: boolean;
}