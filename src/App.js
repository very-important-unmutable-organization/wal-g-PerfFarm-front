import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';


export function Header() {
  return (
      <h1>
        WAL-G PerfFarm
      </h1>
  )
}

export function App() {
  const data = [
    {
      name: 1,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 2,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 3,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 4,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 5,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 6,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 7,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
      <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name"/>
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
  )
}
