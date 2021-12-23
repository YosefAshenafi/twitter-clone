import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";
function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQHLB83xfS0X-A/profile-displayphoto-shrink_100_100/0/1606338050599?e=1645660800&v=beta&t=Bl6tEPnBsiTFk6sOpMVB3GaTdCh8WCiL90eNN4iHXao" />
                    <input placeholder="What's happening?" />
                </div>
                <input
                    type="text"
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL"
                />

                <Button className="tweetbox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
