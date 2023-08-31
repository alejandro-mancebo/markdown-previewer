import { useState } from 'react'
import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide'
import MarkdownInput from './components/MarkdownInput'
import MarkdownOutput from './components/MarkdownOutput'
import styled from 'styled-components'

import './App.css'

const DisplayContainer = styled.div<{ $diplayMarkdownGuide: boolean; }>`
  display: flex;
  margin: ${props => props.$diplayMarkdownGuide === false ? "5rem 0 0" : "0"};
`

function App() {
  const [diplayMarkdownGuide, setDisplayMarkdownGuide] = useState(true)

  const displayFunction = () => {
    setDisplayMarkdownGuide(!diplayMarkdownGuide)
  }

  return (
    <>
      <Header onToggleGuide={displayFunction} />
      {diplayMarkdownGuide && <MarkdownGuide />}
      <DisplayContainer $diplayMarkdownGuide>
        < MarkdownInput />
        < MarkdownOutput />
      </DisplayContainer>
    </>
  )
}

export default App
