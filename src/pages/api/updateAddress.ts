import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Recebe os dados diretamente sem desestruturar
  const dataContent = req.body;
  console.log("dataContent", dataContent?.id);

  try {
    const response = await axios.put(`http://localhost:8080/address/${dataContent?.id}`, dataContent);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro no servidor", error);
    res.status(500).json({ error: "Erro ao enviar os dados" });
  }
}
