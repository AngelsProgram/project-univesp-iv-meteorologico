'use client';
import * as Recharts from 'recharts';
import type { TData } from '#/type/schema_info';
type Tsd = Omit<TData, 'date'> & { date: string };

const colors = ["#018FC7", "#83C0DF", "#80B9C8", "#B1D0E2"];

export default function Graph({ data }: { data: Tsd[] }) {
  const id_y_axis_left = 'id_y_axis_left';
  const id_y_axis_right = 'id_y_axis_right';

  return (
    <Recharts.ResponsiveContainer width='100%' height="100%">
      <Recharts.ComposedChart data={data}>
        <Recharts.XAxis dataKey='date' />
        <Recharts.AreaChart data={data} />
        <Recharts.YAxis yAxisId={id_y_axis_left} orientation='left' />
        <Recharts.YAxis yAxisId={id_y_axis_right} orientation='right' />
        <Recharts.Area dataKey='temperatura' fill='#018FC7' yAxisId={id_y_axis_right} />
        <Recharts.Scatter dataKey='orvalho' fill='#B1D0E2' yAxisId={id_y_axis_right} />
        <Recharts.Line dataKey='umidade' yAxisId={id_y_axis_left} fill='blue' />
        <Recharts.Bar dataKey='precipitacao_mm' fill='blue' />
        <Recharts.Tooltip />
        <Recharts.Legend />
      </Recharts.ComposedChart>
    </Recharts.ResponsiveContainer>
  )
}
