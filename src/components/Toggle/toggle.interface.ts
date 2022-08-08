export interface IToggle {
  id: string;
  active: boolean;
  onClick?(value: boolean): void;
  disabled?: boolean;
  error?: boolean;
}