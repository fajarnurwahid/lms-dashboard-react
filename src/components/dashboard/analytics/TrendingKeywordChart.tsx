import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useTheme from "../../../contexts/ThemeContext";

type TrendingKeywordChartProps = {
    categories: string[];
    data: number[];
};

export default function TrendingKeywordChart({
    categories,
    data,
}: TrendingKeywordChartProps) {
    const { theme } = useTheme();
    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            parentHeightOffset: 0,
            foreColor: theme === "dark" ? "#d4d4d4" : "#404040",
        },
        xaxis: {
            categories,
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: "end",
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            theme: theme,
        },
        colors: ["#6366f1"],
        grid: {
            borderColor: theme === "dark" ? "#262626" : "#f5f5f5",
        },
    };
    const series = [
        {
            name: "Total",
            data,
        },
    ];

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height={350}
        />
    );
}
