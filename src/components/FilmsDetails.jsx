import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SideBar from './SideBar';
import useFetch from '../hooks/useFetch';

let size = '560';
let sizeHeight = '315';
//let url = 'PKKej6dtSw8';

function FilmsDetail() {
    let { id } = useParams()
    const { loading, error, data } = useFetch(`http://localhost:1337/api/home-page?populate=image/${id}`)
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const movie = data.data.attributes

    return(
        <section>
            <SideBar />
            <div className='main-div-page'>
                <h3 className='tittle-page'>
                    {movie.title}
                </h3>
                <hr/>
                <div className='film-detail'>
                    <iframe width={size}
                            height={sizeHeight}
                            src={`https://www.youtube.com/embed/${movie.url}`} 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                    </iframe>
                </div>
                <hr className='bottom-hr'/>
            </div>
            {changeWidthSize()}
        </section>
    )

    function changeWidthSize(){
        const { innerWidth: width } = window;
        if (width <= 600){
            size = '290'
            sizeHeight = '210'
        } else {
            size = '560'
            sizeHeight = '315'
        }
    };
};

export default FilmsDetail;