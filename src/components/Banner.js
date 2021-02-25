import styles from '../styles/components/Banner.module.css';

export function Banner(){
    return(
        <div className={styles.bannerContainer}>
            <div className={styles.textBox}>
                <p>Smooth out your day,</p>
                <p>everyday</p>
                <button className={styles.bannerButton}>See Menu</button>
            </div>
        </div>
    );
}