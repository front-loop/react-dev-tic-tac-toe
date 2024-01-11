import Game from './components/game'
import './app.css'

interface AppProps {
  title: string
}

const App = ({ title }: AppProps) => {
  return (
    <div className="app">
      <h1 className="title">{title}</h1>
      <Game />
    </div>
  )
}

export default App
