import { Schema, model } from 'mongoose';
import { DiaryEntry } from '../types';

const diarySchema = new Schema<DiaryEntry>({
  weather: { type: String, required: true },
  visibility: { type: String, required: true },
  comment: { type: String, required: true}
});

const DiaryModel = model<DiaryEntry>('Diary', diarySchema);

export default DiaryModel;