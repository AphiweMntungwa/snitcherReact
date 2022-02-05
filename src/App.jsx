import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Navbars/Sidebar/Sidebar";
import Topbar from "./Components/Navbars/Topbar/Topbar";
// import Posts from "./Components/Posts/Posts";

function App({children}) {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Sidebar />
        {children}
      </main>
    </div>
  );
}

export default App;
