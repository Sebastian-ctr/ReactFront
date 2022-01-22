import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';



function Music(){
    const { loading, error, data } = useFetch('https://apiportfoliostrapi.herokuapp.com/api/musics')
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const music = data.data
    console.log(music)

    return(
        <section>
            <SideBar />
            <div className='films'>
                {
                    music.map(m => (
                        <Link to={'/music/' + m.id} key={m.id}>
                            <img className='films-img' src={`https://img.youtube.com/vi/${m.attributes.url}/mqdefault.jpg`} alt=''/>
                        </Link>
                    ))
                }
            
            </div>

        </section>
    )
};

export default Music;