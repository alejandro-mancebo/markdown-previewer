import styled from 'styled-components'

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

const StyledTextArea = styled.textarea`

`

interface MarkdownInputProps {
  value: string;
  onChange(): void;
}


// 
export default function MarkdownInput(props: MarkdownInputProps) {
  return (
    <InputContainer>
      {props.value}
    </InputContainer>
  )
}
