import { useState } from 'react'

const Stats = ({good,neutral,bad,total}) => {
    return (
      <div>
          <hr />
          <h2>
            Statistics
          </h2>
          <Stat
            title = "good"
            stat = {good}
          />
          <Stat
              title = "neutral"
              stat = {neutral}
          />
          <Stat
              title = "bad"
              stat = {bad}
          />
          <Stat
              title = "All"
              stat = {total}
          />
          <Stat
              title = "Average"
              stat = {(good - bad) / total}
          />
          <Stat
              title = "Positive"
              stat = {(good / total) * 100}
          />

      </div>
    )
}

const Stat = ({title, stat}) => {
    return (
      <div>
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
    const [total, setTotal] = useState(0)
    
    const percentPositve = () => {
        if (total === 0) return 0
        return (good / total) * 100
    }

    return (
        <div>
            <h2>
                Give Feedback
            </h2>
            <button onClick={() => {
                const updatedGood = good + 1
                setGood(updatedGood);
                setTotal(updatedGood+neutral+bad);
                }
            }>
                good
            </button>
            <button onClick={() => {
                const updatedNeutral = neutral + 1
                setNeutral(updatedNeutral);
                setTotal(good+updatedNeutral+bad);
            }
            }>
                neutral
            </button>
            <button onClick={() => {
                const updatedBad = bad + 1
                setBad(updatedBad);
                setTotal(good+neutral+updatedBad);
                }
            }>
                bad
            </button>
            <Stats
                good = {good}
                neutral = {neutral}
                bad = {bad}
                total = {total}
            />
        </div>
    )
}

export default App
