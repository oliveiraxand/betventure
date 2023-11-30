export type Bet = {
  id: number,
  userId: number,
  eventId: number,
  selection: string,
  stake: number,
  odds: number,
  status: string
}