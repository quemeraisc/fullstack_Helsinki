import { useState } from 'react'

const Stats = ({good,neutral,bad,total}) => {
    if (total === 0){
        return (
          <div>
              <hr />
              <h2>
                Statistics
              </h2>
              No feedback given yet !!
          </div>
        )
    }
    return (
      <div>
          <hr />
          <h2>
            Statistics
          </h2>
          <StatisticLine title="good" stat={good} />
          <StatisticLine title="neutral" stat={neutral} />
          <StatisticLine title="bad" stat={bad} />
          <StatisticLine title="All" stat={total} />
          <StatisticLine title="Average" stat={(good - bad) / total} />
          <StatisticLine title="Positive" stat={(good / total) * 100} />
      </div>
    )
}

const StatisticLine = ({title, stat}) => {
    return (
      <div>
          <p>
              {title}: {stat}
          </p>
      </div>
    )
}

const AppButton = ({value, text, setValue, setTotal, value2, value3}) => {
    return (
        <button onClick={() => {
            const updatedValue = value + 1
            setValue(updatedValue);
            setTotal(updatedValue+value3+value3);
            }
        }>
            {text}
        </button>
    )
}

const Buttons  = ({good, neutral, bad, setGood, setTotal, setNeutral, setBad}) => {
    return (
        <div>
          <h2>
            Give Feedback
          </h2>
          <AppButton
            value={good} text="good" setValue={setGood} setTotal={setTotal} value2={neutral} value3={bad}
          />
          <AppButton
             value={neutral} text="neutral" setValue={setNeutral} setTotal={setTotal} value2={good} value3={bad}
          />
          <AppButton
             value={bad} text="bad" setValue={setBad} setTotal={setTotal} value2={neutral} value3={good}
          />
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    
    return (
      <div>
        <Buttons
          good={good}
          neutral={neutral}
          bad={bad}
          setGood={setGood}
          setTotal={setTotal}
          setNeutral={setNeutral}
          setBad={setBad}
          />
        <Stats
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          />
      </div>
    )
}

export default App
