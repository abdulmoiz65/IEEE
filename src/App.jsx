import './App.css'
import Home from './pages/Home'
import Author from './pages/Author'
import CFP from './pages/CallForPaper'

import { Routes , Route } from 'react-router-dom'
function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/author' element={<Author />} />  
    <Route path='/callforpaper' element={<CFP />} />
  </Routes>
  )
}
export default App
