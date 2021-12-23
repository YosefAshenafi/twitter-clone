import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
                <StarHalfIcon />
            </div>
            <TweetBox />
            {posts.map((post) => (
                <Post
                    avatar={post.avatar}
                    fullName={post.fullName}
                    username={post.username}
                    time={post.time}
                    verified={post.verified}
                    content={post.content}
                    images={post.images}
                />
            ))}
        </div>
    );
}

export default Feed;
