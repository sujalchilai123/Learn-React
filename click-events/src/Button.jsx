

const Button = () => {
    const handleClick=()=>{console.log("Ouch")}
    const handleClick2=(name)=>{console.log(`${name} Stop Clicking Me`)}
  return (
    <div>
      <button onClick={()=>handleClick2("Bro")}>Click Me </button>
    </div>
  )
}

export default Button
