import { ObjectId } from 'mongodb'
import connection from '../../utils/database'

export default async (req, res) => {

  if (req.method === 'DELETE') {

    const { ID } = req.body

    if (!ID) {
      res.status(400).json({error: 'Missing ID'})
      return
    }

    const { db } = await connection()

    const response = await db.collection('transactions').deleteOne({
      _id : ObjectId(ID),
    })

    res.status(200).json(`${response.deletedCount} document was deleted`)
  } else {
    res.status(400).json({ error: 'Wrong request method' })
  }

}