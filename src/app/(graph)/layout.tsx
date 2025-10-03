import "#/styles/graph.css";
import { Filter } from "#/components/filter";

export default function Layout(props: LayoutProps<"/">) {
  return (
    <>
      <Filter />
      <div className="graph">{props.children}</div>
    </>
  );
}
