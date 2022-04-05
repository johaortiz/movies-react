import { Link } from "react-router-dom";
import styles from '../styles/App.module.css';

export function Nav(){
    return <>
        <nav>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <Link to="/"><h1 className={styles.title} >Movies</h1></Link>
    </>
}
