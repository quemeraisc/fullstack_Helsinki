import { useState } from 'react'

const Stats = ({title, stat}) => {
    return (
      <div>
          <hr />
          <p>
              {title}: {stat}
          </p>
      </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    let total = 0
    
    const all = () => {
        total =  good + neutral + bad
        return total
    }
    const average = () => {
        if (total === 0) return 0
        return (good - bad) / total
    }

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
            <Stats
                title = "All"
                stat = {all()}
            />
            <Stats
                title = "Average"
                stat = {average()}
            />
        </div>
    )
}

export default App
