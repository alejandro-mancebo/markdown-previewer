import styled from 'styled-components'

const OutputContainer = styled.div`


`

interface MarkdownOutputProps {
  markdown: string;
}

export default function MarkdownOutput({ markdown }: MarkdownOutputProps) {
  return (
    <OutputContainer>
      MarkdownOutput
    </OutputContainer>
  )
}
