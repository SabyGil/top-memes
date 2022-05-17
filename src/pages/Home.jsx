import React from 'react'
import axios from 'axios'

//  APP
//      /     \
// ALLMEME    HOME

export default class Home extends React.Component {
  // meme of the day will be a random selection in the array
  getMemeOfDay() {
    const { memesArr } = this.props
    if (memesArr.length === 0) return

    // get random index value
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
    let meme = this.getMemeOfDay()

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
        {meme ? (
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
