const Search = ({searchedName, handleSearchName}) => {
  return (
      <form >
        filter by name : 
        <input
          value={searchedName}
          onChange={handleSearchName}
        />
      </form >
  )
}

export default Search

