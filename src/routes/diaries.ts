import express from 'express'
import * as DiarySerives from '../services/diariesServices'

import DiaryModel from '../model/diary'

const router = express.Router()

router.get('/', async  (_req, res) => {
  try{
    let diaries = await DiaryModel.find();
    res.json(diaries)
  }catch(e: any){
    res.status(500).json({message: e.message})
  }
})
router.get('/:id', (req, res) => {
  const id = req.params.id
  const diary = DiarySerives.getOneEntry(+id)
  return diary != null ? res.send(diary) : res.status(404)
})


router.delete('/', async (_req, res) => {
  try {
    
    await DiaryModel.deleteMany({});
    console.log("Todos los documentos fueron eliminados exitosamente.");
    res.status(200).send("Eliminado exitosamente");
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }

})
router.post('/', async (req, res) => {
console.log(req.body)
    try {
      const { weather, visibility, comment } = req.body;
      const newContact = new DiaryModel({ weather, visibility, comment});
      const savedContact = await newContact.save();
      res.status(201).json(savedContact);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }

})

export default router
