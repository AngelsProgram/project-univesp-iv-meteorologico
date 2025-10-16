"use client";
import * as Recharts from "recharts";
import type { TData } from '#/type/schema_info';

type Tsd = Omit<TData, 'date'> & { date: string };

export default function Graph({ data }: { data: Tsd[] }) {
  return (
    <Recharts.ResponsiveContainer width="100%" height="100%">
      <Recharts.LineChart data={data}>
        <Recharts.XAxis dataKey='date' />
        <Recharts.YAxis />
        <Recharts.Tooltip />
        <Recharts.Legend />
        <Recharts.Line dataKey='vento_velocidade' strokeDasharray='5 5' />
      </Recharts.LineChart>
    </Recharts.ResponsiveContainer>
  );
}
