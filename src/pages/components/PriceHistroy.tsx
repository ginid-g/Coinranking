import { useEffect, useState } from "react";
import { getCoinPriceHistroy } from "../../apis/coins/coin";
import { CoinHistroy } from "../../apis/coins/coin.types";
import dayjs from "dayjs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartInitialValue = { price: "24805.81609477681", timestamp: 1678881900 };

const PriceHistroy = (props: { uuid: string; coinName: string }) => {
  const [data, setData] = useState<CoinHistroy[]>([chartInitialValue]);

  useEffect(() => {
    getCoinPriceHistroy(props.uuid).then((response) => {
      setData(response.data.data.history);
    });
  }, [props.uuid]);

  return (
    <div className="card border-0">
      <div className="card-header bg-white border-0">
        <h4>{props.coinName} 24 hours histroy</h4>
      </div>
      <div className="card-body text-center p-4 m-5 border-0">
        <Line
          data={{
            labels: data.map((history) =>
              dayjs.unix(history.timestamp).format("DD-MM-YYYY hh:mm")
            ),
            datasets: [
              {
                label: "Price",
                data: data.map((history) => parseFloat(history.price)),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default PriceHistroy;
