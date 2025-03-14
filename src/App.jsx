import { Routes, Route} from 'react-router-dom'
import './App.css'
import AboutMe from './Components/AboutMe'
import HoliCard from './Components/HoliCard'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HoliCard />} />
        <Route path='/AboutMe' element={<AboutMe />} />
      </Routes>
    </>
  )
}

export default App
