import styled from 'styled-components'

const GuideContainer = styled.div`
  margin: 5rem 0 .2rem;
  padding: 1rem;
  background-color: #FFFFE8;
  border: 1px solid #D8D8D7; 

  li {
    font-size: 1.2em;
  }
`

export default function MarkdownGuide() {
  return (
    <GuideContainer>
      <h2>Markdown Cheat Sheet</h2>
      <code>
        <ul>
          <li># H1</li>
          <li>## H2</li>
          <li>### H3</li>
          <li>**bold**</li>
          <li>*italic*</li>
          <li>[Link](http://a.com)</li>
          <li>![Image](http://url/a.png)</li>
          <li>`inline code`</li>
          <li>```block code```</li>
          <li>- list item</li>
        </ul>










      </code>
    </GuideContainer>
  )
}
