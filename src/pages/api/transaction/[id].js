import { ObjectId } from 'mongodb'
import connection from '../../../utils/database'

export default async (req, res) => {

    if (req.method === 'DELETE') {

        const { id } = req.query

        if (!id) {
            res.status(400).json({error: 'Missing ID'})
            return
        }

        let _id = ObjectId(id)
        try {
            _id = new ObjectId(id)
        } catch {
            res.status(400).json({error: 'Wrong ObjectID'})
            return
        }

        const { db } = await connection()

        const response = await db.collection('transactions').deleteOne({ _id })

        res.status(200).json({error: `The ID ${_id} was deleted`})

    } else {
    res.status(400).json({ error: 'Wrong request method' })
  }
}