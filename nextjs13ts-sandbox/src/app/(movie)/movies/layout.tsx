'use client'
import { useState, useEffect } from "react";
import MovieHeader from "./header";
import axios from "axios";

export default function MovieLayout({children} : {children:React.ReactNode})
{
    const [movies, setMovies] = useState<any[]>([]);
    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON").then((res) => {
            setMovies(res.data);
        });
    }, []);

    const goDescription = (id:number) => {
        window.location.href = `/movies/${id}`;
    }
    return(
        <>
            <MovieHeader/>
            <main className="flex items-center">
                <div className="m-4 border p-5">
                    <ul>
                        {movies.map((movie, index) => {
                            return(
                                <li key={index}><span className="cursor-pointer underline" onClick={()=>{goDescription(index)}}>{movie.Title}</span></li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    {children}
                </div>
            </main>
        </>
    )
}