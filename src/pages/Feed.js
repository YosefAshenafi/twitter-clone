import React, { useState, useEffect } from "react";
import './Feed.css'
import Post from "./Post";
import TweetBox from "./TweetBox";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshoot(snapshot => setPosts(snapshot.docs.map(doc => doc.data())));
    }, []);

	return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
				<StarHalfIcon />
            </div>
            {/* tweet box */}
            <TweetBox />
            {/* Post */}
            <Post
                avatar="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/59908598_2041413879300410_1030650949695176704_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=JN9kGGq_z3kAX-aQteB&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9X2XlL5FS-e7jlpFy4YXn6n6GnQQ0-Snghvay1_Ic9lA&oe=61E3EAF6"
                fullName="Solomon Kassa"
                username="@SolomonMKassa"
                time="Dec 17"
                verified={true}
                content="@BarackObama
 chose Teddy Afro’s 
@teddyafromuzika
 አርማሽ (ቀና በል) “Armash” as one of his favorite music of 2021! Does that mean he is joining the #NoMore movement in style? Winking face with tongueSmiling face with sunglasses #Ethiopia Green heartYellow heartRed heart"
                images="https://pbs.twimg.com/media/FG1G3G4XoAMCpvq?format=jpg&name=small"
            />
            <Post
                avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHqG_JlqdIGdg/profile-displayphoto-shrink_100_100/0/1607602169627?e=1645660800&v=beta&t=4_LNPNKkmfXCKkCpu0ksr9o0eliY2pjf3Cf2h0uxZS8"
                fullName="Manish Advani"
                username="@manishadvani"
                time="12hr"
                content="Mr. Sanjay Gupta also known as Parathewala in East of Kailash gave me goosebumps this morning."
                images="https://media-exp1.licdn.com/dms/image/C4E22AQF_5O64iNaFWg/feedshare-shrink_800/0/1639539926258?e=1642636800&v=beta&t=RBU3V9p2Kb3wPNkbG6GNIXQppI_bfNYE43jjUbLNXjk"
            />
            <Post
                avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHqG_JlqdIGdg/profile-displayphoto-shrink_100_100/0/1607602169627?e=1645660800&v=beta&t=4_LNPNKkmfXCKkCpu0ksr9o0eliY2pjf3Cf2h0uxZS8"
                fullName="Manish Advani"
                username="@manishadvani"
                time="12hr"
                content="Mr. Sanjay Gupta also known as Parathewala in East of Kailash gave me goosebumps this morning."
                images="https://media-exp1.licdn.com/dms/image/C4E22AQF_5O64iNaFWg/feedshare-shrink_800/0/1639539926258?e=1642636800&v=beta&t=RBU3V9p2Kb3wPNkbG6GNIXQppI_bfNYE43jjUbLNXjk"
            />
            <Post
                avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHqG_JlqdIGdg/profile-displayphoto-shrink_100_100/0/1607602169627?e=1645660800&v=beta&t=4_LNPNKkmfXCKkCpu0ksr9o0eliY2pjf3Cf2h0uxZS8"
                fullName="Manish Advani"
                username="@manishadvani"
                time="12hr"
                content="Mr. Sanjay Gupta also known as Parathewala in East of Kailash gave me goosebumps this morning."
                images="https://media-exp1.licdn.com/dms/image/C4E22AQF_5O64iNaFWg/feedshare-shrink_800/0/1639539926258?e=1642636800&v=beta&t=RBU3V9p2Kb3wPNkbG6GNIXQppI_bfNYE43jjUbLNXjk"
            />

            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    );
}

export default Feed;
