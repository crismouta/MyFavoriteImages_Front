import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import './cardImageList.css'

const CardImageList = ({ image, deleteMyImage }) => {

    CardImageList.propTypes = {
        image: PropTypes.object,
        deleteMyImage: PropTypes.func
    }

    return (
        <div className="card-test">
            <div className="image-container">
                <Link to={`/image/${image.id}`}><img src={image.image} className="image" alt={image.title} title={image.title} /></Link>
            </div>
            <div className="text-container">
                <Link to={`/image/${image.id}`}><h5 className="card-title">Title: {image.title}</h5></Link>
                <p className="card-text description-text">{image.description}</p>
            </div>
            <div className='text-container'>
                <Link to={`/edit-image/${image.id}`} className='btn btn-outline-secondary m-2'>Update Image</Link>
                <button className='btn btn-outline-danger m-2' onClick={() => deleteMyImage(image.id)}>Delete</button>
            </div>
        </div>
    )
}

export default CardImageList