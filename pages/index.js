import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fortune Cookie</title>
        <meta name="description" content="Você quem faz a sua sorte" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <section className={styles.logo_box}>
          <Image src="/cookie.png" alt="Cookie Logo" width={110} height={110} />
          <h1 className={styles.logo_text}>Fortune<br/>Cookie</h1>
          <p>"A sorte sorri aos fortes" - Terêncio</p>
        </section>

          <button className={styles.btn_play}>
              <Link href="/questions" className={styles.btn_play}>
                <Image src="/play.png" width={15} height={15} />
                <p className={styles.text_play}>PLAY</p>
              </Link>
          </button>
      
      </main>
    </div>
  )
}
