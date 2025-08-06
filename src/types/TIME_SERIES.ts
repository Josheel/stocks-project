export interface UnformattedCandleStickPoint {
   x: string,
   y: [number, number, number, number] // [open, high, low, close]
}

export interface CandleStickPoint {
   x: Date,
   y: [number, number, number, number] // [open, high, low, close]
}

export interface ApexCandleSeries  {
   data: CandleStickPoint[]
}

export function prepareCandleStickData(unformattedData: UnformattedCandleStickPoint[]): { data : CandleStickPoint[] } {
   return {
      data :unformattedData.map((point: UnformattedCandleStickPoint) => {
         return {
            x: new Date(point.x),
            y: point.y
         }
      })
   }
}
