import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useTheme from "../../../contexts/ThemeContext";

export default function PayoutChart() {
    const { theme } = useTheme();

    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            parentHeightOffset: 0,
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        labels: ["Paid", "Unpaid"],
        colors: ["#4f46e5", "#fdba74"],
        stroke: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "80%",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            fontFamily: "inherit",
                            fontSize: "16px",
                            color: theme === "dark" ? "#d4d4d4" : "#404040",
                            formatter(w) {
                                return `$${w.globals.seriesTotals.reduce(
                                    (a: number, b: number) => {
                                        return a + b;
                                    },
                                    0
                                )}`;
                            },
                        },
                        value: {
                            fontFamily: "inherit",
                            fontSize: "24px",
                            fontWeight: 600,
                            color: theme === "dark" ? "#f5f5f5" : "#171717",
                        },
                    },
                },
            },
        },
        tooltip: {
            y: {
                formatter(val) {
                    return `$${val}`;
                },
            },
        },
    };
    const series = [44, 55];

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width="100%"
        />
    );
}
