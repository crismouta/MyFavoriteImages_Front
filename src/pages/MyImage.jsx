import { useState, useEffect } from "react";
import MyImageService from '../services/MyImageService.jsx'
import './myImages.css'
import CardImageList from "../components/CardImageList.jsx";

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
                        <CardImageList key={myImage.id} image={myImage}/>
                    )
                }
            </div>
        </div>
    )
}

export default MyImage;