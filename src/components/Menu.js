
import styles from '../styles/components/Menu.module.css';

export function Menu(){
    return(
        <div className={styles.menuContainer}>
            <img src="img/starbucks.png" alt="logo"/>

            <ul>
                <li><a href="#">Nosso Café</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </div>
    );
}