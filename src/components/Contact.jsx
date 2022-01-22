import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import './style.css';
import useFetch from '../hooks/useFetch';

function Contact() {
    const { loading, error, data } = useFetch('https://apiportfoliostrapi.herokuapp.com/api/contact')
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const contact = data.data
    console.log(contact)

    

    return (
        <section>
            <SideBar />
            <div  id='contact' className='main-div-page'>
                <hr />
                <div className='contact'>

                    <address className='adress'>
                        <ul>
                        
                            <li className='no-bullets'>
                                {contact.attributes.name}
                            </li>    
                            <br />
                        
                            <li>
                                {contact.attributes.email}
                            </li>
                        <br />
                            <li>
                                {contact.attributes.phone}
                            </li>
                        <br />
                        </ul>
                    </address>
                </div>
                <hr className='bottom-hr' />
            </div>
        </section>
    )
};

export default Contact;