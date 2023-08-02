import React from "react";
import MapCard from "./MapCard";

export default function MapFunKey2(props) {
  let data = [
    { StateName: "Gujarat", cityName: "surat", population: 1234 },
    { StateName: "Gujarat", cityName: "surat", population: 1234 },
  ];

  return (
    <div>
      {data.map((e, i) => {
        return <MapCard key={i} data={e} />;
      })}
    </div>
  );
}
