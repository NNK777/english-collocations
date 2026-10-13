import { readFileSync } from 'node:fs'

const data = JSON.parse(readFileSync(new URL('../src/data/collocations.json', import.meta.url)))

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'your', 'my', 'his', 'her', 'its', 'our', 'their',
  'something', 'someone', 'anything', 'anyone', 'yourself', 'oneself',
  'meet', 'across', 'understood',
  'up', 'on', 'in', 'to', 'for', 'with', 'of', 'by', 'about', 'out',
])

function partnerOf(phrase) {
  const tokens = phrase.toLowerCase().split(/\s+/)
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (!STOP_WORDS.has(tokens[i])) return tokens[i]
  }
  return null
}

function countWholeWord(text, word) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const matches = text.match(new RegExp(`\\b${escaped}\\b`, 'gi'))
  return matches ? matches.length : 0
}

const byUnit = {}
const partners = new Set()
const ineligible = []

for (const c of data) {
  byUnit[c.unit] = (byUnit[c.unit] ?? 0) + 1
  const partner = partnerOf(c.phrase)
  if (!partner || countWholeWord(c.example, partner) !== 1) {
    ineligible.push(c)
  } else {
    partners.add(partner)
  }
}

console.log(`Всего коллокаций: ${data.length}`)
console.log('По юнитам:', byUnit)
console.log(`Допущено к тестированию: ${data.length - ineligible.length}`)
console.log(`Уникальных партнёров для дистракторов: ${partners.size}`)
if (ineligible.length > 0) {
  console.log('Не допущены (партнёр не найден в примере ровно 1 раз):')
  for (const c of ineligible) console.log(`  #${c.id} ${c.phrase}`)
}
