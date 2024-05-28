'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const mongoose_1 = require('mongoose')
const diarySchema = new mongoose_1.Schema({
  weather: { type: String, required: true },
  visibility: { type: String, required: true },
  comment: { type: String, required: true }
})
const DiaryModel = (0, mongoose_1.model)('Diary', diarySchema)
exports.default = DiaryModel
