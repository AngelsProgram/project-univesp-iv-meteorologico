"use client";
import React from 'react';
import * as NextNavigation from 'next/navigation';

export function Filter() {
    const router = NextNavigation.useRouter();

    const id_date_start = 'id_date_start';
    const id_date_end = 'id_date_end';

    function onSubmit(ev: React.FormEvent<HTMLFormElement>){
        ev.preventDefault();
        const formData = new FormData(ev.target as HTMLFormElement);
        const p = new URLSearchParams();

        const s = formData.get("date_start") || undefined;
        const e = formData.get("date_end") || undefined;
        if(s) p.set('s', s.toString());
        if(e) p.set('e', e.toString());
        console.log(s);
        router.push(`?${p.toString()}`);
    }

    return (
        <header>
            <form onSubmit={onSubmit} style={{display: 'flex'}}>
                <div>
                    <label htmlFor={id_date_start}>De:</label>
                    <input type="datetime-local" name="date_start" id={id_date_start} />
                </div>
                <div>
                    <label htmlFor={id_date_end}>Até:</label>
                    <input type="datetime-local" name="date_end" id={id_date_end} />
                </div>
                <div>
                    <button type="submit">Filtrar</button>
                </div>
            </form>
        </header>
    )
}
