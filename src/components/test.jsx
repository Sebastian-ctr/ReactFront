import React, { useEffect, useState} from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Test(){
    const { loading, error, data } = useFetch('http://localhost:1337/api/texts')
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const text = data.data.attributes

    return(
      <section>
          <SideBar />
          <div className='text'>
              {text.map(t => (
                  
                  <img src={"http://localhost:5000/" + t.id} />
              ))}

          </div>
      </section>  
    )
};

export default Test;