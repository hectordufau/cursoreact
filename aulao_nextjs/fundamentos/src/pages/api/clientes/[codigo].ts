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
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        name: `Maria ${codigo}`
    })
}

export default hander