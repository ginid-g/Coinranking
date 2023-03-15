import { CoinStats } from "../../apis/coins/coin.types";
import styles from "./Stats.module.css";

const Stats = (props: CoinStats) => {
  return (
    <>
      <div className="row text-center">
        <div className="col-md-3 mx-auto my-3">
          <div className={"card border-0 py-4 " + styles["bg-purple"]}>
            <div className="card-body">
              <span className={styles["card-title"]}>All Coins</span>
              <span className={styles["main-content"]}>{props.totalCoins}</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 mx-auto my-3">
          <div className={"card border-0 py-4 " + styles["bg-blue"]}>
            <div className="card-body">
              <span className={styles["card-title"]}>Total Coin</span>
              <span className={styles["main-content"]}>{props.total}</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 mx-auto my-3">
          <div className={"card border-0 py-4 " + styles["bg-green"]}>
            <div className="card-body">
              <span className={styles["card-title"]}>Total Exchanges</span>
              <span className={styles["main-content"]}>
                {props.totalExchanges}
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-3 mx-auto my-3">
          <div className={"card border-0 py-4 " + styles["bg-aqua"]}>
            <div className="card-body">
              <span className={styles["card-title"]}>Total Markets</span>
              <span className={styles["main-content"]}>
                {props.totalMarkets}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
