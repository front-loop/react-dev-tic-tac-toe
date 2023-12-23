import { FC, useState } from 'react'
import { SquareValue } from '../types'
import Board from './board'

const Game: FC = () => {
  const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  const moves = history.map((_, idx) => {
    let description
    if (idx > 0) {
      description = 'Go to move #' + idx
    } else {
      description = 'Go to game start'
    }

    return (
      <li key={idx}>
        <button onClick={() => jumpTo(idx)}>{description}</button>
      </li>
    )
  })

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
  }

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
