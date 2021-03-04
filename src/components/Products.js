
import document from 'next/document';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/components/Products.module.css'

export function Products(){


    let src = ["img/coffee_01.jpg", "img/coffee_02.jpg"]

    let srcIndex = 0;

    function switchImg2(){
        srcIndex = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    }

    const [time, setTime] = useState(0.2 * 60);
    const [switchImg, setSwitchImg] = useState(false)

    useEffect(() =>{
        if(time > 6){
            setTimeout(() => {

                setSwitchImg(false);
                setTime(time - 1);

            }, 1000)
        }else if(6 >= time && time > 0){
            setTimeout(() => {

                setSwitchImg(true);
                setTime(time - 1);

            }, 1000)

        }else if(time == 0){
            setTime(0.2 * 60);
        }
    }, [time])

    

   /*  let countdownTimeOut: NodeJS.Timeout;

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor( time / 60 );
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){

        setIsActive(true);

    }

    function resetCountdown(){
        clearTimeout(countdownTimeOut);
        setIsActive(false);

        setTime(0.1 * 60);
    }

    useEffect(() =>{
        if(isActive && time > 0){
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }else if(isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])
 */

    return(
        <div className={styles.productsContainer}>
            <div className={styles.productsBox}>
                <section>
                    <div className={styles.productsLeft}>
                        <section>
                            <p>Get a Free drink after First order</p>
                            <p className={styles.productsP}>For a limited time, get a free drink when you download the app and join Starbucks Rewards.</p>
                            <button>Order</button>
                        </section>
                    </div>
                    <div className={styles.productsLeft}>
                        <section>
                            <p>$0 delivery fee for Starbucks orders on Uber Eats.</p>
                            <p className={styles.productsP}>Get your favorite food and drinks delivered</p>
                            <Link href="/menu"><button>See Menu</button></Link>
                        </section>
                    </div>
                </section>
                <section>
                    <div className={styles.productsRight}>
                        {switchImg ? (
                            <img className={styles.img1} src="img/coffee_01.jpg" />
                        ) : (
                            <img className={styles.img2} src="img/coffee_02.jpg" />
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}