import { Link } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-link-container">
                <Link to={`/`} className="navbar-link">
                    <h5 className="navbar-text">Home</h5>
                </Link>
                <Link to={`/images`} className="navbar-link">
                    <h5 className="navbar-text">Images</h5>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar