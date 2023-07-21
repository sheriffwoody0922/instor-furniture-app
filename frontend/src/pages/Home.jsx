import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import bigStuff from "../assets/bigstuff.avif"
import middleStuff from "../assets/middlestuff.avif"
import smallStuff from "../assets/smallstuff.avif"
import "./Home.css"



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
                <NavLink className="home-link" to="/big-stuff" >
                    <article className="home-stuff">
                        <img src={bigStuff} alt="big-stuff" />
                        <h6>BIG STUFF</h6>
                    </article>
                </NavLink>
                <NavLink className="home-link" to="/middle-stuff" >
                    <article className="home-stuff">
                        <img src={middleStuff} alt="middle-stuff" />
                        <h6>NOT SO BIG STUFF</h6>
                    </article>
                </NavLink>
                <NavLink className="home-link" to="/small-stuff" >
                    <article className="home-stuff">
                        <img src={smallStuff} alt="small-stuff" />
                        <h6>SMALL STUFF</h6>
                    </article>
                </NavLink>
            </section>
        </main>
     );
}
 
export default Home;