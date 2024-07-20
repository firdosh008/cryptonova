import React, { FC, useCallback, useEffect, useState } from "react";
import { get100Coins } from "@/functions/get100Coins";
import { getCoinData } from "@/functions/getCoinData";
import { settingCoinObject } from "@/functions/settingCoinObject";
import { getPrices } from "@/functions/getPrices";
import { settingChartData } from "@/functions/settingChartData";
import Header from "@/components/Common/Header";
import Loader from "@/components/Common/Loader";
import SelectCoins from "@/components/HomePage/SelectCoins";
import List from "@/components/ExplorePage/List";
import ToggleComponents from "@/components/CoinPage/ToggleComponent";
import LineChart from "@/components/CoinPage/LineChart";
import Info from "@/components/CoinPage/Info";

const Home: FC = () => {
  const [allCoins, setAllCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  // id states
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  // data states
  const [coin1Data, setCoin1Data] = useState<any>({});
  const [coin2Data, setCoin2Data] = useState<any>({});
  // days state
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const getData = useCallback(async () => {
    setLoading(true);
    const coins = await get100Coins();
    if (coins) {
      setAllCoins(coins);
      const data1 = await getCoinData(crypto1,false);
      const data2 = await getCoinData(crypto2,false);
      settingCoinObject(data1, setCoin1Data);
      settingCoinObject(data2, setCoin2Data);
      if (data1 && data2) {
        // getPrices
        const prices1 = await getPrices(crypto1, days, priceType,false);
        const prices2 = await getPrices(crypto2, days, priceType,false);
        settingChartData(setChartData, prices1, prices2);
        setLoading(false);
      }
    }
  }, [crypto1, crypto2, days, priceType]);

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, [getData]);

  const onCoinChange = async (e: any, isCoin2: boolean) => {
    setLoading(true);
    if (isCoin2) {
      const newCrypto2 = e.target.value;
      // crypto2 is being changed
      setCrypto2(newCrypto2);
      // fetch coin2 data
      const data2 = await getCoinData(newCrypto2,e);
      settingCoinObject(data2, setCoin2Data);
      // fetch prices again
      const prices1 = await getPrices(crypto1, days, priceType,e);
      const prices2 = await getPrices(newCrypto2, days, priceType,e);
      settingChartData(setChartData, prices1, prices2);
    } else {
      const newCrypto1 = e.target.value;
      // crypto1 is being changed
      setCrypto1(newCrypto1);
      // fetch coin1 data
      const data1 = await getCoinData(newCrypto1,e);
      settingCoinObject(data1, setCoin1Data);
      // fetch coin prices
      const prices1 = await getPrices(newCrypto1, days, priceType,e);
      const prices2 = await getPrices(crypto2, days, priceType,e);
      settingChartData(setChartData, prices1, prices2);
    }
    setLoading(false);
  };

  const handleDaysChange = async (e: any) => {
    const newDays = e.target.value;
    setLoading(true);
    setDays(newDays);
    const prices1 = await getPrices(crypto1, newDays, priceType,e);
    const prices2 = await getPrices(crypto2, newDays, priceType,e);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handlePriceTypeChange = async (e: any) => {
    const newPriceType = e.target.value;
    setLoading(true);
    setPriceType(newPriceType);
    const prices1 = await getPrices(crypto1, days, newPriceType,e);
    const prices2 = await getPrices(crypto2, days, newPriceType,e);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading || !coin1Data?.id || !coin2Data?.id ? (
        <Loader />
      ) : (
        <>
          <SelectCoins
            allCoins={allCoins}
            crypto1={crypto1}
            crypto2={crypto2}
            onCoinChange={onCoinChange}
            days={days}
            handleDaysChange={handleDaysChange}
          />
          <div className="grey-wrapper">
            <List coin={coin1Data} delay={""} />
          </div>
          <div className="grey-wrapper">
            <List coin={coin2Data} delay={""} />
          </div>
          <div className="grey-wrapper">
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} multiAxis={true} />
          </div>
          <Info title={coin1Data.name} desc={coin1Data.desc} />
          <Info title={coin2Data.name} desc={coin2Data.desc} />
        </>
      )}
    </div>
  );
};

export default Home;
