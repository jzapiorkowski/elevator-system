import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder?: string;
  value: number | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  height: 40px;
  width: 150px;
`;

export function Input({ type, placeholder, onChange, value }: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
