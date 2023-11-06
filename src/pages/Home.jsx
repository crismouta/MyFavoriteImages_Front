import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
        <div className="home-background">
            <Link to="/images" className="link-title">
                <div className="home-title-container">
                    <h1 className="home-title">My favorite Images</h1>
                </div>
            </Link>
        </div>
    );
};

export default Home;
