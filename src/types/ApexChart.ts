import { ApexSeries } from '../types/TIME_SERIES';

export type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'boxPlot'
  | 'radar'
  | 'polarArea'
  | 'rangeBar'
  | 'rangeArea'
  | 'treemap';

 export type ApexChartProps = {
   ApexSeriesData: ApexSeries,
   chartType: ChartType
}