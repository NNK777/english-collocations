export type Level = 'A2' | 'B1' | 'B2' | 'C1'

export interface Collocation {
  id: number
  phrase: string
  translation: string
  example: string
  category: string
  level: Level
}

export const CATEGORIES: { id: string; label: string }[] = [
  { id: 'work', label: 'Работа' },
  { id: 'emotions', label: 'Эмоции' },
  { id: 'weather', label: 'Погода' },
  { id: 'business', label: 'Бизнес' },
  { id: 'home', label: 'Быт' },
  { id: 'health', label: 'Здоровье' },
  { id: 'travel', label: 'Путешествия' },
  { id: 'education', label: 'Образование' },
  { id: 'food', label: 'Еда' },
  { id: 'communication', label: 'Общение' },
]

export const LEVELS: Level[] = ['A2', 'B1', 'B2', 'C1']

export type LevelFilter = Level | 'all'

export interface QuizConfig {
  category: string | null
  level: LevelFilter
  count: number
}
