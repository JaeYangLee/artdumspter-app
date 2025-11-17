import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdLandingPage({ onLogin, onRegister }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email.trim() || !password.trim()) {
        return;
      }

      await onLogin(email, password);
      navigate("/profile");

      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("[POST /Login]: Server error!", err.message);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-backgroundColor text-textColor">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
          <section className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center md:text-start p-4">
              <h1 className="font-bold text-2xl">
                Welcome to <span className="text-primary">ArtDumpster*</span>
              </h1>
              <h3 className="text-lg">Explore Unfiltered Art.</h3>
            </div>
          </section>

          <section className="w-full h-full flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-4 border rounded-lg px-4 py-8 shadow-[4px_4px_0px_0px]">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-2 "
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email..."
                  className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter password..."
                  className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                />
                <button
                  type="submit"
                  className="w-full px-2 border border-textColor shadow-textColor rounded  bg-primary text-backgroundColor shadow-[2px_2px_0px_0px]"
                >
                  Log in
                </button>
              </form>

              <hr className="w-full opacity-50" />

              <Link
                to="/register"
                className="px-2 rounded border shadow-[2px_2px_0px_0px] bg-secondary"
              >
                Create new art account
              </Link>
            </div>
          </section>
        </div>

        <footer className="w-ful bg-violet-400"></footer>
      </div>
    </>
  );
}

export default AdLandingPage;
