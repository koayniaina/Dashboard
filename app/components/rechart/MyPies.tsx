'use client'
import React from 'react'
import { FaFemale } from 'react-icons/fa';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const Male = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];

const Female = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ];
export default function MyPies() {
  return (
    <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
    <PieChart width={400} height={400}>
          <Pie data={Male} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label/>
          <Pie data={Female} dataKey="value" cx="50%" cy="50%" innerRadius={70}  fill="#82ca9d" label />
        </PieChart>
    </ResponsiveContainer>
  </div>
  )
}
