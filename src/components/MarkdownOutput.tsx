import styled from 'styled-components'

const OutputContainer = styled.div`
  padding: 1rem;
  width: 50%;
  border: 1px solid #D8D8D7;

`

interface MarkdownOutputProps {
  markdown: string;
}
// 
export default function MarkdownOutput({ markdown }: MarkdownOutputProps) {
  return (
    <OutputContainer>
      {markdown}
    </OutputContainer>
  )
}
