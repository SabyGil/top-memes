import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AllMemes from './pages/AllMemes'

function App() {
  return (
    <div className='App'>
      <div>nav bar</div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-memes' element={<AllMemes />} />
      </Routes>
    </div>
  )
}

export default App
