import Link from 'next/link'
import styles from '../styles/components/custom404.module.css'

export default function FourOhFour() {
  return <>
    <div className={styles.container404}>
      <section>
        <h1 className={styles.fourOhFour}>404 | Página Não Encontrada</h1>
        <h2>Voltar para página inicial</h2>
        <button>
        <Link className={styles.link404} href="/"><img src="SVG/left02.svg" /></Link>
        </button>
      </section>
      <section>
        <img className={styles.img404} src="SVG/14.svg" />
      </section>
    </div>
  </>
}