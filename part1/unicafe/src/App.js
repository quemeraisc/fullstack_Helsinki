import { useState } from 'react'

const Stats = ({title, stat}) => {
    return (
      <div>
          <hr />
          <h4>
              {title}
          </h4>
          <p>
           {stat}
          </p>
      </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h2>
                Give Feedback
            </h2>
            <button onClick={() => setGood(good + 1)}>
                good
            </button>
            <button onClick={() => setNeutral(neutral + 1)}>
                neutral
            </button>
            <button onClick={() => setBad(bad + 1)}>
                bad
            </button>
            <h2>
                Statistics
            </h2>
            <Stats
                title = "good"
                stat = {good}
            />
            <Stats
                title = "neutral"
                stat = {neutral}
            />
            <Stats
                title = "bad"
                stat = {bad}
            />
        </div>
    )
}

export default App
