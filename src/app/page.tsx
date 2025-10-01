'use client';
import * as Recharts from 'recharts';
import { data } from '#/data/dados';

export default function Page(props: PageProps<"/">) {
  const id_y_axis_left = 'id_y_axis_left';
  const id_y_axis_right = 'id_y_axis_right';

  return (
    <Recharts.ResponsiveContainer width='100%' height={500}>
      <Recharts.ComposedChart data={data}>
        <Recharts.XAxis dataKey='data' />
        <Recharts.YAxis yAxisId={id_y_axis_left} orientation='left' />
        <Recharts.YAxis yAxisId={id_y_axis_right} orientation='right' />
        <Recharts.Bar dataKey='precipitacao' yAxisId={id_y_axis_left} />
        <Recharts.Line dataKey='temperatura' yAxisId={id_y_axis_right} />
        <Recharts.Tooltip />
        <Recharts.Legend />
      </Recharts.ComposedChart>
    </Recharts.ResponsiveContainer>
  )
}
