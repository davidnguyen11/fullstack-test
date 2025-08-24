import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { text } = req.body

        const explanation = `Mocked explanation for: "${text}"`

        return res.status(200).json({ explanation })
    }

    return res.status(405).json({ message: 'Method not allowed' })
}