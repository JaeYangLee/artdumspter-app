import { useState } from "react";
import axios from "axios";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdLandingPage from "./pages/AdLandingPage";
import AdRegisterPage from "./pages/AdRegisterPage";
import AdProtectedRoute from "./components/AdProtectedRoute";
import AdProfilePage from "./pages/AdProfilePage";
import AdMyDumpsterPage from "./pages/AdMyDumpsterPage";
import AdAddAnArtworkPage from "./pages/AdAddAnArtworkPage";
import AdSuccessModal from "./components/AdSuccessModal";
import AdErrorModal from "./components/AdErrorModal";

function App() {
  const [user, setUser] = useState(null);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

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
      const registeredUser = await axios.post(
        `http://localhost:5000/artDumpster/register`,
        {
          username,
          email,
          password,
          bio,
          location,
          tool_id,
          artstyle_id,
        }
      );

      const { token, data } = registeredUser.data;

      localStorage.setItem("token", token);

      setUser(data);

      setSuccessModalOpen(true);
      console.log("[POST /App.jsx]: Registration successful!");
    } catch (err) {
      console.error("[POST /App.jsx]: Error creating new user!", err.message);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const loggedInUser = await axios.post(
        `http://localhost:5000/artDumpster/login`,
        {
          email,
          password,
        }
      );

      if (!loggedInUser) {
        console.error("[POST /App.jsx]: Invalid User!");
      }

      const { token, user } = loggedInUser.data;
      localStorage.setItem("token", token);

      setUser(user);

      console.log("User logged in successfully!", loggedInUser.data);
    } catch (err) {
      console.error("[POST /App.jsx]: Error logging in user!", err.message);
      setErrorModalOpen(true);
    }
  };

  const logOutUser = async (req, res) => {
    try {
      localStorage.removeItem("token");
      setUser(null);
      console.log("Token Deleted!");
    } catch (err) {
      console.error("[LOG OUT /App.jsx]: Error logging out user!", err.message);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<AdLandingPage onLogin={loginUser} />}
          ></Route>

          <Route
            path="/register"
            element={<AdRegisterPage onRegister={registerUser} />}
          ></Route>

          <Route
            exact
            path="/profile"
            element={
              <AdProtectedRoute user={user}>
                <AdProfilePage onLogout={logOutUser} />
              </AdProtectedRoute>
            }
          ></Route>

          <Route
            exact
            path="/myDumpster"
            element={
              <AdProtectedRoute user={user}>
                <AdMyDumpsterPage onLogout={logOutUser} />
              </AdProtectedRoute>
            }
          ></Route>

          <Route
            exact
            path="/addAnArtwork"
            element={
              <AdProtectedRoute user={user}>
                <AdAddAnArtworkPage onLogout={logOutUser} />
              </AdProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>

      <AdSuccessModal
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={() => setSuccessModalOpen(false)}
        title={"Registeration successful!"}
        message={"Welcome to ArtDumpster*!"}
      />

      <AdErrorModal
        isErrorModalOpen={isErrorModalOpen}
        onErrorModalClose={() => setErrorModalOpen(false)}
        title={"Invalid credentials!"}
        message={"Try again..."}
      />
    </>
  );
}

export default App;
