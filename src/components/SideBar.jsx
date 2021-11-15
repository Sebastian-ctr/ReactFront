import React from 'react';
import { Link } from 'react-router-dom'

let pathname = window.location.pathname
let navBar = false;
function SideBar(props){
    return(
        <section>
            {navBar? <div id='mySidenav' className='sidenav'>
                    <Link to='/' id='michal' onClick={closeNavBar}>Michał Kazimierczuk</Link>
                    <Link to='#' className='closebtn' onClick={closeNavBar}
                    >&times;</Link>
                <div className='sidenav-content'>
                    <Link to='/photo' id='photo' onClick={closeNavBar}>Photos</Link>
                    <Link to='/film' id='films' onClick={closeNavBar}>Films</Link>
                    <Link to='/music' id='music' onClick={closeNavBar}>Music</Link>
                    <Link to='/text' id='press' onClick={closeNavBar}>Text</Link>
                    <Link to='/publications' id='publ' onClick={closeNavBar}>Publications</Link>
                    <Link to='/about' id='about' onClick={closeNavBar}>About</Link>
                    <Link to='/contact' id='contactSideBar' onClick={closeNavBar}>Contact</Link>
                </div>
            </div>:<span><Link id='openNav' to='#' onClick={() => navBar = true}>&#9776;</Link>
            {(() => {
                switch (pathname){
                    case "/home" : return null;
                    default: return <Link to='/home' id='michal' onClick={closeNavBar}>Michał Kazimierczuk</Link>;
                }
            })

            }
            </span>}  
            {console.log(currentPath())}      
        </section>
    )
    function currentPath(){
        if(pathname === '/home'){
            return true
        } else{
            return false
        }
    };
    
    function closeNavBar(){
        navBar = false
    };
};

export default SideBar;