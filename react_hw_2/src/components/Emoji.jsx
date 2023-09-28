import './Emoji.css';

const Emoji = ({ emojiSrc, votes, setVotes }) => {
  
  return (
    <div className='emoji'>
      <div><img onClick={setVotes} src={emojiSrc} alt='emoji'/></div>
      <div className='votes'>{votes}</div>
    </div>
  )

}

export default Emoji;