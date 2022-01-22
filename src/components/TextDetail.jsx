import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import SideBar from "./SideBar";
import { Link } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

function TextDetail(){
    let { id } = useParams()
    const { loading, error, data } = useFetch(`https://apiportfoliostrapi.herokuapp.com/api/texts/${id}`)
    if (loading) return <div className='loading'>loading...</div>
    if (error) return <p className='loading'>error</p>
    const text = data.data
    console.log(text)


    return (
        <section>
            <SideBar />
            <div className='album-web'>
                <p id='album-tittle'>
                    <h3>
                        {text.attributes.title}
                    </h3>
                </p>
                <hr/>
                    <div className='album-text'>
                    {text.attributes.text}
                    </div>
                <hr className='bottom-hr'/>
            </div>
        </section>
    )
}

export default TextDetail;