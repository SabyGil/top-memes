const Meme = (props) => {
  const { meme } = props
  return (
    <div className='meme'>
      <label>{meme.name}</label>
      <img src={meme.url} />
    </div>
  )
}

export default Meme
