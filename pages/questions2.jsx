import react from 'react';
import Image from 'next/image'
import styles from '../styles/questions.module.css'
import Link from 'next/link'
import {useState} from 'react';
import Head from 'next/head'

export default function Question2(props) {
  
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

            <p className={styles.question_text}>Quando as coisas estão dificeis você:</p>
            <ul className={styles.awnser_box}>
                <li className={styles.awnser}>
                  Continua <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeRegular} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                  Recomeça <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeReservada} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                  Surta <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeEgocenctrica} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                  Desiste <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeExemplar} id="subscribe" name="subscribe"></input>
                </li> 
            </ul>
        </form>

        <nav className={styles.question_box}>
        <Link href='/questions1' className={styles.links}>
            Anterior
        </Link>
        <Link href='/questions3' className={styles.links}>
            Próxima
        </Link>
        </nav>
        
      </main>
    </div>
  )
}