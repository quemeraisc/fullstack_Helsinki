import {useState } from 'react'
import Number from './components/number'
import Entry from './components/entry'
import Search from './components/search'
import Debug from './components/debug'

const App = () => {
  const [persons, setPersons] = useState(
    [
      { 
        name: 'Arto Hellas',
        number: '+40 123 456 789'
      },
      { 
        name: 'Ada Lovelace',
        number: '+49 123 456 789'
      },
      { 
        name: 'Dan Abramov',
        number: '+12 123 456 789'
      },
      { 
        name: 'Mary Poppendieck',
        number: '+39 123 456 789'
      },
    ]
  )

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const [searchedName, setSearchedName] = useState('')
  const filterPersons = (person) => {
    if (person.name.toLowerCase().includes(searchedName.toLowerCase())){
      return person
   }
  }
  const foundPersons = persons.filter(filterPersons)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchedName(event.target.value)
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
    setNewNumber('')
    } else {
      alert(`${newName} is already in the phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search</h3>
      <Search
        searchedName={searchedName}
        handleSearchName={handleSearchName}
      />
      <h3>Add a new entry</h3>
      <Entry
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <div>
        {foundPersons.map((person) => 
          <Number
            key={person.name}
            person={person}
          />
        )
        }
      </div>
      <Debug
        item={searchedName}
      />
    </div>
  );
}

export default App;
