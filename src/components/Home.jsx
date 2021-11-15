import React, { Component } from 'react';
import CarouselComponent from './Carousel';
import SideBar from './SideBar';
import './style.css';


class Home extends Component{
    render() {
        return(
            <div>
                <SideBar />
                <CarouselComponent />
            </div>
        )
    }
};

export default Home;