import react  from 'react';
import Image from 'next/image'
import styles from '../styles/questions.module.css'
import Link from 'next/link'
import {useState} from 'react';

export default function questions(props) {
  
  const [estaRespondido, setarRespondido] = useState(false);
  const pontosAdquiridos = 10

  const handleChangeRegular = event => {
    if (event.target.checked) {
      const pontuaçãoRegular = pontosAdquiridos
      console.log('Pessoa Regular', pontuaçãoRegular) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };

  const handleChangeReservada = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 = pontosAdquiridos
      console.log('Pessoa Reservada', pontuaçãoQuestao1) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };

  const handleChangeEgocenctrica = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 =  pontosAdquiridos
      console.log('Pessoa Egocentrica', pontuaçãoQuestao1) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };

  const handleChangeExemplar = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 =  pontosAdquiridos
      console.log('Pessoa Exemplar', pontuaçãoQuestao1) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };
  
  return (
    <div className={styles.container}>
        <main className={styles.main}>
        <form className={styles.questions_box}>

            <p className={styles.question_text}>Você se considera uma boa pessoa?</p>
            <ul className={styles.awnser_box}>
                <li className={styles.awnser}>
                  Sou normal <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeRegular} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                  Sim, com certeza <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeReservada} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                  Acho que não <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeEgocenctrica} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                  Não sei <input className={styles.check} type="checkbox" value={estaRespondido} onChange={handleChangeExemplar} id="subscribe" name="subscribe"></input>
                </li> 
            </ul>
        </form>

        <nav className={styles.question_box}>
          <Link href='/questions1'>
              Proxima
          </Link>
        </nav>
        
      </main>
    </div>
  )
}