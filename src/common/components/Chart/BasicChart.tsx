import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./BasicChart.scss";

Chart.register(...registerables);

interface IBasicChartProps {
  labels: string[];
  label: string;
  data: number[];
}

export const BasicChart = ({ labels, label, data }: IBasicChartProps) => {
  //   const [chartData, setChartData] = useState<
  //     {
  //       [key:string]: [{
  //         labels: string[];
  //         label: string;
  //         data: number[];
  //       }];
  //     }[]
  //   >([]);

  //   useEffect(() => {
  //     setChartData([
  //       {[label]:[...chartData[label],{labels:labels, label:label, data:data}] }])
  //   }, [labels, label, data]);
  // console.log(chartData);

  return (
    <div className="chart">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: label,
              data: data,
              backgroundColor: ["#3b945e", "#9c27bo"],
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};
