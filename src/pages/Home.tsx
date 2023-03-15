import { useState, useEffect } from "react";
import { getCointList } from "../apis/coins/coin";
import { CoinStats, Coin } from "../apis/coins/coin.types";

import Stats from "./components/Stats";
import List from "./components/List";
import PriceHistroy from "./components/PriceHistroy";

import Modal from "react-bootstrap/Modal";

const initialStats: CoinStats = {
  total: undefined,
  total24hVolume: undefined,
  totalCoins: undefined,
  totalExchanges: undefined,
  totalMarketCap: undefined,
  totalMarkets: undefined,
};

const Home = () => {
  const [stats, setStats] = useState<CoinStats>(initialStats);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [showHistroy, setShowHistroy] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [coinName, setCoinName] = useState("");

  const hideHistroy = () => {
    setSelectedCoin("");
    setShowHistroy(false);
  };

  const showHistroyModal = (uuid: string, name: string) => {
    setSelectedCoin(uuid);
    setCoinName(name);
    setShowHistroy(true);
  };

  useEffect(() => {
    getCointList().then((respose) => {
      setStats(respose.data.data.stats);
      setCoins(respose.data.data.coins);
    });
  }, []);

  return (
    <>
      <Stats {...stats} />
      <List
        coins={coins}
        onSelect={(uuid: string, name: string) => showHistroyModal(uuid, name)}
      />

      <Modal
        show={showHistroy}
        onHide={hideHistroy}
        size="xl"
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Body>
          <PriceHistroy uuid={selectedCoin} coinName={coinName} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
