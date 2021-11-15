import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SideBar from './SideBar';

let size = '560';
let sizeHeight = '315';
//let url = 'PKKej6dtSw8';

function FilmsDetail() {
    const [film, setFilm] = useState([])
    let { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8000/film/${id}/`)
        .then(res => res.json())
        .then(
            (result) => {
                setFilm(result);
            },
        )
    }, [])
    
    let url = film.map(f => (
        f.url
    ))

    let description = film.map(f => (
        f.description
    ))

    return(
        <section>
            <SideBar />
            <div className='main-div-page'>
                <h3 className='tittle-page'>
                    {film.map(f => (
                        f.tittle
                    ))}
                </h3>
                <hr/>
                <div className='film-detail'>
                    <iframe width={size}
                            height={sizeHeight}
                            src={`https://www.youtube.com/embed/${url}`} 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                    </iframe>
                </div>
                <p>{description}</p>
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