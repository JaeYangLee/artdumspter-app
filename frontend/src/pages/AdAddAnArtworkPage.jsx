import AdNavBar from "../components/AdNavBar";
import { useFetchUserById } from "../hooks/useFetchUserById";

function AdAddAnArtworkPage({ onLogout }) {
  const user = useFetchUserById();
  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen pt-14 text-textColor">
        <div className="flex flex-col w-full p-2 item-start bg-gray">
          <h1 className="p-2 text-2xl font-bold text-primary">
            Add an artwork
          </h1>

          <form className="flex flex-col items-start w-full gap-4 p-2">
            <section className="flex flex-col items-start px-2 ">
              <label>Upload artwork:</label>
              <input
                type="file"
                className="border rounded w-[80vw] shadow-[2px_2px_0px_0px] order file:px-2 file:border-black file:rounded file:bg-primary file:text-backgroundColor"
              />
            </section>

            <section className="flex flex-col items-start gap-4 px-2">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <label>Enter Artwork title:</label>
                  <input
                    required
                    type="text"
                    className="w-[80vw] px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Enter description:</label>
                  <textarea
                    required
                    className="h-[30vh] border rounded shadow-[2px_2px_0px]"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label>Tool:</label>
                  <select
                    required
                    className="px-2 border rounded shadow-[2px_2px_0px]"
                  >
                    <option>Select tool...</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Artstyle:</label>
                  <select
                    required
                    className="px-2 border rounded shadow-[2px_2px_0px]"
                  >
                    <option>Select artstyle...</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row items-end justify-end w-full gap-2">
                <button className="px-2 border rounded bg-primary text-backgroundColor shadow-textColor border-black shadow-[2px_2px_0px_0px]">
                  Upload
                </button>
                <button className="px-2 border rounded opacity-50 shadow-textColor border-textColor shadow-[2px_2px_0px_0px]">
                  Clear
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>

      <AdNavBar onLogout={onLogout} user={user} />
    </>
  );
}

export default AdAddAnArtworkPage;
