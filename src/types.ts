
export enum Visibility {
  Escasa = 'Escasa',
  Perfecta = 'Perfecta',
  Mala = 'Mala'
}
export enum Weather {
  Lluvioso = 'Lluvioso',
  Soleado = 'Soleado',
  Nublado = 'Nublado',
  Tormentoso = 'Tormentoso',
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type DiaryWithoutComment = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
