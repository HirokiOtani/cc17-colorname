import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Scatter,
  ScatterChart,
  Cell,
  LabelList,
} from "recharts";
import dbtype2xy from "./helper/dbtype2xy";

export const ColorSpace = (props) => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  const colors = props.colors;
  const xys = colors.map((color) => {
    const [x, y] = dbtype2xy(color);
    return { name: color.name, x: x, y: y, hex: color.hex };
  });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custome-tooltip">
          <p className="label">{`${payload[2].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ScatterChart
      width={500}
      height={500}
      margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
    >
      <XAxis type="number" dataKey="x" />
      <YAxis type="number" dataKey="y" />
      <ZAxis type="string" dataKey="name" />
      <Scatter data={xys} fill="#8884d8">
        {xys.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.hex} />
        ))}
        {/* <LabelList dataKey="name" /> */}
      </Scatter>
      <Tooltip
        cursor={{
          strokeDasharray: "3 3",
        }}
        content={<CustomTooltip />}
      />
    </ScatterChart>
    // <LineChart
    //   width={400}
    //   height={400}
    //   data={data}
    //   margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    // >
    //   <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    //   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    //   <XAxis />
    //   <YAxis />
    //   <Tooltip />
    // </LineChart>
  );
};
