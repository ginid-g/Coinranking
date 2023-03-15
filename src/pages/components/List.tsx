import { Coin } from "../../apis/coins/coin.types";

const List = (props: { coins: Coin[]; onSelect: Function }) => {
  const listItems = props.coins.map((coin: Coin) => {
    return (
      <tr key={coin.uuid}>
        <td className="text-center">
          <img src={coin.iconUrl} alt={coin.name} width="50px" />
          <span className="ms-3">{coin.name}</span>
        </td>
        <td>${coin.price}</td>
        <td>{coin["24hVolume"]}</td>
        <td>
          <a href={coin.coinrankingUrl}>View on Coin Ranking Website</a>
        </td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => props.onSelect(coin.uuid, coin.name)}
          >
            Show Price Histroy
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Price</th>
          <th>Volume</th>
          <th>Website</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{listItems}</tbody>
    </table>
  );
};
export default List;
