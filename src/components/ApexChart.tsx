import Chart from 'react-apexcharts';
import { ApexChartProps } from "../types/ApexChart";


const ApexChart: React.FC<ApexChartProps> = ({ ApexSeriesData, chartType }) => {

  const options: ApexCharts.ApexOptions = {
        chart: {
            type: chartType,
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

    if(Object.prototype.hasOwnProperty.call(ApexSeriesData, chartType)) {
        return (
            <div>
                <Chart options={options} series={ [ApexSeriesData[chartType as keyof typeof ApexSeriesData]] } type={chartType} height={350} width={750} />
            </div>
        )
    }
    
    return <div>Unsupported chart type: {chartType}</div>
}

export default ApexChart;