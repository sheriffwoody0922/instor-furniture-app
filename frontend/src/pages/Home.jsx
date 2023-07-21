import { NavLink } from "react-router-dom";
import Header from "../components/Header";





const Home = () => {
    return ( 
        <main>
            <section className="furniture-home">
                    <Header />
                <article className="furniture-header">
                    <h1><span>M</span>Y FURNITURE</h1>
                </article>
            </section>
            <section className="furniture-link">
            <NavLink to="/big-stuff" >BIG STUFF</NavLink>
                <NavLink to="/middle-stuff" >NOT SO BIG STUFF</NavLink>
                <NavLink to="/small-stuff" >SMALL STUFF</NavLink>
            </section>
        </main>
     );
}
 
export default Home;