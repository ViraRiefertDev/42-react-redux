import styled from '@emotion/styled';

interface ButtonStyledProps {
  disabled: boolean;
  buttonWidth?:string;
}

export const MainButton = styled.button<ButtonStyledProps>`

  width: 100%;
  padding: 20px 20px;

  background-color: ${({ disabled }) => (disabled ? '#b8b6ae' : '#1f27f5')};
  font-family: Lato, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 30px;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;
