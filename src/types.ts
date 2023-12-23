export type SquareValue = string | null

export interface BoardProps {
  squares: SquareValue[]
  xIsNext: boolean
  onPlay: (squares: SquareValue[]) => void
}

export interface SquareProps {
  value: SquareValue
  onSquareClick: () => void
}

export interface AppProps {
  title: string
}
