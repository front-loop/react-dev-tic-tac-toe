import { SquareValue } from '../types'
import { calculateWinner } from '../utils'
import Square from './square'

interface BoardProps {
  squares: SquareValue[]
  xIsNext: boolean
  onPlay: (squares: SquareValue[]) => void
}

const Board = ({ squares, xIsNext, onPlay }: BoardProps) => {
  const winner = calculateWinner(squares)
  let status

  if (winner) {
    status = 'Winner: ' + winner.square
  } else if (squares.every(Boolean)) {
    status = 'Draw'
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O')
  }

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map((row) => {
        return (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => {
              const idx = 3 * row + col
              const isWinner = !!winner && winner.line.includes(idx)
              return <Square key={idx} value={squares[idx]} isWinner={isWinner} onSquareClick={() => handleClick(idx)} />
            })}
          </div>
        )
      })}
    </>
  )
}

export default Board
