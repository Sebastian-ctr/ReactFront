import React, { useEffect, useState} from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

function Text(){

    const [text, setText] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/text/")
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
                  <a href={"http://localhost:8000" + t.pdf} target="_blank">
                      <h3>
                          {t.tittle}
                      </h3>
                      <p>
                          {t.text}
                      </p>
                  </a>
              ))}

          </div>
      </section>  
    )
};

export default Text;