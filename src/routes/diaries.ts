import express from 'express'
import * as DiarySerives from '../services/diariesServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(DiarySerives.getEntriesWithoutComment())
})
router.get('/:id', (req, res) => {
  const id = req.params.id
  const diary = DiarySerives.getOneEntry(+id)
  return diary != null ? res.send(diary) : res.status(404)
})
router.post('/', (req, res) => {
  try {
    const newDiary = toNewDiaryEntry(req.body)

    const addedDiary = DiarySerives.addDiary(newDiary)

    res.json(addedDiary)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
