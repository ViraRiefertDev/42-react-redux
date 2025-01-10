import './styles.ts';
import { InputProps } from './types';
import { InputContainer, InputElement, Label, ErrorMessage } from './styles';

function Input({
  name,
  id,
  type = 'text',
  placeholder,
  label,
  value,
  onChange,
  error,
}: InputProps) {
  // console.log("Input render or re-render");

  return (
    <InputContainer hasError={error}>
      {/* Пример оператора условного рендеринга */}
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error !== undefined && <ErrorMessage>{error}</ErrorMessage>}
      {/* todo заменить этот блок на margin в InputContiner если ошибки нет
      todo {error && <ErrorMessage>{error}</ErrorMessage>} */}
    </InputContainer>
  );
}

export default Input;
