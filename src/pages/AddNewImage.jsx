import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import MyImageService from '../services/MyImageService.jsx'

const AddNewImage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const saveImage = (e) => { 
        e.preventDefault();
        MyImageService.createImage(title, description, image ).then((response) => {
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

    return (
        <div className="create-update-form">
            <div className="text-center">Add New Image</div>
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">Image</label>
                    <input
                        type="file"
                        placeholder="Add image"
                        name="img"
                        className="form-control"
                        defaultValue={image}
                        onChange={handleImageChange}
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        placeholder="Write image title"
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
                        placeholder="Write image description"
                        name="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="d-flex">
                    <button className="btn btn-outline-success m-2" onClick={(e) => saveImage(e)}>Save</button>
                    <Link to='/' className="btn btn-outline-danger m-2">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default AddNewImage;