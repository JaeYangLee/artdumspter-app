import { Link } from "react-router-dom";

function AdLandingPage({ onLogin, onRegister }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-primary text-secondary">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
          <section className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center md:text-start p-4">
              <h1 className="font-bold text-2xl">
                Welcome to <span>ArtDumpster*</span>
              </h1>
              <h3 className="text-lg">Explore Unfiltered Art.</h3>
            </div>
          </section>

          <section className="w-full h-full flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-4 border rounded-lg px-4 py-8 shadow-[4px_4px_0px_0px]">
              <form className="flex flex-col items-center justify-center gap-2 ">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                />
                <input
                  type="password"
                  placeholder="Enter password..."
                  className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                />
                <button className="w-full px-2 border rounded bg-secondary text-primary shadow-secondary border-secondary shadow-[2px_2px_0px_0px]">
                  Log in
                </button>
              </form>

              <hr className="w-full opacity-50" />

              <Link
                to="/register"
                className="px-2 rounded border bg-accent shadow-[2px_2px_0px_0px]"
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
