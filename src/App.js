import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import SinglePost from "./components/singlePost/SinglePost";
import Sidebar from "./components/sidebar/Sidebar";
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/"  element={<Home/>}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/single"  element={<Single/>}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/write"  element={<Write/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
