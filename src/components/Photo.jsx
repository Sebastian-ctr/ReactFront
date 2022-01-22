import React, { Component, useEffect, useState } from 'react';
import SideBar from './SideBar';
import './style.css';
import { Link } from 'react-router-dom';
import PhotoDetail from './PhotoDetail';
import useFetch from '../hooks/useFetch';

function Photo() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/photos?populate=image')
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const img = data.data
    console.log(img)
    //console.log(img.map(i => (i.attributes.image.data[0].attributes.url)))
    
        return(
            <section>
                <SideBar />
                <div className="main-photos">
                    
                    {img.map(i => (
                        <Link to={'/photo/' + i.id} key={i.id}>
                            <img className='photo' src={"http://localhost:1337" + i.attributes.image.data[0].attributes.url} />
                        </Link>
                    ))}
                    
                
                </div>
            </section>
        )
    
};

export default Photo;