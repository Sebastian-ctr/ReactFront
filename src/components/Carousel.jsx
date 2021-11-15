import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css';
import { Carousel } from 'react-responsive-carousel';
import er from "simple-react-lightbox";

let size = 400;

function CarouselComponent(props){
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/home/")
        .then(res => res.json())
        .then(
            (result) => {
                setPhoto(result);
            },   
            
        )
            .catch(error => {
                throw(error)
            })
    }, [])
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
                    
                        {photo.map(p => (
                            <div key={p.id}>
                                    <img src={"http://localhost:8000/" + p.image} alt="photo"/>
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