import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useTheme from "../../../contexts/ThemeContext";

type TrendingKeywordChartProps = {
    categories: string[];
    data: {
        paid: number[];
        free: number[];
    };
};

export default function EnrollmentRateChart({
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
            categories: categories,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            theme: theme,
        },
        colors: ["#6366f1", "#f97316"],
        fill: {
            colors: ["transparent", "#f97316"],
            type: "gradient",
            gradient: {
                opacityFrom: 0.5,
                opacityTo: 0,
            },
        },
        grid: {
            borderColor: theme === "dark" ? "#262626" : "#f5f5f5",
        },
        stroke: {
            curve: "straight",
            width: 2,
            dashArray: [0, 6],
        },
        markers: {
            size: 4,
            strokeWidth: 2,
            strokeColors: ["#6366f1", "#f97316"],
            colors: [theme === "dark" ? "#171717" : "#fff"],
            radius: 2,
            hover: {
                size: 6,
            },
        },
        legend: {
            fontFamily: "inherit",
            offsetY: 8,
            itemMargin: {
                vertical: 8,
                horizontal: 8,
            },
        },
    };
    const series = [
        {
            name: "Free Course",
            data: data.free,
        },
        {
            name: "Paid Course",
            data: data.paid,
        },
    ];

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="area"
            width="100%"
            height={320}
        />
    );
}
