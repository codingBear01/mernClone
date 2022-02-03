import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";

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
