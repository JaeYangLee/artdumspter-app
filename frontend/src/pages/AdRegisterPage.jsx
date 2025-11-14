import { Link } from "react-router-dom";

function AdRegisterPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen px-4 pt-14">
        <form className="flex flex-col items-center justify-center gap-4 p-4 px-4 border rounded-lg">
          <h1 className="text-lg font-bold text-left">
            CREATE NEW ART ACCOUNT
          </h1>
          <section className="w-full flex flex-col items-start">
            <div className="flex flex-col justify-center">
              <label>Enter username:</label>
              <input required type="text" className="px-2 border rounded" />
            </div>
            <div className="flex flex-col justify-center">
              <label>Enter bio:</label>
              <textarea type="email" className="px-2 border rounded" />
            </div>
            <div className="flex flex-col justify-center">
              <label>Enter location:</label>
              <input required type="text" className="px-2 border rounded" />
            </div>
            <div className="flex flex-col justify-center">
              <label>Enter email:</label>
              <input required type="email" className="px-2 border rounded" />
            </div>
            <div className="flex flex-col justify-center">
              <label>Enter password:</label>
              <input required type="password" className="px-2 border rounded" />
            </div>
          </section>

          <section className="flex flex-row items-end justify-end w-full gap-2">
            <button type="submit" className="px-2 border rounded">
              Submit
            </button>
            <Link to="/" type="button" className="px-2 border rounded">
              Cancel
            </Link>
          </section>
        </form>
      </div>
    </>
  );
}

export default AdRegisterPage;
