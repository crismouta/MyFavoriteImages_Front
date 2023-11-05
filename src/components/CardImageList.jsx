import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import './cardImageList.css'
import deleteIcon from '/delete.svg'
import editIcon from '/edit.svg'

const CardImageList = ({ image }) => {

    CardImageList.propTypes = {
        image: PropTypes.object,
    }

    return (
        <div className="card-test">
            <div className="image-container">
                <Link to={`/image/${image.id}`}><img src={image.image} className="image" alt={image.title} title={image.title} /></Link>
            </div>
            <div className="text-container">
                <Link to={`/image/${image.id}`} className="image-title"><h4>{image.title}</h4></Link>
                <p className="card-text description-text">{image.description}</p>
            </div>
            <div className='text-container icons-container'>
                <Link to={`/edit-image/${image.id}`} className="icons">
                    <img src={editIcon} alt="update" />
                </Link>
                <Link to={`/delete/${image.id}`} className="icons">
                    <img src={deleteIcon} alt="update" />
                </Link>
            </div>
        </div>
    )
}

export default CardImageList