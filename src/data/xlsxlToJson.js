import xlsx from 'xlsx';
import fs from 'fs';

const workspace = xlsx.readFile('docs/dados.xlsx');
const sheetname = workspace.SheetNames[0]; //"worksheet"
const worksheet = workspace.Sheets[sheetname];
const obj = xlsx.utils.sheet_to_json(worksheet, { raw: false });

fs.writeFileSync('src/data/mdados.js', `export const dados = ${JSON.stringify(obj, null, 2)}`);

console.log('Finished!');