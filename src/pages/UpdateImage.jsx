import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import MyImageService from '../services/MyImageService.jsx'

const UpdateImage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const UpdateMyImage = (e) => {
        e.preventDefault();
        MyImageService.updateMyImage(id, title, description, image).then((response) => {
            console.log(response.data)
            navigate('/')
        }).catch(error => {
            console.log(error)
        })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    useEffect(() => {
        MyImageService.getImageById(id).then((response) => {
            setTitle(response.data.title)
            setDescription(response.data.description)
            setImage(response.data.image)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    return (
        <div className="create-update-form">
            <div className="text-center">Update Image</div>
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">Image</label>
                    <input
                        type="file"
                        placeholder="Add new image"
                        name="image"
                        className="form-control"
                        defaultValue={image}
                        onChange={handleImageChange}
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                
                <div className="d-flex">
                    <button className="btn btn-outline-success m-2" onClick={(e) => UpdateMyImage(e)}>Save</button>
                    <Link to='/' className="btn btn-outline-danger m-2">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default UpdateImage;