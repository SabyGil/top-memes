import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AllMemes from './pages/AllMemes'
import Header from './pages/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'

const defaultMemes = []
function App() {
  const [memesArr, setMemesArr] = useState(defaultMemes) // holds all memes

  // Will fetch memes On Mount
  useEffect(() => {
    console.log('USE EFFECt', memesArr)
    axios.get(`https://api.imgflip.com/get_memes`).then((res) => {
      const memesArr = res.data.data.memes
      setMemesArr(memesArr) // <- updates memes state
    })
  }, [])

  // console.log('RENDER', memesArr)

  return (
    <div className='App page-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home memesArr={memesArr} />} />
        <Route path='/all-memes' element={<AllMemes memesArr={memesArr} />} />
      </Routes>
    </div>
  )
}

export default App
