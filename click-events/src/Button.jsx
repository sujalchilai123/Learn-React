

const Button = () => {
  /*
    const handleClick=()=>{console.log("Ouch")}
    const handleClick2=(name)=>{console.log(`${name} Stop Clicking Me`)}
    */

  const handleClick=(e)=>{
    e.target.textContent="OUCH";
  }
  return (
    <div>
      <button onDoubleClick={(e)=>handleClick(e)}>Click Me </button>
    </div>
  )
}

export default Button
