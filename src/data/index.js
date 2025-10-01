import { dados } from './mdados.js';
import { schema } from '../type/schema_info.js'

const data = schema.parse(dados);
// d.data; //safeParse

export { data }
console.log('Parsed Date.');
