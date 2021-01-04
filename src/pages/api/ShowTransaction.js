import { ObjectId } from 'mongodb'
import connection from '../../utils/database'

export default async (req, res) => {

  if (req.method === 'GET') {

    const { ID } = req.body

    if (!ID) {
      res.status(400).json({error: 'Missing ID'})
      return
    }

    const { db } = await connection()

    const callback = []

    const response = await db.collection('transactions').find({
      _id : ObjectId(ID),
    }).toArray(callback)

    res.status(200).json(response)
  } else {
    res.status(400).json({ error: 'Wrong request method' })
  }

}