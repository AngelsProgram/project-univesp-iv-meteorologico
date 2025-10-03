import '#/styles/graph.css'
import { data } from '#/data';
import { Filter } from '#/components/filter';
import { ChatPrecipitacao } from '#/components/precitipacao';
import { schema_filter } from '#/type/schema_date';

export default async function Page(props: PageProps<"/">) {
  const search = await props.searchParams;
  const p = schema_filter.parse(search);

  const d = data.filter(e=>{
    if(p.s && (e.date<new Date(p?.s).getTime())) return false;
    if(p.e && (e.date>new Date(p?.e).getTime())) return false;
    return true;
  }).map(e=>({...e, date: new Date(e.date).toISOString().slice(0, 13)+'h'}));

  return (
    <>
      <Filter />
      <div className='graph'>
        <ChatPrecipitacao data={d} />
      </div>
    </>
  )
}
