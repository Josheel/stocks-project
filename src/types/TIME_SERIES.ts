export interface UnformattedCandleStickPoint {
   x: string,
   y: [number, number, number, number] // [open, high, low, close]
}

export interface CandleStickPoint {
   x: Date,
   y: [number, number, number, number] // [open, high, low, close]
}

export function prepareCandleStickData(data: UnformattedCandleStickPoint[]): CandleStickPoint[] {
   return data.map((point: UnformattedCandleStickPoint) => {
      return {
         x: new Date(point.x),
         y: point.y
      }
   })
}
