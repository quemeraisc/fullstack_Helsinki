import { useState } from 'react'

const Stats = () => {
}

const Stat = ({title, stat}) => {
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
    const [total, setTotal] = useState(0)
    
    // const all = () => {
    //     total =  good + neutral + bad
    //     return total
    // }
    const average = () => {
        if (total === 0) return 0
        return (good - bad) / total
    }
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
                stat = {average()}
            />
            <Stat
                title = "Positive"
                stat = {percentPositve()}
            />
        </div>
    )
}

export default App
