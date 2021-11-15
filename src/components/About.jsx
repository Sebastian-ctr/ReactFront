import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';



function About(){
    const [about, setAbout] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/about/")
        .then(res => res.json())
        .then(
            (result) => {
                setAbout(result);
            },
        )
    }, [])

    let aboutArray = about.map(a => (
        a.content
    ))

    let photoArray = about.map(a => (
        a.image
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
                        <img src={`http://localhost:8000/${photoArray[0]}/`} alt=''/>
                    </div>
                </div>
                <hr className='bottom-hr'/>
            </div>
        </section>
    )
};
export default About;