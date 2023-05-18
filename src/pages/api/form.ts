import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, surname, cpf, birthdate, age } = req.body;
  res.status(200).json({ name, surname, cpf, birthdate, age})
} //ele nõ está coletando o dado do formulário(assimilando name com seu valor)