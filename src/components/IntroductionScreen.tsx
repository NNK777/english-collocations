import { useState } from 'react'
import {
  CollocationWord,
  OrangeWord,
  StrikeRedWord,
  WrongCollocation,
} from './CollocationWords'

interface Props {
  onExit: () => void
}

export default function IntroductionScreen({ onExit }: Props) {
  const [expandedBlock, setExpandedBlock] = useState<number | null>(null)
  const [showEnglish, setShowEnglish] = useState(false)
  const [showEnglish2, setShowEnglish2] = useState(false)
  const [showEnglish3, setShowEnglish3] = useState(false)

  const toggleBlock = (index: number) => {
    setExpandedBlock((prev) => (prev === index ? null : index))
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
                onClick={() => setShowEnglish(!showEnglish)}
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
                onClick={() => setShowEnglish2(!showEnglish2)}
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
                    «My uncle is a very <WrongCollocation word="high man" />» but your language will sound
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
          <div className="space-y-4 px-5 pb-5">
            <p className="text-base leading-relaxed">
              Коллокации, представленные в этом курсе, были в основном отобраны из тех, которые были
              признаны значимыми Кембриджским международным корпусом письменного и разговорного
              английского языка (ныне известным как Кембриджский корпус английского языка), а также
              корпусом разговорного английского языка CANCODE, разработаным в Ноттингемском
              университете в сотрудничестве с издательством Cambridge University Press. Кембриджский
              корпус английского языка — это обширная база данных реальных текстов на английском языке,
              взятых из различных источников, таких как книги, газеты, реклама, письма и электронные
              письма, веб-сайты, разговоры и речи, а также радио и телевидение. Изучив этот корпус,
              была получена репрезентативная картина того, как на самом деле используется английский язык
              и какие слова естественным образом и часто встречаются вместе. Также широко использовался
              «Кембриджский корпус учащихся» — корпус текстов, написанных учащимися на английском
              языке, составленный из экзаменационных работ студентов, сдававших экзамены по
              английскому языку Кембриджского университета по всему миру. Именно этот корпус показал,
              какие именно ошибки в коллокациях чаще всего допускают учащиеся.
            </p>
            <p className="text-base leading-relaxed">
              Эти корпусы показывают, что в английском языке существует несколько тысяч коллокаций. Так
              как же нам выбрать, какие из них будут для вас наиболее полезны при работе с этим курсом?
            </p>
            <p className="text-base leading-relaxed">
              Во-первых, конечно же, мы хотели выбрать те выражения, которые вы могли бы использовать в
              своём письменном и разговорном английском. Так, в разделе «Еда и напитки» мы включили,
              например, выражения «<em className="font-semibold text-emerald-600 dark:text-emerald-400">have a quick snack</em>» и{' '}
              «<em className="font-semibold text-emerald-600 dark:text-emerald-400">processed food</em>», но не{' '}
              «<em className="font-semibold text-emerald-600 dark:text-emerald-400">cocoa butter</em>» — это
              весьма устойчивое словосочетание, однако большинству людей оно вряд ли часто понадобится.
            </p>

            <p className="mt-4 text-base leading-relaxed">
              Во-вторых, мы решили, что для вас будет полезнее всего сосредоточиться на тех
              устойчивых словосочетаниях, которые не столь очевидны и которые, как показывает
              «Кембриджский корпус учащихся», часто вызывают у студентов затруднения. Такие
              выражения, как «<OrangeWord>friendly girl</OrangeWord>»,{' '}
              «<OrangeWord>cold water</OrangeWord>» или{' '}
              «<OrangeWord>to eat an apple</OrangeWord>» — это тоже устойчивые словосочетания,
              однако их легко понять и использовать самостоятельно, не испытывая при этом никаких
              проблем. Поэтому здесь мы рассматриваем менее очевидные, но не менее полезные сочетания
              слов: например, «<CollocationWord word="make friends" translation="завести друзей" />» (а не{' '}
              «<StrikeRedWord>get friends</StrikeRedWord>») или{' '}
              «<CollocationWord word="heavy rain" translation="сильный дождь" />» (а не{' '}
              «<StrikeRedWord>strong rain</StrikeRedWord>»).
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Идиомы — это особый тип словосочетаний, в которых фиксированная группа слов имеет
              значение, которое невозможно угадать, зная значение отдельных слов. Мы рассматриваем
              их отдельно в курсе «<OrangeWord>English Idioms in Use</OrangeWord>», поэтому здесь не будем на них
              останавливаться.
            </p>

            <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setShowEnglish3(!showEnglish3)}
                className="text-xs font-semibold uppercase tracking-wide text-slate-400 transition-colors hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400"
              >
                {showEnglish3 ? 'Скрыть английский текст' : 'Показать английский текст'}
              </button>

              {showEnglish3 && (
                <div className="mt-2 space-y-4">
                  <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-[rgb(34,80,128)] dark:text-[rgb(96,165,250)]">How were the collocations in the course selected?</span>
                    <br />
                    The collocations presented in this course were mainly selected from those identified
                    as significant by the Cambridge International Corpus of written and spoken English
                    (now known as the Cambridge English Corpus) and also the CANCODE corpus of spoken
                    English, developed at the University of Nottingham in association with Cambridge
                    University Press. The Cambridge English Corpus is a vast database of real English
                    taken from a range of sources, such as books, newspapers, advertising, letters and
                    emails, websites, conversations and speeches, radio and television. By studying
                    this corpus we obtained a representative picture of how English is really used and
                    which words naturally and frequently go together. We also made much use of the
                    Cambridge Learner Corpus, a corpus of learner English made up of exam scripts from
                    students taking Cambridge English examinations all over the world. This particular
                    corpus showed us what kind of collocation errors learners tend to make.
                  </p>
                  <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                    These corpora show that there are many thousands of collocations in English. So how
                    could we select which ones would be most useful for you to work on in this course?
                  </p>
                  <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                    Firstly, of course, we wanted to choose ones that you might want to use in your own
                    written and spoken English. So, in the unit on Eating and drinking we include, for
                    example,{' '}
                    <em className="font-semibold text-emerald-600 dark:text-emerald-400">have a quick snack</em> and{' '}
                    <em className="font-semibold text-emerald-600 dark:text-emerald-400">processed food</em> but not{' '}
                    <em className="font-semibold text-emerald-600 dark:text-emerald-400">cocoa butter</em>, which is a
                    very strong collocation, but one which has very limited use for most people.
                  </p>
                  <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                    Secondly, we decided it would be most useful for you if we focused on those
                    collocations which are not immediately obvious and which the Cambridge Learner
                    Corpus shows can cause problems for students. A{' '}
                    <OrangeWord>friendly girl</OrangeWord>, <OrangeWord>cold water</OrangeWord> or{' '}
                    <OrangeWord>to eat an apple</OrangeWord> are all collocations, but they are
                    combinations which you can easily understand and produce yourself without any
                    problems. So we deal here with less obvious – though equally useful – word
                    combinations, with, for instance,{' '}
                    <em className="font-semibold text-emerald-600 dark:text-emerald-400">make friends</em> (not{' '}
                    <StrikeRedWord>get friends</StrikeRedWord>) and{' '}
                    <em className="font-semibold text-emerald-600 dark:text-emerald-400">heavy rain</em> (not{' '}
                    <StrikeRedWord>strong rain</StrikeRedWord>).
                  </p>
                  <p className="text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                    Idioms are a special type of collocation where a fixed group of words has a meaning
                    that cannot be guessed by knowing the meaning of the individual words. We deal with
                    them separately in <OrangeWord>English Idioms in Use</OrangeWord> and so do not
                    focus on them here.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
