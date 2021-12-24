import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import VerifiedIcon from "@mui/icons-material/Verified";
const Post = forwardRef(
    (
        {
            avatar,
            fullName,
            username,
            time,
            content,
            images,
            verified,
            replyCount,
            shareCount,
            likeCount
        },
        ref
    ) => {
        return (
            <div className="post" ref={ref}>
                <Avatar className="post__avatar" src={avatar} />
                <div className="post__contents">
                    <div className="post__contents__top">
                        <h2 className="post__contents__top__fullname">
                            {fullName}
                        </h2>
                        <h3 className="post__contents__top__username">
                            {username}
                        </h3>
                        {verified && (
                            <VerifiedIcon
                                className="post__verifiedIcon"
                                height={15}
                            />
                        )}
                        <h3 className="post__contents__top__time">{time}</h3>
                    </div>
                    <h4 className="post__contents__content">{content}</h4>
                    <img src={images} alt="" />
                    <div className="post__socialIcons">
                        <div className="post__socialIcons_group">
                            <QuickreplyIcon />
                            <p>15</p>
                        </div>
                        <div className="post__socialIcons_group">
                            <AutorenewIcon />
                            <p>15</p>
                        </div>
                        <div className="post__socialIcons_group">
                            <FavoriteBorderIcon />
                            <p>15</p>
                        </div>
                        <div className="post__socialIcons_group">
                            <IosShareIcon />
                            <p>15</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

export default Post;
