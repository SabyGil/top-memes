import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AllMemes from './pages/AllMemes'
import Header from './pages/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'

// componentDidMount() {
//   // axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
//   //   const persons = res.data
//   //   this.setState({ persons })
//   // })

//   axios.get(`https://api.imgflip.com/get_memes`).then((res) => {
//     // console.log(res.data.data)
//     // console.log('000')
//     const memesArr = res.data.data.memes
//     this.setState({ memesArr })
//   })
// }
// axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
//   const persons = res.data
//   this.setState({ persons })
// })

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

  console.log('RENDER', memesArr)

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
