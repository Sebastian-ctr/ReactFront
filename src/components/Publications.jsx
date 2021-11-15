import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

function Publications(){

    const [publication, setPublication] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/publication/")
        .then(res => res.json())
        .then(
            (result) => {
                setPublication(result)
            }
        )
    }, [])
    return(
        <section>
            <SideBar />
            <div className='publications'>
                {publication.map(p => (
                    <Link to={'/publications/' + p.id} key={p.id}>
                        <p>
                            {p.text}
                        </p>
                    </Link>
                    ))}
                
            </div>
        </section>
    )
};

export default Publications;