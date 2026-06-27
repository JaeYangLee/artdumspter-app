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
        <div className="flex flex-col items-center justify-center w-full h-full pb-12 md:pb-0 md:flex-row">
          <section className="flex flex-col items-center justify-center w-full h-full">
            <div className="p-4 text-center md:text-start">
              <h1 className="text-2xl font-bold">
                Welcome to <span className="text-primary">ArtDumpster*</span>
              </h1>
              <h3 className="text-lg">Explore Unfiltered Art.</h3>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center w-full h-full ">
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
                  className="text-textColor w-full px-2 border border-textColor shadow-textColor rounded  bg-primary shadow-[2px_2px_0px_0px] hover:cursor-pointer hover:bg-backgroundColor"
                >
                  Log in
                </button>
              </form>

              <hr className="w-full opacity-50" />

              <Link
                to="/register"
                className="px-2 rounded border shadow-[2px_2px_0px_0px] bg-secondary hover:cursor-pointer hover:bg-backgroundColor"
              >
                Create new art account
              </Link>
            </div>
          </section>
        </div>

        <hr className="w-full text-textColor opacity-20" />

        <footer className="bottom-0 w-full p-4 md:p-8 bg-backgroundColor">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row opacity-40 md:gap-0">
            <section className="flex flex-col gap-4 text-xs">
              <p className="text-center select-none md:text-left">
                © 2026 ArtDumpster*. All rights reserved.
              </p>
              <p className="text-center md:text-left select-non">
                A space for unfinished creativity and experimental artworks.
              </p>
            </section>

            <section className="flex flex-col items-center gap-4 text-xs md:items-end">
              <a
                href="https://jian-lee-ramos-portfolio-7cc2b.web.app/"
                target="_blank"
                className="text-center hover:underline hover:text-primary"
              >
                Crafted by Jian Lee Ramos
              </a>
              <p className="select-none">
                Built with PostgreSQL • Express • React • Node
              </p>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}

export default AdLandingPage;
