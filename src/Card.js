import React from 'react';
import './Card.css';
import logo from "./logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Card(props){
    
        return (
            <div className="tweet">
                <div className="header">
                    <div className="profileImage">
                        <img src={logo} alt="here" />
                    </div>
                    <div className="headerDetails">
                        <h4>{props.details.user} <span className="handle">@{props.details.handle}</span></h4>
                        <span>{props.details.tweetHeader}</span>
                    </div>
                </div>
                <div className="body">
                    <img src={logo} alt="here" />
                    <h4>{props.details.tweetHeader}</h4>
                    <p>{props.details.tweetBody}</p>
                </div>

                <div className="footer">

                    <div className="fontAwesome">
                        <FontAwesomeIcon icon={['far', 'comment']} />{props.details.comments}
                    </div>

                    <div className="fontAwesome">
                        <FontAwesomeIcon icon="retweet" /><span>{props.details.retweet}</span>
                    </div>

                    <div className="fontAwesome">
                        <FontAwesomeIcon icon={['far', 'heart']} />{props.details.likes}
                    </div>

                    <div className="fontAwesome">
                        <FontAwesomeIcon icon={['far', 'envelope']} />
                    </div>


                </div>

            </div>

        )
    

}


export default Card;