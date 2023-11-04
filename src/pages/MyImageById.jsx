import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyImageService from '../services/MyImageService.jsx'

const MyImageById = () => {

    const [myImage, setMyImages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        MyImageService.getImageById(id).then((response) => {
            setMyImages(response.data);
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    return (
        <div className='myImages'>
            <div className='cards-container'>
                <div className="card-test" key={myImage.id}>
                    <div className="image-container">
                        <img src={myImage.image} className="image" alt="..." />
                    </div>
                    <div className="text-container">
                        <h5 className="card-title">Title: {myImage.title}</h5>
                        <p className="card-text description-text">{myImage.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyImageById;