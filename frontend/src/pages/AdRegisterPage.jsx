import { useState } from "react";
import { Link } from "react-router-dom";

function AdRegisterPage({ onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [tool_id, setToolId] = useState("");
  const [artstyle_id, setArtstyleId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onRegister(
        username,
        email,
        password,
        bio,
        location,
        tool_id,
        artstyle_id
      );
    } catch (err) {
      console.error("[POST /RegisterPage.jsx]: Server error!", err.message);
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-backgroundColor">
        <div className="flex flex-col items-center justify-center text-center gap-4 ">
          <section>
            <h1 className="text-3xl font-bold text-primary">ArtDumpster*</h1>
          </section>

          <section className="border rounded-lg shadow-[4px_4px_0px_0px]">
            <header className="p-4">
              <h1 className="text-lg font-bold">Create a new art account</h1>
              <h3>It's quick and easy.</h3>
            </header>

            <hr />

            <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-8 ">
              <section className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    Enter username:
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    Enter email:
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    Enter password:
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    Enter bio:
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    type="text"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-start text-sm"
                  >
                    Enter location:
                  </label>
                  <input
                    type="text"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    Whats is your main tool?
                  </label>
                  <select></select>
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    What is your art style?
                  </label>
                  <select></select>
                </div>
              </section>

              <section className="w-full flex flex-row items-end justify-end gap-2">
                <button
                  type="submit"
                  className="px-2 border border-textColor shadow-textColor rounded shadow-[2px_2px_0px_0px] bg-primary text-backgroundColor"
                >
                  Submit
                </button>
                <Link
                  to="/"
                  className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                >
                  Cancel
                </Link>
              </section>
            </form>
          </section>
        </div>
        <footer></footer>
      </div>
    </>
  );
}

export default AdRegisterPage;
