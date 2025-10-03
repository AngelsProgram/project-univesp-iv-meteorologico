import { getDataFiltered } from '#/data';
import Graph from './precitipacao';

export default async function Page(props: PageProps<"/">) {
  const search = await props.searchParams;
  const d = getDataFiltered(search);

  return <Graph data={d}/>;
}
