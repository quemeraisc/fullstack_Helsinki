const Number = ({ person, deletePerson }) => {
  return (
    <form onSubmit={deletePerson}>
      <div>
        {person.name} {person.number}
        <button type='submit'>delete person</button>
      </div>
    </form>
  )
}

export default Number
