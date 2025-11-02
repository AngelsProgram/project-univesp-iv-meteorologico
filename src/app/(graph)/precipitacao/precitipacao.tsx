'use client';
import * as Recharts from 'recharts';
import type { TData } from '#/type/schema_info';
type Tsd = Omit<TData, 'date'> & { date: string };

export default function Graph({ data }: { data: Tsd[] }) {
  const id_y_axis_left = 'id_y_axis_left_umidade';
  const id_y_axis_right = 'id_y_axis_right_precipitacao';

  return (
    <Recharts.ResponsiveContainer width='100%' height="100%">
      <Recharts.ComposedChart data={data}>
        <Recharts.XAxis dataKey='date' />
        <Recharts.YAxis yAxisId={id_y_axis_left} orientation='left' />
        <Recharts.YAxis yAxisId={id_y_axis_right} orientation='right' />
        <Recharts.Line dataKey='umidade' yAxisId={id_y_axis_left} fill='blue' />
        <Recharts.Bar dataKey='precipitacao_mm' yAxisId={id_y_axis_right} fill='blue' />
        <Recharts.Tooltip />
        <Recharts.Legend />
      </Recharts.ComposedChart>
    </Recharts.ResponsiveContainer>
  )
}
