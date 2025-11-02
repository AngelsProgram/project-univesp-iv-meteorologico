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

function safeNumber(e){
    const v = isNaN(e)?0:e;
    return v;
}

function safeMin(a, b){
    const _a = safeNumber(a);
    const _b = safeNumber(b);
    const v = Math.min.apply(null, [_a, _b].filter(Boolean));
    return v;
}

function safeMax(a, b){
    const _a = safeNumber(a);
    const _b = safeNumber(b);
    const v = Math.max(_a, _b);
    return v;
}

const obj = schema.parse(jsa).reduce((acc, current, index, array)=>{
    const d = new Date(current.date).toISOString().slice(0, 10); // d.getMonth(); // d.getDate();
    if(!acc[d]){
        acc[d] = {
            date: d,
            precipitacao_mm: 0,
            umidade: 0,
            temp_max: 0,
            temp_min: 0,

            temperatura: 0,
            orvalho: 0,
        }
    }
    // Chuva
    acc[d].precipitacao_mm = safeSum(current.precipitacao_mm, acc[d].precipitacao_mm);
    acc[d].umidade = (safeSum(acc[d].umidade + current.umidade)/2);
    // Temperatura
    acc[d].temp_max = safeMax(acc[d].temp_max, current.temp_max);
    acc[d].temp_min = safeMin(acc[d].temp_min, current.temp_min);
    // vento
    acc[d].vento_velocidade = safeMax(acc[d].vento_velocidade, current.vento_velocidade);
    // A chance de chuva está ligada a temperatura_orvalho_minima alcança temperatura_bulbo
    acc[d].temperatura = safeMin(acc[d].temperatura, current.temp_min);
    acc[d].orvalho = Math.max(acc[d].orvalho, safeNumber(current.tem_orvalho_max));

    return acc;
}, {});

// fs.writeFileSync('src/data/mdados.js', `export const dados = ${JSON.stringify(jsa, null, 2)}`);
fs.writeFileSync('src/data/mdados.js', `export const dados = ${JSON.stringify(Object.values(obj), null, 2)}`);

console.log('Finished!');
