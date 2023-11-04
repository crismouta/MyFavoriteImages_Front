import { useState, useEffect } from "react";
import MyImageService from '../services/MyImageService.jsx'
import { Link } from "react-router-dom";
import './myImages.css'

const MyImage = () => {

    const [myImages, setMyImages] = useState([]);

    useEffect(() => {
        updateMyImagesList()
    }, [])

    const updateMyImagesList = () => {
        MyImageService.getAllImages().then(response => {
            setMyImages(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='myImages'>
            <div className='cards-container'>
                {
                    myImages.map((myImage) =>
                        <div className="card-test" key={myImage.id}>
                            <div className="image-container">
                                <Link to={`/image/${myImage.id}`}><img src={myImage.image} className="image" alt={myImage.title} title={myImage.title} /></Link>
                            </div>
                            <div className="text-container">
                                <Link to={`/image/${myImage.id}`}><h5 className="card-title">Title: {myImage.title}</h5></Link>
                                <p className="card-text description-text">{myImage.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MyImage;