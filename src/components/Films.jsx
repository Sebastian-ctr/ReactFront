import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom'


function Films(){
    const [film, setFilm] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/film/")
        .then(res => res.json())
        .then(
            (result) => {
                setFilm(result);
            },
        )
    }, [])

    return(
        <section>
            <SideBar />
            <div className='films'>
                {film.map(s => (
                    <Link to={`/film/${s.id}`} key={s.id}>
                        <img className='films-img' src={`https://img.youtube.com/vi/${s.url}/mqdefault.jpg`} alt=''/>
                    </Link>
                ))}
            </div>
        </section>
    )
};

export default Films;