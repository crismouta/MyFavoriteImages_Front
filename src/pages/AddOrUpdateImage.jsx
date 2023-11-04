import { useState, useEffect } from "react"
import MyImageService from '../services/MyImageService.jsx'
import { Link, useNavigate, useParams } from "react-router-dom";

const AddOrUpdateImage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    

    const saveOrUpdateImage = (e) => {
        e.preventDefault();
        if (id) {
            e.preventDefault();
            MyImageService.updateMyImage(id, title, description, image).then((response) => {
                console.log(response.data)
                navigate('/')
            }).catch(error => {
                console.log(error)
            })
            
        } else {
            MyImageService.createImage(title, description, image).then((response) => {
                console.log(response.data)
                navigate('/')
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        if(id) {
            MyImageService.getImageById(id).then((response) => {
                setTitle(response.data.title)
                setDescription(response.data.description)
                setImage(response.data.image)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [id])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const actionTitle = () => {
        if (id) {
            return <h2>Update Image</h2>
        } else {
            return <h2>Create New Image</h2>
        }
    }

    return (
        <div className="create-update-form">
            <div className="text-center">{actionTitle()}</div>
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">Image</label>
                    <input
                        type="file"
                        placeholder="Add image file"
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
                    <button className="btn btn-outline-success m-2" onClick={(e) => saveOrUpdateImage(e)}>Save</button>
                    <Link to='/' className="btn btn-outline-danger m-2">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default AddOrUpdateImage;