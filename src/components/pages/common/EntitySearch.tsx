import React from 'react'
import Search from "./RedFormControl";
import {ChangeEvent, useState} from "react";

type Props = {
    options: any[],
    filter: Function,
    Map: Function,
    loading?: boolean,
    loadingText?: string,
    emptyList?: string
}

export default ({options, filter, Map, loading=false, emptyList='', loadingText='Loading...'}: Props) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
    const filtered = options.filter(entity => filter(entity, search))

    return (
        <>
            <Search onChange={handleSearch} value={search} />
            { filtered.map(famTree => Map(famTree)) }
            {loading && loadingText && <h4 className='mt-5 text-center'>{loadingText}</h4> }
            {!loading && options.length === 0 && <h4 className='mt-5 text-center'>{emptyList}</h4>}
        </>
    );
}
