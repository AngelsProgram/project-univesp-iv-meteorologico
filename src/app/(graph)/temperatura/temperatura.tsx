'use client';
import * as Recharts from 'recharts';
import type { TData } from '#/type/schema_info';
type Tsd = Omit<TData, 'date'> & { date: string };

const colors = ["#018FC7", "#83C0DF", "#80B9C8", "#B1D0E2"];

export default function Graph({ data }: { data: Tsd[] }) {
  console.log(data)
  return (
    <Recharts.ResponsiveContainer width='100%' height="100%">
      <Recharts.ComposedChart data={data}>
        <Recharts.XAxis dataKey='date' />
        <Recharts.AreaChart data={data} />
        <Recharts.YAxis yAxisId='left' orientation='left' />
        <Recharts.Area dataKey='temp_max' fill='#FCC800' yAxisId='left' />
        <Recharts.Area dataKey='temperatura' fill='#CFD800' yAxisId='left' />
        <Recharts.Area dataKey='temp_min' fill='#018FC7' yAxisId='left' />
        <Recharts.Tooltip />
        <Recharts.Legend />
      </Recharts.ComposedChart>
    </Recharts.ResponsiveContainer>
  )
}
