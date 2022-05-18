import LikeDislikeButton from './LikeDislikeButton'
import { useState } from 'react'

function getRandomCount(upperLimit) {
  return Math.floor(Math.random() * upperLimit)
}

const Meme = (props) => {
  const { meme } = props
  const [likeCount, setLikeCount] = useState(() => getRandomCount(100))
  const [dislikeCount, setDislikeCount] = useState(() => getRandomCount(100))
  const [likeState, setLikeState] = useState(null) // like=true / dislike=false / nothing=null

  const likes = likeCount + (likeState === true ? 1 : 0)
  const dislikes = dislikeCount + (likeState === false ? 1 : 0)

  const onLikeClick = () => {
    switch (likeState) {
      case true:
        setLikeState(null)
        break // undo like
      case false:
        setLikeState(true)
        break // switch to like from dislike
      case null:
        setLikeState(true)
        break // first time liking?
    }
  }

  const onDislikeClick = () => {
    switch (likeState) {
      case true:
        setLikeState(false)
        break // undo like
      case false:
        setLikeState(null)
        break // switch to like from dislike
      case null:
        setLikeState(false)
        break // first time liking?
    }
  }

  return (
    <div className='meme'>
      <label className='px-3'>{meme.name}</label>
      <img src={meme.url} />
      <LikeDislikeButton
        likeState={likeState}
        likeCount={likes}
        dislikeCount={dislikes}
        onLike={onLikeClick}
        onDislike={onDislikeClick}
      />
    </div>
  )
}

export default Meme
