import { useState } from "react";
import axios from "axios";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdNavBar from "./components/AdNavBar";
import AdLandingPage from "./pages/AdLandingPage";
import AdRegisterPage from "./pages/AdRegisterPage";
import AdLoginPage from "./pages/AdLoginPage";

function App() {
  const [user, setUser] = useState(null);

  const registerUser = async (
    username,
    email,
    password,
    bio,
    location,
    tool_id,
    artstyle_id
  ) => {
    try {
      const res = axios.post(`http://localhost:5000/artDumpster/register`, {
        username,
        email,
        password,
        bio,
        location,
        tool_id,
        artstyle_id,
      });

      setUser(res.data);
      console.log("[POST /App.jsx]: User registration successful!");
    } catch (err) {
      console.error("[POST /App.jsx]: Error creating new user!");
    }
  };

  const loginUser = async (email, password) => {
    try {
      const res = await axios.post(`http://localhost:5000/artDumpster/login`, {
        email,
        password,
      });

      setUser(res.data);

      console.log("[POST /App.jsx]: Log in successful!");
    } catch (err) {
      console.error("[POST /App.jsx]: Error logging in user!");
    }
  };

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
