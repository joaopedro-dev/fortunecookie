import react  from 'react';
import Image from 'next/image'
import styles from '../styles/questions.module.css'
import Link from 'next/link'
import { useState } from 'react';

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
        <main className={styles.main}>
          <section>
            <p className={styles.quote_box}>{quotes.text}</p>
            <p className={styles.quote_box}>{quotes.author}</p>
          </section>
          <button className={styles.final_btn} onClick={getQuote}>
            <Image src="/fortune.gif" alt="Cookie Logo" width={150} height={150} />
          </button>
        </main>
    </div>
  )
}