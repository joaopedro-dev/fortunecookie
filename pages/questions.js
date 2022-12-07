import Image from 'next/image'
import styles from '../styles/questions.module.css'
import Link from 'next/link'
import {useState} from 'react';

export default function questions(props) {
  
  const [estaRespondido, setarRespondido] = useState(false);
  const pontosAdquiridos = 10

  const pessoaNormal = 0

  const handleChange = event => {
    if (event.target.checked) {
      const pontuaçãoQuestao1 = pessoaNormal + pontosAdquiridos
      console.log('Pessoa Normal', pontuaçãoQuestao1) 
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

            <p className={styles.question_text}>Question 0</p>
            <ul className={styles.awnser_box}>
                <li className={styles.awnser}>
                  Resposta 4 <input  type="checkbox" value={estaRespondido} onChange={handleChange} id="subscribe" name="subscribe"></input>
                </li> 
            </ul>
        </form>

        <Link href='/questions1'>
            Proxima
        </Link>
        
      </main>
    </div>
  )
}