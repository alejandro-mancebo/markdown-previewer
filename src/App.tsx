import { useState } from 'react'
import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fun = () => {

  }

  return (
    <>
      <Header onToggleGuide={fun} />
      <MarkdownGuide />
    </>
  )
}

export default App
