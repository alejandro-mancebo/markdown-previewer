import { useState } from 'react'
import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide'
import MarkdownInput from './components/MarkdownInput'
import MarkdownOutput from './components/MarkdownOutput'

import styled from 'styled-components'

import './App.css'

const DisplayContainer = styled.div<{ $showGuide: boolean; }>`
  display: flex;
  margin: 5rem 0 0
`
// margin-top: ${props => props.$showGuide === true ? "5rem" : "5rem"};

function App() {
  const [showGuide, setShowGuide] = useState(false);
  const [markdown, setMarkdown] = useState(`# Hello World`);

  const displayFunction = () => {
    setShowGuide(!showGuide)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  }


  return (
    <>
      <Header onToggleGuide={displayFunction} />
      {showGuide && <MarkdownGuide />}
      <DisplayContainer $showGuide>
        < MarkdownInput value={markdown} onChange={handleChange} />
        < MarkdownOutput markdown={markdown} />
      </DisplayContainer>
    </>
  )
}

export default App
