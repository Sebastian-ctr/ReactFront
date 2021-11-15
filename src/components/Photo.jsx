import React, { Component, useEffect, useState } from 'react';
import SideBar from './SideBar';
import './style.css';
import { Link } from 'react-router-dom';
import PhotoDetail from './PhotoDetail';

function Photo() {
    const [source, setSource] = useState([])


    useEffect(() => {
        fetch("http://localhost:8000/photo/")
        .then(res => res.json())
        .then(
            (source) => {
                setSource(source);
            },
        )

    }, [])

        return(
            <section>
                <SideBar />
                <div className="main-photos">

                    {source.map(s => (
                        <Link to={'/photo/' + s.id} key={s.id}>
                            <img className='photo' src={"http://localhost:8000/" + s.image} />
                        </Link>
                    ))}
                
                </div>
            </section>
        )
    
};

export default Photo;