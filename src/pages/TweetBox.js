import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import AddLocationIcon from "@mui/icons-material/AddLocation";
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
                <div className="tweetBox__tweetMedia">
                    <div className="tweetBox__tweetMediaIcons">
                        <PermMediaIcon className="tweetBox__Icons" />
                        <GifIcon className="tweetBox__Icons" />
                        <PollIcon className="tweetBox__Icons" />
                        <SentimentSatisfiedAltIcon className="tweetBox__Icons" />
                        <ScheduleSendIcon className="tweetBox__Icons" />
                        <AddLocationIcon className="tweetBox__Icons" />
                    </div>
                    <div className="tweetBox__tweetButtonWrapper"></div>
                    <Button className="tweetbox__tweetButton">Tweet</Button>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;
