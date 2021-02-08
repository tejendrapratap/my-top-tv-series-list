import React from "react";
import Cards from "./Cards";
import Data from "./Data";

const App = () => (
  <>
    <h1 className="heading__style">My Favourite T.V. Shows in Order</h1>
    {Data.map((val) => {
      return (
        <Cards
          key={val.id}
          imgsrc={val.imgsrc}
          stype={val.stype}
          stitle={val.stitle}
          slink={val.slink}
        />
      );
    })}
  </>
);

export default App;
