import xlsx from 'xlsx';
import fs from 'fs';

import { schema } from './schema_info.js';

const workspace = xlsx.readFile('docs/dados.xlsx');
const sheetname = workspace.SheetNames[0]; //"worksheet"
const worksheet = workspace.Sheets[sheetname];
const jsa = xlsx.utils.sheet_to_json(worksheet, { raw: false });

function safeSum(a, b){
    const _a =isNaN(a)?0:a;
    const _b =isNaN(b)?0:b;
    return _a+_b;
}

function rN(e){
    const v = isNaN(e)?0:e;
    return v;
}

function min(a, b){
    const _a = rN(a);
    const _b = rN(b);
    const v = Math.min.apply(null, [_a, _b].filter(Boolean));
    return v;
}

const obj = schema.parse(jsa).reduce((acc, current, index, array)=>{
    const d = new Date(current.date).toISOString().slice(0, 10); // d.getMonth(); // d.getDate();
    if(!acc[d]){
        acc[d] = {
            date: d,
            precipitacao_mm: 0,
            umidade: 0,
            temperatura: 0,
            orvalho: 0,
        }
    }

    acc[d].precipitacao_mm = safeSum(current.precipitacao_mm, acc[d].precipitacao_mm);
    acc[d].umidade = (safeSum(acc[d].umidade + current.umidade)/2);
    acc[d].temperatura = min(acc[d].temperatura, current.temp_min);
    acc[d].orvalho = Math.max(acc[d].orvalho, rN(current.tem_orvalho_max));
    acc[d].vento_velocidade = safeSum(current.vento_velocidade, acc[d].vento_velocidade);

    return acc;
}, {});

// fs.writeFileSync('src/data/mdados.js', `export const dados = ${JSON.stringify(jsa, null, 2)}`);
fs.writeFileSync('src/data/mdados.js', `export const dados = ${JSON.stringify(Object.values(obj), null, 2)}`);

console.log('Finished!');
