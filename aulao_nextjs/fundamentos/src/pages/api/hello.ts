// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  metodo?: string,
  nome?: string | string[],
  idade?: string | string[]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe", metodo: req.method, nome: req.query.nome, idade: req.query.idade });
}
