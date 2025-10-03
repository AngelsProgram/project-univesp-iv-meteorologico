"use client";
import * as Recharts from "recharts";
import type { TData } from '#/type/schema_info';
type Tsd = Omit<TData, 'date'> & { date: string};

type TType = "vento_direcao" | "vento_rajada" | "vento_velocidade";

type TG = Omit<{[key:string]: number | TType | undefined, }, "type"> & { type: TType }

export default function Graph({ data }: { data: Tsd[] }) {
  const dg:TG[] = [
    {type: "vento_direcao"},
    {type: "vento_rajada"},
    {type: "vento_velocidade"},
  ];

  data.forEach(d=>{
    dg.map(t=>{ t[d.date] = d[t.type];});
  });

  return (
    <Recharts.ResponsiveContainer width="100%" height="100%">
      <Recharts.RadarChart data={dg}>
        <Recharts.PolarAngleAxis dataKey="type" />
        <Recharts.PolarRadiusAxis angle={45} domain={[0, 'dataMax']} />
        {data.map((e, i)=>
          <Recharts.Radar name={e.date} dataKey={e.date} fill='#8884d8' fillOpacity={0.5} key={i}/>
        )}
        <Recharts.Legend />
      </Recharts.RadarChart>
    </Recharts.ResponsiveContainer>
  );
}
