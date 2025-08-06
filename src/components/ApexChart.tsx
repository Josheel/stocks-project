import { ApexCandleSeries, CandleStickPoint } from "../types/TIME_SERIES";
import Chart from 'react-apexcharts';

type ApexChartProps = {
    series: ApexCandleSeries
}

const ApexChart: React.FC<ApexChartProps> = ({ series }) => {

  const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'candlestick' as const,
            height: 350,
            background: '#0f1115',
            toolbar: {
            show: true,
            },
        },
        title: {
            text: 'Candlestick Chart',
            align: 'left',
            style: {
            color: '#fff',
            },
        },
        xaxis: {
            type: 'datetime' as const,
            labels: {
            style: { colors: '#ccc' },
            },
        },
        yaxis: {
            tooltip: {
            enabled: true,
            },
            labels: {
            style: { colors: '#ccc' },
            },
        },
        theme: {
            mode: 'dark' as const,
        },
    };
    
 
    return (
         <div>
            <Chart options={options} series={ [series] } type="candlestick" height={350} />
        </div>
    )
}

export default ApexChart;