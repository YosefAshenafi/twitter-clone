import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ReorderIcon from "@material-ui/icons/Reorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import './Sidebar.css';
function Sidebar() {
	return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />
            <SidebarOptions active title="Home" Icon={HomeIcon} />
            <SidebarOptions title="Explore" Icon={SearchIcon} />
            <SidebarOptions
                title="Notifications"
                Icon={NotificationsNoneIcon}
            />
            <SidebarOptions title="Messages" Icon={MailOutlineIcon} />
            <SidebarOptions title="Bookmarks" Icon={BookmarkBorderIcon} />
            <SidebarOptions title="Lists" Icon={ReorderIcon} />
            <SidebarOptions title="Profiles" Icon={PermIdentityIcon} />
            <SidebarOptions title="More" Icon={MoreHorizIcon} />
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
        </div>
    );
}

export default Sidebar;
