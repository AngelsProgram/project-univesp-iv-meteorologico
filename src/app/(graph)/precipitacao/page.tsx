import { data } from "#/data";
import { schema_filter } from "#/type/schema_date";

import Graph from './precitipacao';

export default async function Page(props: PageProps<"/">) {
  const search = await props.searchParams;
  const p = schema_filter.parse(search);
  
  const d = data
    .filter((e) => {
      if (p.s && e.date < new Date(p?.s).getTime()) return false;
      if (p.e && e.date > new Date(p?.e).getTime()) return false;
      return true;
    })
    .map((e) => ({
      ...e,
      date: new Date(e.date).toISOString().slice(0, 13) + "h",
    }));

  return <Graph data={d}/>;
}
