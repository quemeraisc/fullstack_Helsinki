import {useState } from 'react'
import Number from './components/number'

const App = () => {
  const [persons, setPersons] = useState(
    [
      { 
        name: 'Claude Quemerais',
        number: '+33 123 456 789'
      }
    ]
  )

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
      number: newNumber,
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
        <br />
        <div>
          number:
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <br />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...

      <div>
        {persons.map((person) => 
          <Number
            key={person.name}
            person={person}
          />
        )
        }
      </div>
      <div>
        <p>
        --------
        </p>
        <p>
        debug: {newName} {newNumber}
        </p>
      </div>
    </div>
  );
}

export default App;
