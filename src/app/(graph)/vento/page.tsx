import { getDataFiltered } from '#/data';
import Graph from './graph';

export default async function Page(props: PageProps<"/">) {
  const search = await props.searchParams;
  const d = getDataFiltered(search);

  return (
    <>
      <h2>Gráfico maior rajada de vento no dia</h2>
      <Graph data={d} />
    </>
  );

}
