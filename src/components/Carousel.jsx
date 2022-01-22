import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css';
import { Carousel } from 'react-responsive-carousel';
import er from "simple-react-lightbox";
import useFetch from '../hooks/useFetch';

let size = 400;

function CarouselComponent(props){
    const { loading, error, data } = useFetch('https://apiportfoliostrapi.herokuapp.com/api/home-page?populate=image')
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    console.log(data)
    const img = data.data.attributes.image.data
    
    
        return(
            <div className='home-slide'>
                
                <Carousel 
                        showArrows={true}
                        renderArrowNext={props.renderArrowNext}
                        renderArrowPrev={props.renderArrowPrev}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        onChange={props.onChange}
                        onClickItem={props.onClickItem}
                        autoPlay={true}
                        infiniteLoop={true}
                        useKeyboardArrows={true}
                        dynamicHeight={true}
                        width={size}
                        >
                    
                        {img.map(i => (
                            <div key={i.id}>
                                    <img src={"https://apiportfoliostrapi.herokuapp.com" + i.attributes.url} alt="photo"/>
                            </div>
                        ))}
                        
                    
                </Carousel>
                {changeWidthSize()}
            </div>
        )

        function changeWidthSize(){
            const { innerWidth: width } = window;
            if (width <= 600){
                size = 250
            } else {
                size = 400
            }
        };

    
};

export default CarouselComponent;