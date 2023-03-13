import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Apple', ps: 4000, pl: 2400, amt: 2400 },
  { name: 'Orange', ps: 3000, pl: 1398, amt: 2210 },
  { name: 'Egg', ps: 2000, pl: 9800, amt: 2290 },
  { name: 'Choclate', ps: 2780, pl: 3908, amt: 2000 },
  { name: 'Rice', ps: 1890, pl: 4800, amt: 2181 },
  { name: 'Wheat', ps: 2390, pl: 3800, amt: 2500 },
  { name: 'Bread', ps: 3490, pl: 4300, amt: 2100 },

];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Bar dataKey="ps" fill="#8884d8" />
        <Bar dataKey="pl" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    
  );
};

export default BarChartComponent;
