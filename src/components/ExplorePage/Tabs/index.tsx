import React, { FC, useState } from "react";
import Button from "@/components/Common/Button";
import List from "@/components/ExplorePage/List";

const TabsComponent: FC<any> = ({ coins, setSearch }) => {
  const [value, setValue] = useState("list");

  return (
    <table className="list-flex">
      {coins.length > 0 ? (
        coins.map((coin: any, i: number) => (
          <List coin={coin} key={i} delay={(i % 8) * 0.2} />
        ))
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, Couldn`&apos;t find the coin you`&apos;re looking for 😞
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Button
              text="Clear Search"
              onClick={() => setSearch("")}
              outlined={undefined}
            />
          </div>
        </div>
      )}
    </table>
  );
};

export default TabsComponent