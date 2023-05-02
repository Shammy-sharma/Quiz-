import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import correct from "../correct.mp3"
import wrong from "../wrong.mp3"
export const Kbc = ({ data, setStop, setQuestionNum, questionNum }) => {
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [classname, setClassname] = useState("answer")
  const [correctAns] = useSound(correct)
  const [wrongAns] = useSound(wrong)
  useEffect(() => {
    setQuestion(data[questionNum - 1])
  }, [data, questionNum])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a)
    setClassname("answer active")
    delay(3000, () =>

      setClassname(a.correct ? "answer correct" : "answer wrong")

    );
    delay(5000, () => {
      if (a.correct) {
        correctAns()
        delay(1000, () => {
          setQuestionNum((prev) => prev + 1);
          setSelectedAnswer(null)
        })

      }
      else {
        wrongAns()
        delay((1000), () => {
          setStop(true)
        })

      }
    })
  }
  return (
    <div className='kbc'>
      <div className="question"> {question?.question} </div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div className={selectedAnswer === a ? classname : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
        ))}</div>


    </div>

  )
}
