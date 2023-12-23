import { FC } from 'react'
import { AppProps } from './types'
import Board from './components/board'
import './app.css'

const App: FC<AppProps> = ({ title }) => {
  return (
    <div className="app">
      <h1 className="title">{title}</h1>
      <Board />
    </div>
  )
}

export default App
