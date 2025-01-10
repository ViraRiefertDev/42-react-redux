import { ButtonProps } from './types';
import { MainButton } from './styles';

function Button({name,type = 'button', onClick, disabled = false, buttonWidth='100%'}:ButtonProps) {
  return (
    <MainButton buttonWidth={buttonWidth} type={type} onClick={onClick} disabled={disabled}>{name}</MainButton>
  );
}

export default Button;
