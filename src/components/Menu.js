
import styles from '../styles/components/Menu.module.css';
import Link from 'next/link';

export function Menu(){
    return(
        <div className={styles.menuContainer}>
            <Link href="/"><img src="img/starbucks.png" alt="logo"/></Link>

            <ul>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </div>
    );
}