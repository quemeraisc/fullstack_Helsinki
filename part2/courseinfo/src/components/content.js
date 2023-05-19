import Part from './part'

const Content = ({ parts }) => {
  return (
    <>
    {parts.map((part, id) =>
      <Part
        key={id}
        part={part} 
      />
    )}
    </>
  )
}

export default Content
