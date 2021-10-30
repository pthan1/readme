import "./App.css"
import SearchBar from "../SearchBar/SearchBar"
import moduleName from "module"

const App = () => {
  return (
    <div className="App">
      <section className="landing-body">
        <p>Login</p>
        <h1>readME</h1>
        <p>Welcome to readME, tell us a book you like and we will help you find your next reading</p>
        <SearchBar />
      </section>
    </div>
  )
}

export default App
