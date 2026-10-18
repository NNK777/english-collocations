import { useState } from 'react'

interface Props {
  onExit: () => void
}

function CollocationWord({ word, translation }: { word: string; translation: string }) {
  const parts = word.split('/')
  return (
    <span className="group relative inline-block">
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span>/</span>}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">{part}</em>
        </span>
      ))}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-base text-white opacity-0 transition-opacity group-hover:opacity-100 group-hover:visible group-active:opacity-100 group-active:visible group-focus-within:opacity-100 group-focus-within:visible dark:bg-slate-700">
        {translation}
      </span>
    </span>
  )
}

function WrongCollocation({ word, translation }: { word: string; translation?: string }) {
  const segs = word.split('your')
  const hasYour = segs.length > 1

  const content = hasYour ? (
    <>
      {segs.map((seg, i) => {
        const leading = seg.match(/^\s*/)?.[0] ?? ''
        const trailing = seg.match(/\s*$/)?.[0] ?? ''
        const core = seg.trim()
        return (
          <span key={i}>
            {i > 0 && <span>your</span>}
            {leading && <span>{leading}</span>}
            {core && <em className="font-semibold text-red-600 dark:text-red-400">{core}</em>}
            {trailing && <span>{trailing}</span>}
          </span>
        )
      })}
    </>
  ) : (
    <em className="font-semibold text-red-600 dark:text-red-400">{word}</em>
  )

  if (!translation) {
    return content
  }
  return (
    <span className="group relative inline-block">
      {content}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-base text-white opacity-0 transition-opacity group-hover:opacity-100 group-hover:visible group-active:opacity-100 group-active:visible group-focus-within:opacity-100 group-focus-within:visible dark:bg-slate-700">
        {translation}
      </span>
    </span>
  )
}

export default function IntroductionScreen({ onExit }: Props) {
  const [expandedBlock, setExpandedBlock] = useState<number | null>(null)
  const [showEnglish, setShowEnglish] = useState(false)
  const [showEnglish2, setShowEnglish2] = useState(false)
  const [showEnglish3, setShowEnglish3] = useState(false)

  const toggleBlock = (index: number) => {
    setExpandedBlock((prev) => (prev === index ? null : index))
  }

  const toggleEnglish = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Введение / Introduction
        </p>
        <button
          type="button"
          onClick={onExit}
          className="rounded-lg px-3 py-1.5 text-sm text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          Выйти
        </button>
      </div>

      {/* Первый блок */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <button
          type="button"
          onClick={() => toggleBlock(0)}
          className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
        >
          <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">
            Что такое коллокация?
          </span>
          <span className="text-lg text-slate-400 dark:text-slate-500">
            {expandedBlock === 0 ? '−' : '+'}
          </span>
        </button>
        {expandedBlock === 0 && (
          <div className="px-5 pb-5">
            <p className="text-base leading-relaxed">
              Коллокация — это естественное сочетание слов. Под этим термином понимается то, как
              английские слова тесно связаны друг с другом. Например, <CollocationWord word="do" translation="делать" /> и{' '}
              <CollocationWord word="homework" translation="домашнее задание" /> сочетаются друг с
              другом, так же как <CollocationWord word="make" translation="совершать" /> и{' '}
              <CollocationWord word="mistakes" translation="ошибки" />;{' '}
              <CollocationWord word="tall" translation="высокий" /> — с{' '}
              <CollocationWord word="man/woman" translation="мужчина/женщина" />, а{' '}
              <CollocationWord word="high" translation="высокий" /> — с{' '}
              <CollocationWord word="mountain" translation="гора" />.
            </p>

            <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
              <button
                type="button"
                onClick={() => toggleEnglish(setShowEnglish)}
                className="text-xs font-semibold uppercase tracking-wide text-slate-400 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
              >
                {showEnglish ? 'Скрыть английский текст' : 'Показать английский текст'}
              </button>

              {showEnglish && (
                <p className="mt-2 text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">What is a collocation?</span>
                  <br />
                  Collocation means a natural combination of words; it refers to the way English words
                  are closely associated with each other. For example,{' '}
                  <em className="font-semibold text-emerald-600 dark:text-emerald-400">do</em> and{' '}
                  <em className="font-semibold text-emerald-600 dark:text-emerald-400">homework</em> go
                  together, as do{' '}
                  <em className="font-semibold text-emerald-600 dark:text-emerald-400">make</em> and{' '}
                  <em className="font-semibold text-emerald-600 dark:text-emerald-400">mistakes</em>;{' '}
                  <em className="font-semibold text-emerald-600 dark:text-emerald-400">tall</em> goes with{' '}
                  <em className="font-semibold text-emerald-600 dark:text-emerald-400">man</em>/<em className="font-semibold text-emerald-600 dark:text-emerald-400">woman</em> and{' '}
                  <em className="font-semibold text-emerald-600 dark:text-emerald-400">high</em> with{' '}
                  <em className="font-semibold text-emerald-600 dark:text-emerald-400">mountain</em>.
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Второй блок */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <button
          type="button"
          onClick={() => toggleBlock(1)}
          className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
        >
          <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">
            Зачем изучать коллокации?
          </span>
          <span className="text-lg text-slate-400 dark:text-slate-500">
            {expandedBlock === 1 ? '−' : '+'}
          </span>
        </button>
        {expandedBlock === 1 && (
          <div className="px-5 pb-5">
            <p className="text-base leading-relaxed">
              Коллокации помогут вам говорить и писать
              по-английски более естественно и точно. Люди, вероятно, поймут, что вы имеете в виду,
              если вы скажете «<WrongCollocation word="making your homework" />» или «My uncle is a very{' '}
              <WrongCollocation word="high man" />», но ваша речь будет звучать неестественно и,
              возможно, вызовет недоумение. Вы имели в виду, что ваш дядя ростом два метра, или что он
              занимает высокую должность в правительстве или бизнесе?
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Изучение словосочетаний также поможет вам расширить свой словарный запас английского
              языка. Например, вам будет легче избегать таких слов, как «very», «nice» или «beautiful»,
              выбирая вместо них слово, которое лучше подходит к контексту и имеет более точное
              значение. Это особенно полезно, если вы сдаете письменный экзамен по английскому языку и
              хотите произвести хорошее впечатление на экзаменаторов.
            </p>

            <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
              <button
                type="button"
                onClick={() => toggleEnglish(setShowEnglish2)}
                className="text-xs font-semibold uppercase tracking-wide text-slate-400 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
              >
                {showEnglish2 ? 'Скрыть английский текст' : 'Показать английский текст'}
              </button>

              {showEnglish2 && (
                <div className="mt-2 space-y-4">
                  <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">Why learn collocations?</span>
                    <br />
                    You need to learn collocations because they will help you to speak and write English
                    in a more natural and accurate way. People will probably understand what you mean if
                    you talk about «<WrongCollocation word="making your homework" />» or say{' '}
                    «<WrongCollocation word="My uncle is a very high man" />» but your language will sound
                    unnatural and might perhaps confuse. Did you mean that your uncle is two metres tall
                    or did you mean that he has a high position in government or business?
                  </p>
                  <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                    Learning collocations will also help you to increase your range of English
                    vocabulary. For example, you'll find it easier to avoid words like very or nice or
                    beautiful or get by choosing a word that fits the context better and has a more
                    precise meaning. This is particularly useful if you are taking a written exam in
                    English and want to make a good impression on the examiners.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Третий блок */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <button
          type="button"
          onClick={() => toggleBlock(2)}
          className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
        >
          <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">
            Как были отобраны коллокации для этого курса?
          </span>
          <span className="text-lg text-slate-400 dark:text-slate-500">
            {expandedBlock === 2 ? '−' : '+'}
          </span>
        </button>
        {expandedBlock === 2 && (
          <div className="px-5 pb-5">
            <p className="text-base leading-relaxed">
              Коллокации, представленные в этом курсе, были в основном отобраны из тех, которые были
              признаны значимыми Кембриджским международным корпусом письменного и разговорного
              английского языка (ныне известным как Кембриджский английский корпус), а также корпусом
              разговорного английского языка CANCODE, разработанным в Ноттингемском университете в
              сотрудничестве с издательством Cambridge University Press. Кембриджский корпус английского
              языка — это обширная база данных реальных текстов на английском языке, взятых из
              различных источников, таких как книги, газеты, реклама, письма и электронные письма,
              веб-сайты, разговоры и речи, а также радио и телевидение. Изучив этот корпус, была
              получена репрезентативная картину того, как на самом деле используется английский язык и
              какие слова естественным образом и часто встречаются вместе. Также широко использовался
              «Кембриджский корпус учащихся» — корпус текстов, написанных учащимися на английском
              языке, составленный из экзаменационных работ студентов, сдававших экзамены по
              английскому языку Кембриджского университета по всему миру. Именно этот корпус показал,
              какие именно ошибки в словосочетаниях чаще всего допускают учащиеся.
            </p>

            <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
              <button
                type="button"
                onClick={() => toggleEnglish(setShowEnglish3)}
                className="text-xs font-semibold uppercase tracking-wide text-slate-400 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
              >
                {showEnglish3 ? 'Скрыть английский текст' : 'Показать английский текст'}
              </button>

              {showEnglish3 && (
                <p className="mt-2 text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                  English text will be added later.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
