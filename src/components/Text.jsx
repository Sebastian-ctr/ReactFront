import React, { useEffect, useState} from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


function Text(){
    const { loading, error, data } = useFetch('https://apiportfoliostrapi.herokuapp.com/api/texts')
    if (loading) return <div className='loading'>loading...</div>
    if (error) return <p className='loading'>error</p>
    const text = data.data
    console.log(text)

    return(
      <section>
          <SideBar />
          <div className='text'>
              {text.map(t => (
                  <Link to={`/text/${t.id}`} key={t.id}>
                  <p>{t.attributes.title}</p>
                  </Link>
              )) }
          </div>
      </section>  
    )
};

export default Text;