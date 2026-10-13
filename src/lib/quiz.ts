import raw from '../data/collocations.json'
import type { Collocation } from './types'
import { TEST_QUESTION_COUNT } from './types'

export const collocations = raw as unknown as Collocation[]

/**
 * Служебные слова, которые не могут быть «партнёром» коллокации
 * (последнее значимое слово фразы, которое мы проверяем в примере).
 */
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'your', 'my', 'his', 'her', 'its', 'our', 'their',
  'something', 'someone', 'anything', 'anyone', 'yourself', 'oneself',
  'meet', 'across', 'understood',
  'up', 'on', 'in', 'to', 'for', 'with', 'of', 'by', 'about', 'out',
])

/** Партнёр коллокации — последнее значимое слово фразы. */
function partnerOf(phrase: string): string | null {
  const tokens = phrase.toLowerCase().split(/\s+/)
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (!STOP_WORDS.has(tokens[i])) return tokens[i]
  }
  return null
}

function countWholeWord(text: string, word: string): number {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const matches = text.match(new RegExp(`\\b${escaped}\\b`, 'gi'))
  return matches ? matches.length : 0
}

export interface EligibleEntry extends Collocation {
  partner: string
  head: string
}

/**
 * К тестированию допускаются коллокации, у которых партнёр встречается
 * в примере ровно один раз — так вопрос однозначен.
 */
function buildPool(): EligibleEntry[] {
  const pool: EligibleEntry[] = []
  for (const c of collocations) {
    const partner = partnerOf(c.phrase)
    if (!partner) continue
    if (countWholeWord(c.example, partner) !== 1) continue
    const head = c.phrase.split(/\s+/)[0]
    pool.push({ ...c, partner, head })
  }
  return pool
}

export type QuestionType = 'fill' | 'choose'

export interface Question {
  entry: EligibleEntry
  type: QuestionType
  /** Для fill: пример с пропуском вместо партнёра. */
  sentence?: string
  options: string[]
}

export interface QuizResult {
  total: number
  correct: number
  wrong: EligibleEntry[]
}

function shuffle<T>(items: T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function pickDistractors(
  pool: EligibleEntry[],
  entry: EligibleEntry,
  forbidden: Set<string>,
  count: number,
): string[] {
  const sameCat = pool.filter(
    (e) => e.category === entry.category && e.partner !== entry.partner && !forbidden.has(e.partner),
  )
  const rest = pool.filter(
    (e) => e.category !== entry.category && e.partner !== entry.partner && !forbidden.has(e.partner),
  )
  const seen = new Set<string>([entry.partner, ...forbidden])
  const out: string[] = []
  for (const e of [...shuffle(sameCat), ...shuffle(rest)]) {
    if (!seen.has(e.partner)) {
      seen.add(e.partner)
      out.push(e.partner)
    }
    if (out.length >= count) break
  }
  return out
}

export function generateQuiz(unit: number): Question[] {
  const pool = buildPool().filter((e) => e.unit === unit)
  if (pool.length === 0) return []

  // Партнёры, которые сочетаются с данным головным словом — их нельзя брать в дистракторы,
  // иначе получится несколько правильных ответов.
  const partnersByHead = new Map<string, Set<string>>()
  for (const e of pool) {
    const key = e.head.toLowerCase()
    let set = partnersByHead.get(key)
    if (!set) {
      set = new Set()
      partnersByHead.set(key, set)
    }
    set.add(e.partner)
  }

  const questions: Question[] = []
  for (const entry of shuffle(pool)) {
    if (questions.length >= TEST_QUESTION_COUNT) break
    const type: QuestionType = Math.random() < 0.5 ? 'fill' : 'choose'
    let sentence: string | undefined
    let forbidden = new Set<string>()
    if (type === 'fill') {
      const escaped = entry.partner.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      sentence = entry.example.replace(new RegExp(`\\b${escaped}\\b`, 'i'), '___')
    } else {
      forbidden = partnersByHead.get(entry.head.toLowerCase()) ?? new Set()
    }
    const distractors = pickDistractors(pool, entry, forbidden, 3)
    questions.push({
      entry,
      type,
      sentence,
      options: shuffle([entry.partner, ...distractors]),
    })
  }
  return questions
}

/** Сколько коллокаций доступно в выбранном юните. */
export function availableCount(unit: number): number {
  return buildPool().filter((e) => e.unit === unit).length
}
