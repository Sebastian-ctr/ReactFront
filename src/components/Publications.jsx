import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Publications(){
    const { loading, error, data } = useFetch('https://apiportfoliostrapi.herokuapp.com/api/publications?populate=text')
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const publication = data.data
    console.log(publication)
    

    
    return(
        <section>
            <SideBar />
            <div className='publications'>
            
                {publication.map(p => (
                    <a href={`https://apiportfoliostrapi.herokuapp.com${p.attributes.text.data.attributes.url}`}  target="_blank" rel="noopener noreferrer">
                        {p.attributes.title}
                    </a>
                ))}
            </div>
        </section>
    )
};

export default Publications;


{/*

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

*/}