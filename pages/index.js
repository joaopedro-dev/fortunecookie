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
        <motion.div
            animate="visible"
            initial="hidden"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
          <Image src="/cookie.png" alt="Cookie Logo" width={110} height={110} />
          <h1 className={styles.logo_text}>Fortune<br/>Cookie</h1>
           </motion.div>
        </section>

          <button className={styles.btn_play}>
              <Link href="/blog/hello-world" className={styles.btn_play}>
                <Image src="/play.png" width={15} height={15} />
                <p className={styles.text_play}>PLAY</p>
              </Link>
          </button>
      
      </main>

      <footer className={styles.footer}>
        <p>Fuck Haters</p>
      </footer>
    </div>
  )
}
