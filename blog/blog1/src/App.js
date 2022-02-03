import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      {/* you can't use multiple elemnets inside a comnponent it should be a parent div */}
      <TopBar />
      <Register />
    </>
  );
}

export default App;
