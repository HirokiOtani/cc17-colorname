import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  ScatterChart,
} from "recharts";

export const ColorSpace = () => {
  const data = [{ uv: 400 }, { uv: 200 }, { uv: 500 }];
  return (
    <ScatterChart
      width={730}
      height={250}
      margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
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
