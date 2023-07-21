import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <nav>
                <Link to="/" >HOME</Link>
                <Link to="/big-stuff" >BIG STUFF</Link>
                <Link to="/middle-stuff" >NOT SO BIG STUFF</Link>
                <Link to="/small-stuff" >SMALL STUFF</Link>
            </nav>
        </header>
     );
}
 
export default Header;