import {useState } from 'react'
import Number from './components/number'

const App = () => {
  const [persons, setPersons] = useState(
    [
      { 
        name: 'Claude Quemerais'
      }
    ]
  )

  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('form button clicked ', event.target)
    if (!persons.some(function(person) {
      return person.name === newName
    }))
    {
      console.log('not found')
    const newPerson = {
      name: newName,
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    } else {
      alert(`${newName} is already in the phonebook`)
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...

      <div>
        {persons.map((person) => 
          <Number
            key={person.name}
            number={person.name}
          />
        )
        }
      </div>
      <div>
        debug: {newName}
        {}
      </div>
    </div>
  );
}

export default App;
