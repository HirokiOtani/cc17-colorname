import React from "react";
import {
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Scatter,
  ScatterChart,
  Cell,
} from "recharts";
import dbtype2xy from "./helper/dbtype2xy";

export const ColorSpace = (props) => {
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
      style={{ position: "absolute", right: 0, top: 10 }}
    >
      <XAxis type="number" dataKey="x" hide={true} />
      <YAxis type="number" dataKey="y" hide={true} />
      <ZAxis type="string" dataKey="name" />
      <Scatter data={xys} fill="#8884d8">
        {xys.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.hex} />
        ))}
        {/* <LabelList dataKey="name" /> */}
      </Scatter>
      <Tooltip
        cursor={{
          strokeDasharray: "1 100",
        }}
        content={<CustomTooltip />}
      />
    </ScatterChart>
  );
};
