'use client'
import axios from "axios"
import { useState, useEffect } from 'react';
export default function Movie({params} : {params: {id: number}})
{
    const [movie, setMovie] = useState<any>({});
    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON").then((res) => {
            setMovie(res.data[params.id]);
        });
    }, []);
    return(
        <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
        </div>
    )
}