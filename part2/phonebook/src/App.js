import { useState, useEffect } from 'react'
import Number from './components/number'
import Entry from './components/entry'
import Search from './components/search'
import Debug from './components/debug'
import personService from './services/persons'

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
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    } else {
      if (window.confirm(`${newName} is already in the phonebook`)) {
        const personObj = persons.find(person => person.name === newName)
        const index = persons.indexOf(personObj)
        console.log(personObj.id)
        const changedPerson = { ...personObj, number: newNumber }
        console.log(changedPerson)
        personService
          .updateNumber(personObj.id, changedPerson)
          .then(returnedPerson => {
            persons[index] = returnedPerson
            setPersons(persons)
            setNewName('')
            setNewNumber('')
          })
      }
    }
  }

  const handlePersonDelete = (id) => {
    // This is problematic with Firefox but works in Edge
    if (window.confirm(`Delete ${id} ?`)) {
      console.log(`deleted ${id}`)
      personService.deletePerson(id)
    }
  }

  useEffect(() => {
    console.log('Effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
            deletePerson={() => handlePersonDelete(person.id)}
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
