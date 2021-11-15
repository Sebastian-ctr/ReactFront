import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SideBar from './SideBar';

//let url = 'PKKej6dtSw8';
function MusicDetails() {
    const [music, setMusic] = useState([])
    let { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8000/music/${id}/`)
        .then(res => res.json())
        .then(
            (result) => {
                setMusic(result);
            },
        )
    }, [])

    let url = music.map(m => (
        m.url
    ))

    return(
        <section>
            <SideBar />
            <div className='main-div-page'>
                <h3 className='tittle-page'>
                    {music.map(m => (
                        m.tittle
                    ))}
                </h3>
                <hr/>
                <div className='film-detail'>
                    <iframe width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${url}`} 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                    </iframe>
                </div>
                <p>
                    {music.map(m => (
                        m.description
                    ))}
                </p>
                <hr className='bottom-hr'/>
            </div>
        </section>
    )
};

export default MusicDetails;