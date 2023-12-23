import { FC } from 'react'
import { SquareProps } from '../types'

const Square: FC<SquareProps> = ({ value, isWinner, onSquareClick }) => {
  return (
    <button className={`square ${isWinner && 'winner'}`} onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
