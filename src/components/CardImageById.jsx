import PropTypes from 'prop-types'
import './cardImageById.css'

const CardImageById = ({ myImage }) => {

    CardImageById.propTypes = {
        myImage: PropTypes.any
    }

    return (
        <div className='imageById'>
            <div className="card-test card-imageById" key={myImage.id}>
                <div className="imageById-container">
                    <img src={myImage.image} className="imageById" alt="..." />
                </div>
                <div className="text-container">
                    <h5 className="card-title">Title: {myImage.title}</h5>
                    <p className="card-text description-text">{myImage.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardImageById