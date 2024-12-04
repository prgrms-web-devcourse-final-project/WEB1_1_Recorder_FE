import { getReviewList } from "@/services/getReviewList";
import { TReviewItem } from "@/types/reviewTypes";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const data: TReviewItem[] | [] = await getReviewList(JSON.parse(req.body));
      res.status(200).json(data);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(400).json(error);
  }
}
