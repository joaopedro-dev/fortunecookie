import react from 'react';
import Image from 'next/image'
import styles from '../styles/questions.module.css'
import Link from 'next/link'
import {useState} from 'react';
import Head from 'next/head'

export default function Question3(props) {
  
  const [estaRespondido, setarRespondido] = useState(false);
  const pontosAdquiridos = 10

  const handleChangeRegular = event => {
    if (event.target.checked) {
      const pontuaçãoRegular2 = pontosAdquiridos  
      console.log('Pessoa Regular', pontuaçãoRegular2)
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };

  const handleChangeReservada = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 =  pontosAdquiridos
      console.log('Pessoa Reservada', pontuaçãoQuestao1) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };

  const handleChangeEgocenctrica = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 = pontosAdquiridos
      console.log('Pessoa Egocentrica', pontuaçãoQuestao1) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };

  const handleChangeExemplar = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 = pontosAdquiridos
      console.log('Pessoa Exemplar', pontuaçãoQuestao1) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };


  return (
    <div className={styles.container}>
        <Head>
          <title>Fortune Cookie | Questões </title>
          <meta name="description" content="Questão 1" />
          <link rel="icon" href="/cookie-favicon.ico" />
        </Head>
      <main className={styles.main}>
        <form className={styles.questions_box}>

            <p className={styles.question_text}>Como está se sentindo hoje?</p>
            <ul className={styles.awnser_box}>
                <li className={styles.awnser}>
                😀 <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeRegular} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                🥰  <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeReservada} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                😎 <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeEgocenctrica} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                😕 <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeExemplar} id="subscribe" name="subscribe"></input>
                </li> 
            </ul>
        </form>

        <div className={styles.question_box}>
        <Link href='/questions2' className={styles.links}>
            Anterior
        </Link>
        <Link href='/final' className={styles.links}>
            Finalizar
        </Link>
        </div>
        
      </main>
    </div>
  )
}