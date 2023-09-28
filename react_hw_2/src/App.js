import './App.css';
import { useState } from 'react';
import Emoji from './components/Emoji';
import emoji1 from './assets/emoji1.png';
import emoji2 from './assets/emoji2.png';
import emoji3 from './assets/emoji3.png';
import emoji4 from './assets/emoji4.png';

function App() {
  const emojisArray = [
    { emojiSrc: emoji1, votes: 0 },
    { emojiSrc: emoji2, votes: 0 },
    { emojiSrc: emoji3, votes: 0 },
    { emojiSrc: emoji4, votes: 0 }
  ];

  const [emojis, setEmojis] = useState(emojisArray);
  const [maxVotes, setMaxVotes] = useState({ emojiSrc: '', votes: 0 });
  
  const handleVotes = function(index) {
    const updatedEmojis = [...emojis];
    updatedEmojis[index].votes += 1;
    setEmojis(updatedEmojis);
  }

  const ShowResults = () => {
    let maxVotesEmoji = maxVotes;

    for (const emoji of emojis) {
      if (emoji.votes > maxVotesEmoji.votes) {
        maxVotesEmoji = emoji;
      }
    }

    setMaxVotes(maxVotesEmoji);
  }

  return (
    <>
      <div className="emojiList">
        {emojis.map((emoji, index) => (
            <Emoji key={index} emojiSrc={emoji.emojiSrc} votes={emoji.votes} setVotes={() => handleVotes(index)}/>
        ))}
      </div>
      
      <div className='result'>
        <button onClick={ShowResults}>Show Results</button>
        {maxVotes.votes > 0 && (
          <div>The winner is: <br /><img src={maxVotes.emojiSrc} alt='Winner'/> with {maxVotes.votes} votes</div>
        )}
      </div>
    </>
  );
}

export default App;