import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cep } = req.body;
  try {
    console.log(cep);
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.log("Erro no servidor", error);
  };
};
