export type SquareValue = string | null

export type WinningSquareValue = {
  square: SquareValue
  line: number[]
}

export interface BoardProps {
  squares: SquareValue[]
  xIsNext: boolean
  onPlay: (squares: SquareValue[]) => void
}

export interface SquareProps {
  value: SquareValue
  isWinner: boolean
  onSquareClick: () => void
}

export interface AppProps {
  title: string
}
