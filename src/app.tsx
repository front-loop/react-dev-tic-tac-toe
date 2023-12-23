import { FC } from 'react'
import { AppProps } from './types'
import Game from './components/game'
import './app.css'

const App: FC<AppProps> = ({ title }) => {
  return (
    <div className="app">
      <h1 className="title">{title}</h1>
      <Game />
    </div>
  )
}

export default App
