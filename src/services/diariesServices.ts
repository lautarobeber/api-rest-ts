import { DiaryWithoutComment, DiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
export const getEntries = (): DiaryEntry[] => diaries
export const getEntriesWithoutComment = (): DiaryWithoutComment[] => {
  return diaries.map(({ id, date, visibility, weather }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const getOneEntry = (id: number): DiaryEntry | undefined => {
  return diaries.find((entry) => entry.id === id)
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry | undefined => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)

  return newDiary
}
