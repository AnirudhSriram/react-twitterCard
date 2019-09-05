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
          profilePic: '',
          key: 1
        },
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
          profilePic: '',
          key: 2
        },
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
          profilePic: '',
          key: 3
        },
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
          profilePic: '',
          key: 4
        }
      ]
    }
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler = (key,Id) => {
    const data = this.state.tweets;
    data.forEach(item => {
      if (item.key === key) {
        if(Id === 0){item.comments +=1}
        if(Id === 1){item.retweet +=1}
        if(Id === 2){item.likes +=1}
      }
    });

    this.setState({
      tweets: data
    })
  }

  render() {
    const tweetList = this.state.tweets.map((item, index) => {
      return <li key={index}>
        <Card
          details={item}
          eventHandlers={{
            like: (key,Id) => this.eventHandler(key,Id),
            comment: (key,Id) => this.eventHandler(key,Id),
            retweet: (key,Id) => this.eventHandler(key,Id)
          }} />
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
