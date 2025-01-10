type ButtonType = 'submit'| 'button' | 'reset'

export interface ButtonProps{
  name:string;
  type?:ButtonType;
  onClick?: () => void;
  disabled?:boolean;
  buttonWidth?: string;
}