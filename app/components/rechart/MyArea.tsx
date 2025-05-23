"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    name: "jan",
    student: 1140,
    teacher: 490,
  },
  {
    name: "fev",
    student: 1390,
    teacher: 290,
  },
  {
    name: "mar",
    student: 220,
    teacher: 1000,
  },
  {
    name: "apr",
    student: 2110,
    teacher: 200,
  },
  {
    name: "may",
    student: 1190,
    teacher: 800,
  },
  {
    name: "jun",
    student: 1290,
    teacher: 700,
  },
  {
    name: "jul",
    student: 290,
    teacher: 1200,
  },

  {
    name: "aug",
    student: 450,
    teacher: 700,
  },

  {
    name: "sep",
    student: 280,
    teacher: 890,
  },
  {
    name: "oct",
    student: 490,
    teacher: 300,
  },
  {
    name: "nov",
    student: 290,
    teacher: 190,
  },
  {
    name: "Dec",
    student: 90,
    teacher: 800,
  },
];

export default function MyArea() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="teacher" fill="#8884d8" />
        <Area type="monotone" dataKey="student" fill="#1784f3" />
      </AreaChart>
    </ResponsiveContainer>
    //{" "}
  );
}
