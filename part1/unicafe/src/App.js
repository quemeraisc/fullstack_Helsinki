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
          <table>
            <tbody>
              <StatisticLine title="good" stat={good} />
              <StatisticLine title="neutral" stat={neutral} />
              <StatisticLine title="bad" stat={bad} />
              <StatisticLine title="All" stat={total} />
              <StatisticLine title="Average" stat={(good - bad) / total} />
              <StatisticLine title="Positive" stat={(good / total) * 100} text="%"/>
            </tbody>
          </table>
      </div>
    )
}

const StatisticLine = ({title, stat, text}) => {
    return (
      <tr>
          <td>
              {title}
          </td>
          <td>
              {stat} {text}
          </td>
      </tr>
    )
}

const Buttons = ({good, neutral, bad, setGood, setTotal, setNeutral, setBad}) => {
    return (
        <div>
          <h2>
            Give Feedback
          </h2>
          <button onClick={() => {
              const updatedValue = good + 1
              setGood(updatedValue);
              setTotal(updatedValue+neutral+bad);
              }
          }>
              good
          </button>
          <button onClick={() => {
              const updatedValue = neutral + 1
              setNeutral(updatedValue);
              setTotal(good+updatedValue+bad);
              }
          }>
              neutral
          </button>
          <button onClick={() => {
              const updatedValue = bad + 1
              setBad(updatedValue);
              setTotal(good+neutral+updatedValue);
              }
          }>
              bad
          </button>
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
