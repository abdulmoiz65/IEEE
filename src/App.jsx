import './App.css'
import Home from './pages/Home'
import Author from './pages/Author'
import CFP from './pages/CallForPaper'
import Venue from './pages/Venue'
import { Routes , Route } from 'react-router-dom'
import Committee from './pages/Committee'
import Contact from './pages/Contact'
import useScrollOnOtherPages from "./hooks/useScrollOnOtherPages";
function App() {
  useScrollOnOtherPages();
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/author' element={<Author />} />  
    <Route path='/callforpaper' element={<CFP />} />
    <Route path='/venue' element={<Venue />} />
    <Route path='/committee' element={<Committee />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
  )
}
export default App
