import styled from 'styled-components'

const InputContainer = styled.textarea`
  textarea {
    width: 250px;
    height: 100px;
  } 

`

const StyledTextArea = styled.textarea`

`

interface MarkdownInputProps {
  value: string;
  onChange(): void;
}

export default function MarkdownInput(props: MarkdownInputProps) {
  return (
    <InputContainer>
      MarkdownInput
    </InputContainer>
  )
}
