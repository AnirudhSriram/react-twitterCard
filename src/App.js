import React from 'react';
import './App.css';
import Card from "./Card";
import { library } from '@fortawesome/fontawesome-svg-core'
import { far, faHeart, faComment, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
library.add(far, faHeart, faComment, faRetweet, faEnvelope);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          user: 'The Practical Dev',
          handle: 'ThePracticalDev',
          tweetHeader: 'Learning React? Start Small.',
          tweetBody: 'Cant pry yourself away from the tutorials? The cure is to make tiny little experiment apps.',
          date: 'Sep 10',
          comments: 2,
          retweet: 47,
          likes: 190,
          contentImage: '',
          profilePic: ''
        }
      ]
    }
  }
  render() {

    const tweetList = this.state.tweets.map((item,index)=> {
      return <li key={index}>
          <Card details={item}  />
      </li>
    })
    return (
      <div className="App">
        <header className="App-header">
          Social Card
        </header>
        <ul>
          {tweetList}
        </ul>


      </div>
    );

  }

}

export default App;
