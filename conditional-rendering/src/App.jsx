/*
  
conditional rendering: allows you to control whats get rendered in your application based on certain conditions
                        (show,hide,or, change componets )

*/

import UserGreeting from "./UserGreeting.jsx"

function App() {
  

  return (
    <>
      <UserGreeting isLogged={true} username="Sujal"></UserGreeting>
    </>
  )
}

export default App
