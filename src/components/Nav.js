import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
    <>
    {/* <div className="home">
    <NavLink to ="/home" className='home-button'> <a href="#" className="logo"><img className="logo" src={logo} alt="" /></a></NavLink>
    </div> */}
        {/* <div className='NavBar'> */}
        <nav>
        <Link to="/"><img src="https://logoeps.com/wp-content/uploads/2014/02/30550-batman-logo-silhouette-icon-vector-icon-vector-eps.png" width="50px" height="50px" alt="logo"/></Link>    
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/location">Locations</Link>
        </nav>
    </>
)   //dont forget to add image home link
}
export default Nav;