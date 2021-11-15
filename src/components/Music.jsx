import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { Link, useParams } from 'react-router-dom'



function Music(){
    
    const [music, setMusic] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/music/")
        .then(res => res.json())
        .then(
            (result) => {
                setMusic(result);
            },
        )
    }, [])

    return(
        <section>
            <SideBar />
            <div className='films'>
                {
                    music.map(m => (
                        <Link to={'/music/' + m.id} key={m.id}>
                            <img className='films-img' src={`https://img.youtube.com/vi/${m.url}/mqdefault.jpg`} alt=''/>
                        </Link>
                    ))
                }
                
            </div>

        </section>
    )
};

export default Music;