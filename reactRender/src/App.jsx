import UserGreeting from "./UserGreeting"

function App() {

  return (
    <>
    <UserGreeting isLoggedIn={true} username="John"/>

    </>
  )
}

export default App


//Conditional rendering = allows you to control what gets rendered in your application based on certain conditions. 
// (ex. show, hide, or change components)