import connection from '../../utils/database'

export default async (req, res) => {

  if (req.method === 'GET') {

    const { db } = await connection()

    const callback = []

    const response = await db.collection('transactions').find({}).toArray(callback)

    res.status(200).json(response)
  } else {
    res.status(400).json({ error: 'Wrong request method' })
  }

}