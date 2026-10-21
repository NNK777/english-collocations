import { useState } from 'react'
import { CollocationWord, OrangeWord, WrongCollocation } from './CollocationWords'

interface Props {
  unitLabel: string
  onExit: () => void
}

/** Разделы презентационной страницы юнита. Содержание B и C добавим позже. */
const BLOCKS = ['A', 'B', 'C']

function BlockAContent() {
  const [showEnglish, setShowEnglish] = useState(false)

  return (
    <>
      <p className="text-base leading-relaxed">
        Коллокация — это пара или группа слов, которые часто используются вместе. Такие сочетания
        звучат естественно для носителей языка, но изучающим английский приходится{' '}
        <CollocationWord word="make a special effort" translation="приложить особые усилия" />, чтобы
        их выучить, потому что их часто трудно угадать. Некоторые сочетания просто звучат
        «неправильно» для носителей английского языка. Например, прилагательное fast сочетается с
        cars, но не с a glance.
      </p>
      <p className="mt-4 text-base leading-relaxed">
        Изучение коллокаций — важная часть изучения словарного запаса языка. Некоторые коллокации
        являются фиксированными, или очень устойчивыми, например{' '}
        <CollocationWord word="take a photo" translation="сделать фотографию" />, где никакое другое
        слово, кроме take, не сочетается с photo, чтобы передать то же значение. Некоторые коллокации
        более свободные, когда для передачи похожего значения может использоваться несколько разных
        слов, например{' '}
        <CollocationWord word="keep to / stick to the rules" translation="придерживаться правил" />.
        Вот ещё несколько примеров коллокаций.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed">
        <li>
          Вам нужно <CollocationWord word="make an effort" translation="приложить усилие" /> и
          готовиться к экзаменам (а не <WrongCollocation word="do an effort" />)
        </li>
        <li>
          Ты <CollocationWord word="watch TV" translation="смотреть телевизор" /> вчера вечером? (а не{' '}
          <WrongCollocation word="look at TV" />)
        </li>
        <li>
          У этой машины очень{' '}
          <CollocationWord word="powerful engine" translation="мощный двигатель" />. Она может
          проезжать 200 км в час. (а не <WrongCollocation word="strong engine" />)
        </li>
        <li>
          Рядом есть{' '}
          <CollocationWord word="ancient monuments" translation="древние памятники" />. (а не{' '}
          <WrongCollocation word="antique monuments" />)
        </li>
      </ul>
      <p className="mt-4 text-base leading-relaxed">
        Иногда пара слов может быть не абсолютно неправильной, и люди поймут, что имеется в виду, но
        это может быть не естественной, нормальной коллокацией. Если кто-то скажет «I{' '}
        <WrongCollocation word="did a few mistakes" />», его поймут, но беглый носитель английского,
        вероятно, скажет «I{' '}
        <CollocationWord word="made a few mistakes" translation="сделал несколько ошибок" />».
      </p>

      <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
        <button
          type="button"
          onClick={() => setShowEnglish(!showEnglish)}
          className="text-xs font-semibold uppercase tracking-wide text-slate-400 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
        >
          {showEnglish ? 'Скрыть английский текст' : 'Показать английский текст'}
        </button>

        {showEnglish && (
          <div className="mt-2 space-y-4">
            <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
              A collocation is a pair or group of words that are often used together. These
              combinations sound natural to native speakers, but students of English have to{' '}
              <CollocationWord word="make a special effort" translation="приложить особые усилия" />{' '}
              to learn them because they are often difficult to guess. Some combinations just sound
              ‘wrong’ to native speakers of English. For example, the adjective fast collocates with
              cars, but not with a glance.
            </p>
            <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
              Learning collocations is an important part of learning the vocabulary of a language.
              Some collocations are fixed, or very strong, for example{' '}
              <CollocationWord word="take a photo" translation="сделать фотографию" />, where no word
              other than take collocates with photo to give the same meaning. Some collocations are
              more open, where several different words may be used to give a similar meaning, for
              example{' '}
              <CollocationWord word="keep to / stick to the rules" translation="придерживаться правил" />.
              Here are some more examples of collocations.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
              <li>
                You must <CollocationWord word="make an effort" translation="приложить усилие" /> and
                study for your exams (NOT <WrongCollocation word="do an effort" />)
              </li>
              <li>
                Did you <CollocationWord word="watch TV" translation="смотреть телевизор" /> last
                night? (NOT <WrongCollocation word="look at TV" />)
              </li>
              <li>
                This car has a very{' '}
                <CollocationWord word="powerful engine" translation="мощный двигатель" />. It can do
                200 km an hour. (NOT <WrongCollocation word="strong engine" />)
              </li>
              <li>
                There are some{' '}
                <CollocationWord word="ancient monuments" translation="древние памятники" /> nearby.
                (NOT <WrongCollocation word="antique monuments" />)
              </li>
            </ul>
            <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
              Sometimes, a pair of words may not be absolutely wrong, and people will understand what
              is meant, but it may not be the natural, normal collocation. If someone says I{' '}
              <WrongCollocation word="did a few mistakes" />, they will be understood, but a fluent
              speaker of English would probably say I{' '}
              <CollocationWord word="made a few mistakes" translation="сделал несколько ошибок" />.
            </p>
          </div>
        )}
      </div>
    </>
  )
}

function BlockBContent() {
  return (
    <>
      <p className="text-base leading-relaxed">
        Compounds are units of meaning formed with two or more words. Sometimes the words are
        written separately, sometimes they have a hyphen and sometimes they are written as one
        word. Usually the meaning of the compound can be guessed by knowing the meaning of the
        individual words. Some examples of compounds are{' '}
        <CollocationWord word="car park" translation="парковка" />,{' '}
        <CollocationWord word="post office" translation="почта" />,{' '}
        <CollocationWord word="narrow-minded" translation="узколобый" />,{' '}
        <CollocationWord word="shoelaces" translation="шнурки" />,{' '}
        <CollocationWord word="teapot" translation="заварочный чайник" />.
      </p>
      <p className="mt-4 text-base leading-relaxed">
        It is not always easy to separate collocations and compounds and, where they are useful for
        learners or an important part of the vocabulary of a topic, we include some compounds in
        this course too.
      </p>
      <p className="mt-4 text-base leading-relaxed">
        Idioms are groups of words in a fixed order that have a meaning that cannot be guessed by
        knowing the meaning of the individual words. For example,{' '}
        <CollocationWord word="pass the buck" translation="переложить ответственность" /> is an
        idiom meaning ‘to pass responsibility for a problem to another person to avoid dealing with
        it oneself’. We deal with idioms in detail in the course{' '}
        <OrangeWord>English Idioms in Use</OrangeWord> in this series.
      </p>
    </>
  )
}

export default function PresentationScreen({ unitLabel, onExit }: Props) {
  const [expandedBlock, setExpandedBlock] = useState<number | null>(null)

  const toggleBlock = (index: number) => {
    setExpandedBlock((prev) => (prev === index ? null : index))
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {unitLabel} · Теория / Presentation
        </p>
        <button
          type="button"
          onClick={onExit}
          className="rounded-lg px-3 py-1.5 text-sm text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          Выйти
        </button>
      </div>

      {BLOCKS.map((label, index) => (
        <div
          key={label}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <button
            type="button"
            onClick={() => toggleBlock(index)}
            className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
          >
            <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">
              {label}
            </span>
            <span className="text-lg text-slate-400 dark:text-slate-500">
              {expandedBlock === index ? '−' : '+'}
            </span>
          </button>
          {expandedBlock === index && (
            <div className="px-5 pb-5">
              {label === 'A' ? (
                <BlockAContent />
              ) : label === 'B' ? (
                <BlockBContent />
              ) : (
                <p className="text-base leading-relaxed text-slate-400 dark:text-slate-500">
                  Содержание раздела будет добавлено позже.
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
