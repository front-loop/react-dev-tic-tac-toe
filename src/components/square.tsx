import { FC } from 'react'
import { SquareValue } from '../types'

interface SquareProps {
  value: SquareValue
  isWinner: boolean
  onSquareClick: () => void
}

const Square: FC<SquareProps> = ({ value, isWinner, onSquareClick }) => {
  return (
    <button className={`square ${isWinner && 'winner'}`} onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
