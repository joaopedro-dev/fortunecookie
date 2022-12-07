import Image from 'next/image'
import styles from '../styles/questions.module.css'
import Link from 'next/link'
import {useState} from 'react';

export default function questions1(props) {
  
  const [estaRespondido, setarRespondido] = useState(false);
  const pontosAdquiridos = 10
  const pessoaNormal = 0

  const handleChangeRegular = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 = pessoaNormal + pontosAdquiridos
      console.log('Pessoa Regular', pontuaçãoQuestao1)
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };

  const handleChangeReservada = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 = pessoaNormal + pontosAdquiridos
      console.log('Pessoa Reservada', pontuaçãoQuestao1) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };

  const handleChangeEgocenctrica = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 = pessoaNormal + pontosAdquiridos
      console.log('Pessoa Egocentrica', pontuaçãoQuestao1) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };

  const handleChangeExemplar = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 = pessoaNormal + pontosAdquiridos
      console.log('Pessoa Exemplar', pontuaçãoQuestao1) 
    } else {
      console.log('⛔️ Checkbox foi retirado');
    }
    setarRespondido(current => !current);
  };


  return (
    <div className={styles.container}>
        <Link href='/'>
            <Image src="/cookie.png" alt="Cookie Logo" width={70} height={70} />
        </Link>
        
        <main className={styles.main}>
        <form className={styles.questions_box}>

            <p className={styles.question_text}>Question 1</p>
            <ul className={styles.awnser_box}>
                <li className={styles.awnser}>
                  Resposta 1 <input  type="checkbox" value={estaRespondido} onChange={handleChangeRegular} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                  Resposta 2 <input  type="checkbox" value={estaRespondido} onChange={handleChangeReservada} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                  Resposta 3 <input  type="checkbox" value={estaRespondido} onChange={handleChangeEgocenctrica} id="subscribe" name="subscribe"></input>
                </li> 
                <li className={styles.awnser}>
                  Resposta 4 <input  type="checkbox" value={estaRespondido} onChange={handleChangeExemplar} id="subscribe" name="subscribe"></input>
                </li> 
            </ul>
        </form>

        <Link href='/questions'>
            Anterior
        </Link>
        
      </main>
    </div>
  )
}