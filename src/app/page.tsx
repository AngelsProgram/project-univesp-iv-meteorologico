'use client';
import '#/styles/graph.css'
import { data } from '#/data';
import { ChatPrecipitacao } from '#/components/precitipacao';

export default function Page(props: PageProps<"/">) {

  return (
    <div className='graph'>
      <ChatPrecipitacao data={data} />
    </div>
  )
}
