import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {
  state = {
    memesArr: [],
    isDailyMemeReady: false,
  }

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    //   const persons = res.data
    //   this.setState({ persons })
    // })

    axios.get(`https://api.imgflip.com/get_memes`).then((res) => {
      // console.log(res.data.data)
      // console.log('000')
      const memesArr = res.data.data.memes
      this.setState({ memesArr })
    })
  }

  // meme of the day will be a random selection in the array
  getMemeOfDay() {
    // get random index value
    const { memesArr } = this.state
    // if (memesArr.length < 1) return
    const randomIndex = Math.floor(Math.random() * memesArr.length)

    // get random item
    const meme = memesArr[randomIndex]
    // console.log(meme)
    const { name, url } = meme
    console.log(name, url)
    const memeInfo = { name, url }

    return memeInfo
  }

  render() {
    // console.log(this.state)
    let meme
    if (this.state.memesArr.length > 0) {
      meme = this.getMemeOfDay()
      this.state.isDailyMemeReady = true // ILLEGAL
    }

    // console.log(meme + '<--')

    // const dailyMemeName = meme
    return (
      <div>
        {/* {this.state.persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))} */}
        {/* {
        this.state.memesArr.map((m) => (
          <li key={m.id}>
            {m.name}
            <img src={m.url} alt='' srcset='' />
          </li>
        ))} */}
        {this.state.isDailyMemeReady ? (
          <React.Fragment>
            {meme.name}
            <img src={meme.url} alt='' srcSet='' />
            {console.log('here')}
          </React.Fragment>
        ) : null}
      </div>
    )
  }
}

// MAKE DEVELOPMENT BRANCH
