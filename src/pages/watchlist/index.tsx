"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/Common/Button";
import Header from "@/components/Common/Header";
import TabsComponent from "@/components/ExplorePage/Tabs";
import { get100Coins } from "@/functions/get100Coins";

const Watchlist=()=> {
  const watchlist = JSON.parse(localStorage.getItem("watchlist") || "");
  const [coins, setCoins] = useState<any>([]);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin:any) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div>
      <Header />
      {watchlist?.length > 0 ? (
        <TabsComponent coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/">
              <Button text="Dashboard" onClick={()=>{}} outlined={false} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
