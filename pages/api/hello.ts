import { NextApiRequest,NextApiResponse } from "next/types";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(404).json({ name: 'John Doe' })
}