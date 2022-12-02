import Image from 'next/image'
import styles from '../styles/questions.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function questions() {
  return (
    <div className={styles.container}>
        <Link href='/'>
            <Image src="/cookie.png" alt="Cookie Logo" width={70} height={70} />
        </Link>

        <main className={styles.main}>
        <section className={styles.questions_box}>

            <p className={styles.question_text}>Question</p>
            <ul className={styles.awnser_box}>
                <li className={styles.awnser}>Resposta 1</li>
                <li className={styles.awnser}>Resposta 2</li>
                <li className={styles.awnser}>Resposta 3</li>
                <li className={styles.awnser}>Resposta 4</li>
            </ul>

            <button className={styles.awnser_btn}>
              <Link href="/quotes" className={styles.btn_play}>
                <p className={styles.text_play}>RESPONDER</p>
              </Link>
            </button>
        </section>
      </main>
    </div>
  )
}
