import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SideBar from './SideBar';
import useFetch from '../hooks/useFetch';

//let url = 'PKKej6dtSw8';
function MusicDetails() {
    let { id } = useParams()
    const { loading, error, data } = useFetch(`http://localhost:1337/api/musics/${id}`)
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const music = data.data.attributes

    return(
        <section>
            <SideBar />
            <div className='main-div-page'>
                <h3 className='tittle-page'>
                    {music.title}
                </h3>
                <hr/>
                <div className='film-detail'>
                    <iframe width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${music.url}`} 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                    </iframe>
                </div>
                <p>
                </p>
                <hr className='bottom-hr'/>
            </div>
        </section>
    )
};

export default MusicDetails;