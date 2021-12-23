import "./App.css";
import Sidebar from "./pages/Sidebar";
import Feed from "./pages/Feed";
import Widgets from "./pages/Widgets";
function App() {
	return (
        <div className="app">
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
        </div>
    );
}

export default App;
