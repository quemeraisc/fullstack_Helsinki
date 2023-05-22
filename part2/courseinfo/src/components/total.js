const Total = ({ parts }) => {

  function makeTotal(sum, part){
    return sum + part.exercises
  }
  let sum = parts.reduce(makeTotal, 0)
  console.log(parts.map(part => part.exercises))
  console.log(sum)

  return(
    <h3>Number of exercises {sum}</h3>
  )
}

export default Total
