import styled from 'styled-components'

const OutputContainer = styled.div`
  padding: 1rem;
  width: 50%;
  border: 1px solid #D8D8D7;

`

interface MarkdownOutputProps {
  markdown: string;
}
// { markdown }: MarkdownOutputProps
export default function MarkdownOutput() {
  return (
    <OutputContainer>
      MarkdownOutput
    </OutputContainer>
  )
}
