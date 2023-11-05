import PropTypes from 'prop-types'
import './cardImageById.css'
import { Link } from 'react-router-dom'
import deleteIcon from '/delete.svg'
import editIcon from '/edit.svg'

const CardImageById = ({ myImage }) => {

    CardImageById.propTypes = {
        myImage: PropTypes.any,
    }

    return (
        <div className='imageById'>
            <div className="card-imageById" key={myImage.id}>
                <div className="imageById-container">
                    <img src={myImage.image} className="imageById" alt={myImage.title} title={myImage.title} />
                </div>
                <div className="text-container">
                    <h4>{myImage.title}</h4>
                    <p className="card-text description-text">{myImage.description}</p>
                </div>
                <div className='text-container icons-container'>
                <Link to={`/edit-image/${myImage.id}`} className="icons">
                    <img src={editIcon} alt="update" />
                </Link>
                <Link to={`/delete/${myImage.id}`} className="icons">
                    <img src={deleteIcon} alt="update" />
                </Link>
            </div>
            </div>
        </div>
    )
}

export default CardImageById