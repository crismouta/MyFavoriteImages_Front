import { useEffect } from "react";
import MyImageService from '../services/MyImageService.jsx'
import { useNavigate, useParams } from "react-router-dom";

const DeleteImage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        MyImageService.deleteImage(id).then(() => {
            navigate('/images')
        }).catch(error => {
            console.log(error)
        })
    }, [navigate, id])

}

export default DeleteImage