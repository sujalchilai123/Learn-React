import Student from "./Student.jsx"


function App() {
  return (
    <>
      <Student name="Sujal" age={21} IsStudent={true}></Student>
      <Student name="Yash" age={25} IsStudent={false}></Student>
      <Student name="Shubham" age={19} IsStudent={false}></Student>
      <Student name="Kriti" age={21} IsStudent={true}></Student>
      <Student name="Larry"></Student>
    </>
  )
}


export default App
