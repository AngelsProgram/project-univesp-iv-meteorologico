
import { dados } from './mdados';
import { schema } from '#/type/schema_info'

const data = schema.parse(dados);
// d.data; //safeParse

export { data }
console.log('Parsed Date.');
