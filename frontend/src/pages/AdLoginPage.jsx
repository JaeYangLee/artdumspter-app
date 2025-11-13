import { Link } from "react-router-dom";

function AdLoginPage() {
  return (
    <>
      <div className="flex flex-col items-start justify-center w-screen h-screen px-4 pt-14">
        <form className="flex flex-col items-start gap-4 p-4 px-4 border rounded-lg">
          <h1 className="text-lg font-bold text-left">LOG IN ART ACCOUNT</h1>
          <section>
            <div>
              <label>Enter email:</label>
              <input required type="email" className="px-2 border rounded" />
            </div>
            <div>
              <label>Enter password:</label>
              <input type="password" className="px-2 border rounded" />
            </div>
          </section>

          <section className="flex flex-row items-end justify-end w-full gap-2">
            <button type="submit" className="px-2 border rounded">
              Log in
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

export default AdLoginPage;
