export interface UnformattedCandleStickPoint {
   x: string,
   y: [number, number, number, number] // [open, high, low, close]
}

export interface CandleStickPoint {
   x: Date,
   y: [number, number, number, number] // [open, high, low, close]
}

export interface UnformattedLineDataPoint {
   x: string,
   y: number
}

export interface LineDataPoint {
   x: Date,
   y: number
}

export interface UnformattedSeriesData {
   candlestick: UnformattedCandleStickPoint[],
   line: UnformattedLineDataPoint[]
}

export interface ApexSeries  {
   candlestick: {
      data: CandleStickPoint[]
   },
   line: {
      data: LineDataPoint[]
   } 
}

export function prepareApexSeriesData(unformattedData: UnformattedSeriesData): ApexSeries {
   return {
      candlestick: { 
         data :unformattedData.candlestick.map((point: UnformattedCandleStickPoint) => {
            return {
               x: new Date(point.x),
               y: point.y
            }
         })
      },
      line: {
         data: unformattedData.line.map((point: UnformattedLineDataPoint) => {
            return {
               x: new Date(point.x),
               y: point.y
            }
         })
      }
   }
}
