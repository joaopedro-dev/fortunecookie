export default function handler(req, res) {
    res.status(200).json([
      {
      id:1,
      questao:'Qual super herói da Marvel você mais se identifica?',
      alternatinaRegular:'Deadpool',
      alternatinaReservada:'Homem-Aranha',
      alternatinaEgocentrica:'Tony Stark',
      alternatinaExemplar:'Capitão América',
      }
    ])}
