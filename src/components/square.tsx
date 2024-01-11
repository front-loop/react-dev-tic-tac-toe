import { SquareValue } from '../types'

interface SquareProps {
  value: SquareValue
  isWinner: boolean
  onSquareClick: () => void
}

const Square = ({ value, isWinner, onSquareClick }: SquareProps) => {
  return (
    <button className={`square ${isWinner ? 'winner' : ''}`} onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
