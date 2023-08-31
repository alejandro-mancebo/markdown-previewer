import styled from 'styled-components';


const InputContainer = styled.textarea`
  padding: 1rem;
  width: 50%;
  height: 100vh;
  border-color: #D8D8D7;
  resize: none;
  font-size: 1.1rem;

  &:focus,
  &:focus-visible {
  outline: none;
  
`

interface MarkdownInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function MarkdownInput({ value, onChange }: MarkdownInputProps ) {
  return (
    <InputContainer value={value} onChange={onChange} />
  )
}
