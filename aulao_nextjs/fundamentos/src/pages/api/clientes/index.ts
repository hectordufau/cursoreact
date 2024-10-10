import type { NextApiRequest, NextApiResponse } from "next";

const hander = (
    req: NextApiRequest,
    res: NextApiResponse,
) => {
    if (req.method === 'GET') {
        handleGet(req, res)
    } else {
        res.status(405).send({})
    }
}

const handleGet = (
    req: NextApiRequest,
    res: NextApiResponse,
) => {
    res.status(200).json({
        id: 20,
        name: "Maria"
    })
}

export default hander