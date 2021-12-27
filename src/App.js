import "./App.css";
import Sidebar from "./pages/Sidebar";
import Feed from "./pages/Feed";
import Widgets from "./pages/Widgets";
import Login from "./pages/Login";
import { LoginContext } from "./Contexts/LoginContext";
import { useEffect, useState } from "react";

function App() {
    const [profile, showProfile] = useState(false);
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const savedProfile =
            localStorage.getItem("mytwitter_username") !== null ? true : false;

        console.log(savedProfile);

        if (savedProfile) {
            showProfile(savedProfile);
            setAvatar(localStorage.getItem("avatar"));
            setUsername(localStorage.getItem("username"));
            setName(localStorage.getItem("name"));
        }
    }, []);

    return (
        <LoginContext.Provider
            value={{
                profile,
                showProfile,
                username,
                setUsername,
                avatar,
                setAvatar,
                name,
                setName
            }}
        >
            {profile ? (
                <div className="app">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            ) : (
                <Login />
            )}
        </LoginContext.Provider>
    );
}

export default App;
