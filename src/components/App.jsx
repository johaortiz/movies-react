import { Cards } from "./Cards";
import styles from '../styles/App.module.css';

export function App(){
    return <>
        <header>
            <h1 className={styles.title} >Movies</h1>
        </header>
        <main>
            <Cards />
        </main>
    </>
}