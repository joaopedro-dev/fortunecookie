import Image from 'next/image'
import styles from '../styles/questions.module.css'
import Link from 'next/link'

export default function questions() {
  return (
    <div className={styles.container}>
        <Link href='/'>
            <Image src="/cookie.png" alt="Cookie Logo" width={70} height={70} />
        </Link>

        <main className={styles.main}>
        <form action="/api/quote" className={styles.questions_box} method='get|post'>

            <p className={styles.question_text}>Question</p>
            <ul className={styles.awnser_box}>
                <li className={styles.awnser}>
                  Resposta 1 <input name={styles.check1} type="checkbox"></input>
                </li>
                <li className={styles.awnser}>
                  Resposta 2 <input name={styles.check2} type="checkbox"></input>
                </li>
                <li className={styles.awnser}>
                  Resposta 3 <input name={styles.check3} type="checkbox"></input>
                </li>
                <li className={styles.awnser}>
                  Resposta 4 <input name={styles.check4} type="checkbox"></input>
                </li> 
            </ul>
            
            <button type='submit' className={styles.awnser_btn}>
                <p className={styles.text_play}>RESPONDER</p>
            </button>
        </form>
        
      </main>
    </div>
  )
}
