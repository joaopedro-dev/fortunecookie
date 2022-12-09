import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Fortune Cookie</title>
        <meta name="description" content="Você quem faz a sua sorte" />
        <link rel="icon" href="/cookie-favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <main className={styles.main}>
        <section className={styles.logo_box}>
          <Image src="/cookie.png" alt="Cookie Logo" width={120} height={120} />
          <h1 className={styles.logo_text}>Fortune<br/>Cookie</h1>
          <p>&quot;A sorte sorri aos fortes&quot; - Terêncio</p>
        </section>

          <button className={styles.btn_play}>
              <Link href="/questions" className={styles.btn_play}>
                <Image src="/play.png" width={15} height={15} alt="Play"/>
                <p className={styles.text_play}>PLAY</p>
              </Link>
          </button>
      
      </main>
    </div>
  )
}
