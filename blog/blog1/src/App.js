import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Sidebar from "./sidebar/Sidebar";
import Posts from "./posts/Posts";

function App() {
  return (
    <>
      {/* you can't use multiple elemnets inside a comnponent it should be a parent div */}
      <TopBar />
      <Home />
    </>
  );
}

export default App;
