import * as zod from 'zod';

// const safe_corce_number = zod.z.preprocess((v)=>{
//     const n = Number(v);
//     return isNaN(n)?undefined:n;
//     if(typeof v ==='number') return v
//     if(typeof val=="string") return Number.parseFloat(v)
// }, zod.z.coerce.number()).optional();

const corce_number = zod.z.coerce.number().optional();

const schema_info = zod.z.object({
    id: corce_number,
    date: zod.z.coerce.date(),
    time_UTC: zod.z.string(),
    precipitacao_mm: corce_number,
    atm_estacao: corce_number,
    atm_max: corce_number,
    atm_min: corce_number,
    // rad: safe_corce_number,
    temp_bulbo: corce_number,
    temp_orvalho: corce_number,
    temp_max: corce_number,
    temp_min: corce_number,
    tem_orvalho_max: corce_number,
    temp_orvalho_min: corce_number,
    umidade_max: corce_number,
    umidade_min: corce_number,
    umidade: corce_number,
    vento_direcao: corce_number,
    vento_rajada: corce_number,
    vento_velocidade: corce_number,
})
    .transform(d=>({
        ...d,
        date: d.date.setUTCHours(parseInt(d.time_UTC.slice(0, 2))),
        time_UTC: undefined
    }));

const schema = zod.z.array(schema_info);

export { schema }
