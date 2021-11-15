import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import './style.css';

function Contact() {
    const [names, setNames] = useState([]);
    

    /*const fetchData = React.useCallback(() => {
        axios({
            "method": "GET",
            "url": "http://localhost:8000/contact/",
            "headers": {
                "Content-type": "application/json"
            },
        })
        .then((response) => {
            setName(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    React.useEffect(() => {
        fetchData()
    }, [fetchData])*/

    useEffect(() => {
        fetch("http://localhost:8000/contact/")
        .then(res => res.json())
        .then(
            (result) => {
                setNames(result);
            },   
            
        )
    }, [])



    

    return (
        <section>
            <SideBar />
            <div  id='contact' className='main-div-page'>
                <hr />
                <div className='contact'>

                    <address className='adress'>
                        <ul>
                        {names.map(n => (
                            <li className='no-bullets' key={n.id}>
                                {n.name}
                            </li>    
                        ))}<br />
                        {names.map(n => (
                            <li key={n.id}>
                                {n.email}
                            </li>
                        ))}<br />
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