"use client";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Total",
    uv: 113,
    fill: "#ffffff",
  },
  {
    name: "Girls",
    uv: 50,
    fill: "#8884d8",
  },
  {
    name: "Male",
    uv: 63,
    fill: "#83a6ed",
  },
];

export default function MyPies() {
  return (
    <div style={{ height: 280 }}>
      <ResponsiveContainer >
        <RadialBarChart barSize={25} data={data} className="flex items-center">
          <p>Student</p>
          <RadialBar background dataKey="uv" />
          <Legend  />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
