import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SideBar from './SideBar';
import re, { SRLWrapper } from 'simple-react-lightbox';


const options = {
    buttons: {
        showDownloadButton: false,
    }}

function PublicationsDetail(){

    const [publications, setPublications] = useState([])
    let { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8000/publication/${id}/`)
            .then(res => res.json())
            .then(
                (result) => {
                    setPublications(result);
                },
            )
    }, [])

    return(
        <section>
            <SideBar />
            <div className='album-web'>
                <p id='album-tittle'>
                    <h3>
                        {publications.map(p => (
                            p.tittle
                        ))}
                    </h3>
                </p>
                <hr/>
                <div className='album'>
                    <SRLWrapper options={options}>
                        <div className='album-detail'>
                            {publications.map(p => (
                                <img className='album-photo'
                                     src={`http://localhost:8000/${p.image}/`} alt=''/>
                            ))}

                        </div>
                    </SRLWrapper>
                        <div className='album-text'>
                            {publications.map(p => (
                                p.text
                            ))}
                        </div>
                </div>
                <hr className='bottom-hr'/>
            </div>
        </section>
    )
};

export default PublicationsDetail;