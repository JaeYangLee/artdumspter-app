import { Link } from "react-router-dom";

function AdRegisterPage() {
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

            <form className="flex flex-col p-4 gap-8 ">
              <section className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    Enter username:
                  </label>
                  <input
                    type="text"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    Enter email:
                  </label>
                  <input
                    type="email"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    Enter password:
                  </label>
                  <input
                    type="password"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
                    Enter bio:
                  </label>
                  <textarea
                    type="text"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-start text-sm">
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
                <button className="px-2 border border-textColor shadow-textColor rounded shadow-[2px_2px_0px_0px] bg-primary text-backgroundColor">
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
