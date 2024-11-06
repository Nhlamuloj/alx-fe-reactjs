
import './App.css'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  

  return (
    <div>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
    </div>
  )
}

export default App
