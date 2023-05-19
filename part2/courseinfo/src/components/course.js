import Header from './header'
import Total from './total'
import Content from './content'

const Course = ({course, parts}) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default Course
