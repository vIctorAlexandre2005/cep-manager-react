import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { id } = req.body;
  
  try {
    const response = await axios.get(`http://localhost:8080/address/${id}`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro no servidor", error);
    res.status(500).json({ error: "Erro ao buscar os dados" });
  };
};
