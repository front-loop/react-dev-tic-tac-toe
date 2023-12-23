export type SquareValue = string | null

export interface BoardProps {}

export interface SquareProps {
  value: SquareValue
  onSquareClick: () => void
}

export interface AppProps {
  title: string
}