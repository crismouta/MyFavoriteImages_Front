import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyImageService from '../services/MyImageService.jsx'
import CardImageById from "../components/CardImageById.jsx";

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
        <CardImageById key={myImage.id} myImage={myImage}/>
    )
}

export default MyImageById;