export interface Collocation {
  id: number
  phrase: string
  translation: string
  example: string
  category: string
  unit: number
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

export const UNITS: { id: number; label: string }[] = [
  { id: 1, label: 'Unit 1' },
  { id: 2, label: 'Unit 2' },
  { id: 3, label: 'Unit 3' },
]

/** Тест всегда содержит 10 выражений из коллокаций выбранного юнита. */
export const TEST_QUESTION_COUNT = 10

export interface QuizConfig {
  unit: number
}
