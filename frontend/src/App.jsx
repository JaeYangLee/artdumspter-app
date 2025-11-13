import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdNavBar from "./components/AdNavBar";
import AdLandingPage from "./pages/AdLandingPage";
import AdRegisterPage from "./pages/AdRegisterPage";
import AdLoginPage from "./pages/AdLoginPage";

function App() {
  return (
    <>
      <AdNavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<AdLandingPage />}></Route>
          <Route path="/register" element={<AdRegisterPage />}></Route>
          <Route path="/login" element={<AdLoginPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
