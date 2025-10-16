import { dados } from './mdados';
import { schema } from '#/type/schema_info'
import { schema_filter } from "#/type/schema_date";

type T = Record<string, string | string[] | undefined>;

const data = schema.parse(dados);
// d.data; //safeParse

export function getDataFiltered(search: T) {
  const p = schema_filter.parse(search);

  const d = data
    .filter((e) => {
      if (p.s && e.date < p?.s) return false;
      if (p.e && e.date > p?.e) return false;
      return true;
    });

  return d;
}
