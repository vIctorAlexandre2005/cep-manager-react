import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`http://localhost:8080/address`);
    const data = await response.data;
    console.log(data.content);
    res.status(200).json(data?.content);
  } catch (error) {
    console.log("Erro no servidor", error);
  };
};
