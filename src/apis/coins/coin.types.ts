export interface CoinStats {
  total: number | undefined;
  total24hVolume: string | undefined;
  totalCoins: number | undefined;
  totalExchanges: number | undefined;
  totalMarketCap: string | undefined;
  totalMarkets: number | undefined;
}

export interface Coin {
  "24hVolume": string | undefined;
  btcPrice: string | undefined;
  change: string | undefined;
  coinrankingUrl: string | undefined;
  color: string | undefined;
  iconUrl: string | undefined;
  listedAt: number | undefined;
  lowVolume: boolean | undefined;
  marketCap: string | undefined;
  name: string | undefined;
  price: string | undefined;
  rank: number | undefined;
  symbol: string | undefined;
  tier: number | undefined;
  uuid: string | undefined;
}

export interface CoinHistroy {
  price: string;
  timestamp: number;
}
