import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method ===  'POST') {
  const { name, surname, cpf, birthdate, age } = req.body;
  res.status(200).json( { name, surname, cpf, birthdate, age})
  console.log(name)
  } else{
    res.status(400).json({ message: 'Método não permitido' });
  }
} 
//ele nõ está coletando o dado do formulário(assimilando name com seu valor)