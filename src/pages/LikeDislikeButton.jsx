import React from 'react'

export default function LikeDislikeButton({
  likeState,
  likeCount,
  dislikeCount,
  onLike,
  onDislike,
}) {
  return (
    <div className='button-container'>
      <button
        onClick={onLike}
        className={'like-btn ' + (likeState === true ? 'active' : '')}
      >
        <i className='fa fa-thumbs-up' aria-hidden='true' />
      </button>
      <span>{likeCount}</span>
      <button
        onClick={onDislike}
        className={'dislike-btn ' + (likeState === false ? 'active' : '')}
      >
        <i className='fa-solid fa-thumbs-down' />
      </button>
      <span>{dislikeCount}</span>
    </div>
  )
}
