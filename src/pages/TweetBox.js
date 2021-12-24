import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import db from "./firebase";
import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import { GoogleLogout } from "react-google-login";

function TweetBox() {
    const { avatar, name, username, showProfile } = useContext(LoginContext);

    const [inputText, setInputText] = useState("");
    const [inputImage, setInputImage] = useState("");

    const postTweet = (e) => {
        e.preventDefault();
        let today = new Date();
        db.collection("posts").add({
            avatar: avatar,
            fullName: name,
            time:
                today.getFullYear() +
                "-" +
                (today.getMonth() + 1) +
                "-" +
                today.getDate() +
                ", " +
                today.getHours() +
                ":" +
                today.getMinutes(),
            username: "@" + username,
            verified: true,
            content: inputText,
            images: inputImage
        });
        setInputImage("");
        setInputText("");
    };
    const logout = (res) => {
        console.log("logged out");
        localStorage.setItem("profile", false);
        localStorage.setItem("username", "");
        localStorage.setItem("avatar", "");
        localStorage.setItem("name", "");
        showProfile(false);
    };
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <GoogleLogout
                        clientId="984740848184-9lmdamivf3lgve6lbjpaj0p4kdlsnfrs.apps.googleusercontent.com"
                        onLogoutSuccess={logout}
                        icon={false}
                        className="googleLogout"
                    >
                        <Avatar src={avatar} />
                    </GoogleLogout>
                    <input
                        onChange={(e) => setInputText(e.target.value)}
                        value={inputText}
                        placeholder="What's happening?"
                    />
                </div>
                <input
                    onChange={(e) => setInputImage(e.target.value)}
                    type="text"
                    value={inputImage}
                    className="tweetBox__imageInput"
                    placeholder="Enter image or gif URL here (optional)"
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
                    <Button
                        onClick={postTweet}
                        type="submit"
                        className="tweetbox__tweetButton"
                    >
                        Tweet
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;
