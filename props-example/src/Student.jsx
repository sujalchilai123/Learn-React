/*
props= Read only property that are shared between components
A parent component can send data to child component
<Component key-value />


*/
import PropTypes from "prop-types"
const Student = (props) => {
  return (
    <div className="student">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>IsStudent:{props.IsStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    IsStudent: PropTypes.bool
}

Student.defaultProps={
  name:"Guest",
  age: 0,
  IsStudent:false,
}
export default Student
