import React, { useEffect, useState} from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

function Test(){

    const [text, setText] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(
                (result) => {
                    setText(result)
                },
            )
    }, [])

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