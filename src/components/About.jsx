import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import useFetch from '../hooks/useFetch';



function About(){
    const { loading, error, data } = useFetch('http://localhost:1337/api/about?populate=image')
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const img = data.data.attributes.image.data.attributes.url
    console.log(img)

    return(
        <section>
            <SideBar/>
            <div className='about-container'>
                <hr/>
                <div className='about'>
                    <div>
                        {data.data.attributes.description}
                    </div>
                    <div>
                        <img src={'http://localhost:1337' + img } alt=''/>
                    </div>
                </div>
                <hr className='bottom-hr'/>
            </div>
        </section>
    )
};
export default About;