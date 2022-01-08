import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css';
import { Carousel } from 'react-responsive-carousel';
import er from "simple-react-lightbox";

let size = 400;

function CarouselComponent(props){
    const [isLoading, setLoading] = useState(true);
    const [photo, setPhoto] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:1337/api/home-page?populate=image")
        .then(res => res.json())
        .then(
            (result) => {
                setPhoto(result);
            },   
            
        )
        .catch(error => {
            throw(error)
        })
        .finally(() => setLoading(false));
    }, [setPhoto])


    /*useEffect(() => {
        loadData();
        return () => {};
    }, [])*/


    console.log(photo.data)
    const img = photo.data.attributes.image.data
    
    
        return(
            <div className='home-slide'>
                {isLoading? <p>Loading...</p> :
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
                                    <img src={"http://localhost:1337" + i.attributes.url} alt="photo"/>
                            </div>
                        ))}
                        
                    
                </Carousel>}
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