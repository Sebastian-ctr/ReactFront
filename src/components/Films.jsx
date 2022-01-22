import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch';


function Films(){
    const { loading, error, data } = useFetch('https://apiportfoliostrapi.herokuapp.com/api/films')
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const movie = data.data
    console.log(movie)

    return(
        <section>
            <SideBar />
            <div className='films'>
                {movie.map(m => (
                    <Link to={`/film/${m.id}`} key={m.id}>
                        <img className='films-img' src={`https://img.youtube.com/vi/${m.attributes.url}/mqdefault.jpg`} alt=''/>
                    </Link>
                ))}
            </div>
        </section>
    )
};

export default Films;