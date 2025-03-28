import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Recebe os dados diretamente sem desestruturar
  const dataContent = req.body;
  console.log("req.body:", req.body);
  console.log("DATACONTENT NO SERVIDOR", dataContent);

  try {
    const response = await axios.post("http://localhost:8080/address", dataContent, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("RESPONSE SENDADDRESS SERVER:", response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro no servidor", error);
    res.status(500).json({ error: "Erro ao enviar os dados" });
  }
}
