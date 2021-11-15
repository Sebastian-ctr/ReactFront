import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { SRLWrapper } from "simple-react-lightbox";
import SideBar from './SideBar';



const options = {
    buttons: {
        showDownloadButton: false,
    }}

function PhotoDetail(props){
    const [photo, setPhoto] = useState([]) //tittle, first photo
    const [album, setAlbum] = useState([])
    let { id } = useParams()
    

    //let url = `http://localhost:8000/photo/${id}/`

    //this allows fetch photo from album
    useEffect(() => {
        fetch(`http://localhost:8000/photo/${id}/`)
        .then(res => res.json())
        .then(
            (result) => {
                setAlbum(result);
            },
        )
    }, [])

    //this allow to get tittle, description and first image of album

    useEffect(() => {
        fetch("http://localhost:8000/photo/")
        .then(res => res.json())
        .then(
            (photoResult) => {
                setPhoto(photoResult);
            },
        )
    }, [])

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

    console.log(tittleArrayOrder)

    return(
        <section>
            <SideBar />
            <div className='album-web'>
                <p id='album-tittle'><h3>
                    {tittleArrayOrder[id - 1]}
                    </h3></p>
                <hr/>
                <div className='album'>
                    <SRLWrapper options={options}>
                        <div className='album-detail'>
                            <img className='album-photo'
                                 src={`http://localhost:8000/${firstPhoto}/`} alt=''/>
                            {album.map(a => (
                                <img className='album-photo'
                                src={`http://localhost:8000/${a.images}/`} alt=''/>
                            ))}
                        </div>
                    </SRLWrapper>
                        <div className='album-text'>
                            {descriptionArrayOrder[id - 1]}
                        </div>
                </div>
                <hr className='bottom-hr'/>
            </div>
        </section>
    )
};

export default PhotoDetail;