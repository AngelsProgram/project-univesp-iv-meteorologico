import * as zod from 'zod';

const corce_number = zod.z.coerce.number().optional();

const schema_info = zod.z.object({
    date: zod.z.string(),
    precipitacao_mm: corce_number,
    umidade: corce_number,
    temperatura: corce_number,
    orvalho: corce_number,
    vento_velocidade: corce_number,
})

const schema = zod.z.array(schema_info);

type TData = zod.z.infer<typeof schema_info>
type TDados = zod.z.infer<typeof schema>;

export type { TData, TDados }
export { schema }
