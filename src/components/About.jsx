import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';



function About(){
    const [about, setAbout] = useState([])

    useEffect(() => {
        fetch("http://localhost:1337/api/about?populate=image")
        .then(res => res.json())
        .then(
            (result) => {
                setAbout(result);
            },
        )
    }, [])

    let aboutArray = about.map(a => (
        a.description
    ))

    let photo = about.map(a => (
        a.url
    ))

    return(
        <section>
            <SideBar/>
            <div className='about-container'>
                <hr/>
                <div className='about'>
                    <div>
                        {aboutArray[0]}
                    </div>
                    <div>
                        <img src={`http://localhost:1337/${photo}}/`} alt=''/>
                    </div>
                </div>
                <hr className='bottom-hr'/>
            </div>
        </section>
    )
};
export default About;