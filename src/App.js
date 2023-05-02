import { useEffect, useMemo, useState } from "react";
import "./app.css"
import data from "./data";
import { Kbc } from "./components/Kbc";
import Timer from "./components/Timer";
import { Start } from "./components/Start";

function App() {
  const [questionNum, setQuestionNum] = useState(1)
  const [userName, setUserName] = useState(null)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("Rs 0")
  const money = useMemo(() =>
    [
      { id: 1, amount: "Rs 1000" },
      { id: 2, amount: "Rs 2000" },
      { id: 3, amount: "Rs 4000" },
      { id: 4, amount: "Rs 10000" },
      { id: 5, amount: "Rs 20000" },
      { id: 6, amount: "Rs 40000" },
      { id: 7, amount: "Rs 80000" },
      { id: 8, amount: "Rs 160000" },
      { id: 9, amount: "Rs 320000" },
      { id: 10, amount: "Rs 640000" },
      { id: 11, amount: "Rs 1000000" },
      { id: 12, amount: "Rs 2000000" },
      { id: 13, amount: "Rs 4000000" },
      { id: 14, amount: "Rs 8000000" },
      { id: 15, amount: "Rs 15000000" },

    ].reverse(),
    [])

  useEffect(() => {
    questionNum > 1 &&
      setEarned(money.find((m) => m.id === questionNum - 1).amount)
  }, [questionNum, money])
  return (
    <div className="app">
      {!userName ? (
        <Start setUserName={setUserName} />
      ) : (
        <>
          <div className="main">
            {stop ? (<h1 className="endText">you earned: {earned}</h1>) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNum={questionNum} />
                  </div>
                </div>
                <div className="bottom">
                  <Kbc data={data} questionNum={questionNum} setQuestionNum={setQuestionNum} setStop={setStop} />
                </div>
              </>
            )}

          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {money.map((m) => (
                <li className={questionNum === m.id ? "moneyListItem active" : 'moneyListItem'}>

                  <span className="moneyListItemNumber">{m.id}
                  </span>
                  <span className="moneyListItemAmount">{m.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
