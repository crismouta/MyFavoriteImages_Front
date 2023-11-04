import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import './cardImageList.css'

const CardImageList = ({ image }) => {
    
    CardImageList.propTypes = {
        image: PropTypes.object
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
        </div>
    )
}

export default CardImageList