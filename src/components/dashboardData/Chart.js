import { Bar } from "react-chartjs-2";
import {Chart, LinearScale, CategoryScale, BarElement,Legend,Title, Tooltip } from "chart.js"
Chart.register(
    LinearScale, CategoryScale, BarElement,Legend,Title, Tooltip
)

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const options = {
    plugins:{
        legend:{
           position:"top"
        },
        title:{
            display:true,
            text:"Expence Tracker"
        }
    }
}

const data = {
  labels,
  datasets: [
    {
      label: "2020 Expense",
      data: [ 10000, 9000, 8000, 10200, 10500, 8400, 13000, 8900, 14600, 17000, 9000, 12500, ],
      backgroundColor: "rgb(19, 110, 146)",
    },
    {
      label: "2021 Expense",
      data: [ 17000, 11000, 12500, 11000, 12100, 7500, 13800, 8100, 9600, 10000,
        11000, 8000,
      ],
      backgroundColor: "gray",
    },
  ],
};

function App() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
export default App;