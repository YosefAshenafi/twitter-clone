import React from "react";
import Feed from "./Feed";
import "./Home.css";
import Rightbar from "./Rightbar";
import SideBar from "./Sidebar.js";
function Home() {
	return (
		<div className="home">
			{/* sidebar */}
			<SideBar className="home_sidebar" />
			{/* feeds */}
			<Feed className="home_feed" />
			{/* rightbar */}
			<Rightbar className="home_rightbar" />
		</div>
	);
}

export default Home;
