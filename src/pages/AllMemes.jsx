import React, { Component } from 'react'
import Meme from './Meme'
export default class AllMemes extends Component {
  render() {
    console.log('ALL MEMES render')

    const { memesArr } = this.props
    return (
      <div className=''>
        <h2>AllMemes</h2>

        <div className='memes-container'>
          {memesArr.map((meme) => (
            <Meme meme={meme} key={meme.id} />
          ))}
        </div>
      </div>
    )
  }
}
