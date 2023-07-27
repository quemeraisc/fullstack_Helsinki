import { useState, useEffect } from 'react'
import axios from 'axios'
import Number from './components/number'
import Entry from './components/entry'
import Search from './components/search'
import Debug from './components/debug'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [searchedName, setSearchedName] = useState('')
  const filterPersons = (person) => {
    if (person.name.toLowerCase().includes(searchedName.toLowerCase())) {
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
    if (!persons.some(function (person) {
      return person.name === newName
    })) {
      console.log('Adding person')
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setNewName('')
      setNewNumber('')
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
      // console.log(person.name)
    } else {
      alert(`${newName} is already in the phonebook`)
    }
  }

  useEffect(() => {
    console.log('Effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled with persons')
        setPersons(response.data)
      })
  }, [])

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
            key={person.id}
            person={person}
          />
        )}
      </div>
      <Debug
        item={searchedName}
      />
    </div>
  )
}

export default App
