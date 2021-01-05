import { ObjectId } from 'mongodb'
import connection from '../../utils/database'

export default async (req, res) => {

  if (req.method === 'POST')
  {
    const { description, amount, typeOf } = req.body
    if (!description || !amount || !typeOf)
    {
      res.status(400).json({error: 'Missing body parameters'})
      return
    }
    const { db } = await connection()
    const response = await db.collection('transactions').insertOne({
      description,
      amount,
      typeOf
    })
    res.status(200).json(response.ops[0])
  }
  
  else if (req.method === 'GET')
  {
    const { db } = await connection()
    const callback = []
    const response = await db.collection('transactions').find({}).toArray(callback)
    res.status(200).json(response)
  }

  else if (req.method === 'DELETE')
  {
    const { ID } = req.body
    if (!ID)
    {
      res.status(400).json({error: 'Missing ID'})
      return
    }
    const { db } = await connection()
    const response = await db.collection('transactions').deleteOne({
      _id : ObjectId(ID),
    })
    res.status(200).json(`The ID: "${ID}" was deleted`)
  }
  
  else
  {
    res.status(400).json({ error: 'Wrong request method' })
  }

}