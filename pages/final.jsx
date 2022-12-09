import react  from 'react';
import Image from 'next/image'
import styles from '../styles/questions.module.css'
import Link from 'next/link'
import { useState } from 'react';
import Head from 'next/head';

export default function Final() {
  const [quotes, setQuotes] = useState('')

  const getQuote = () => {
     fetch ('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length)
      setQuotes(data[randomNum])
    })
  }

  return (

    <div className={styles.container}>    
      <Head>
        <title>Fortune Cookie | Final </title>
        <meta name="description" content="Final" />
        <link rel="icon" href="/cookie-favicon.ico" />
      </Head>    
        <main className={styles.main}>
          <section className={styles.quote_box}>
            <p className={styles.quote_text}>&quot;{quotes.text}&quot;</p>
            <p className={styles.quote_autor}>- {quotes.author}</p>
          </section>
          <button className={styles.final_btn} onClick={getQuote}>
            <Image src="/fortune.gif" alt="Cookie Logo" width={150} height={150} />
          </button>
        </main>
    </div>
  )
}