import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { SRLWrapper } from "simple-react-lightbox";
import SideBar from './SideBar';
import useFetch from '../hooks/useFetch';



const options = {
    buttons: {
        showDownloadButton: false,
    }}

function PhotoDetail(props){
    //const [photo, setPhoto] = useState([]) //tittle, first photo
    //const [album, setAlbum] = useState([])
    let { id } = useParams()


    const { loading, error, data } = useFetch(`https://apiportfoliostrapi.herokuapp.com/api/photos/${id}?populate=image`)
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    const img = data.data
    console.log(img)

   

    /*
    const tittleArray = photo.map(p => (
        p.tittle
    ))

    const descriptionArray = photo.map(p => (
        p.description
    ))

    const albumPhotoArray = photo.map(p => (
        p.image
    ))



    const tittleArrayOrder = tittleArray.reverse()

    const descriptionArrayOrder = descriptionArray.reverse()

    const albumPhotoArrayOrder = albumPhotoArray.reverse()

    const firstPhoto = albumPhotoArrayOrder[id -1]

   */

    return(
        <section>
            <SideBar />
            <div className='album-web'>
                <p id='album-tittle'><h3>
                    {img.attributes.title}
                    </h3></p>
                <hr/>
                <div className='album'>
                    <SRLWrapper options={options}>
                        <div className='album-detail'>
                            {img.attributes.image.data.map(i => (
                                <img className='album-photo'
                                src={`https://apiportfoliostrapi.herokuapp.com${i.attributes.url}`} alt=''/>
                            ))}
                            
                        </div>
                    </SRLWrapper>
                        <div className='album-text'>
                            {}
                        </div>
                </div>
                <hr className='bottom-hr'/>
            </div>
        </section>
    )
};

export default PhotoDetail;