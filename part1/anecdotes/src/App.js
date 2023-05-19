import { useState } from 'react'

const NextButton = ({anecdotes, setSelected}) => {
  return (
        <button onClick={() => {
          const rand = Math.floor(Math.random() * (anecdotes.length-1))
          console.log(rand)
          setSelected(rand)
        }
        }>
        next anecdote
        </button>
  )
}

const VoteButton = ({selected, points, setPoints, setBest}) => {
  return (
    <button onClick={() => {
      console.log(selected, 'voted')
      console.log('before', points[selected], 'voted', points)
      const copy  = [ ...points ]
      copy[selected] += 1
      console.log('after', points[selected], 'voted', points, copy)
      // better use copy here because of the async nature of updates
      const max = copy.indexOf(Math.max(...copy))
      console.log(Math.max( ...copy), max)
      setPoints(copy)
      setBest(max)
    }
    }>
      Vote
    </button>
  )
}

const DisplayAnecdote = ({anecdotes, pos, points}) => {
  return (
    <div>
      <p>
      {anecdotes[pos]}
      </p>
      <p>
      has {points[pos]} votes
      </p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [mostVoted, setBest] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <h2>
        Anecdote of the day
      </h2>
      <DisplayAnecdote
        anecdotes={anecdotes}
        pos={selected}
        points={points}
      />
      <VoteButton
        selected={selected}
        points={points}
        setPoints={setPoints}
        setBest={setBest}
      />
      <NextButton
        anecdotes={anecdotes}
        setSelected={setSelected}
      />
      <h2>
        Anecdote with most votes
      </h2>
      <DisplayAnecdote
        anecdotes={anecdotes}
        pos={mostVoted}
        points={points}
      />
    </div>
  )
}

export default App
