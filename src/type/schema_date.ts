import * as zod from 'zod';

export const schema_filter = zod.z.object({
    s: zod.z.string().optional(),
    e: zod.z.string().optional(),
});