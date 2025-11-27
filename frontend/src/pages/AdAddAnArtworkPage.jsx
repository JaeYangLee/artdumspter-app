import AdNavBar from "../components/AdNavBar";
import { useFetchUserById } from "../hooks/useFetchUserById";

function AdAddAnArtworkPage({ onLogout }) {
  const user = useFetchUserById();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen pt-14 text-textColor">
        <div className="flex flex-col items-center w-full h-full p-2 bg-gray">
          <h1 className="w-full p-2 text-2xl font-bold">Add an artwork</h1>

          <form className="flex flex-col items-center w-full h-full gap-2 p-2">
            <section className="items-start w-full px-2 ">
              <label>Upload artwork:</label>
              <input
                type="file"
                className="file:px-2 file:border file:rounded file:bg-primary file:text-backgroundColor "
              />
            </section>

            <section className="flex flex-col items-start w-full gap-4 px-2">
              <div className="w-full">
                <div className="flex flex-col">
                  <label>Enter Artwork title:</label>
                  <input required type="text" className="px-2 border rounded" />
                </div>
                <div className="flex flex-col">
                  <label>Enter description:</label>
                  <textarea
                    required
                    className="h-[30vh] border rounded"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label>Tool:</label>
                  <select required className="px-2 border rounded">
                    <option>Select tool...</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Artstyle:</label>
                  <select required className="px-2 border rounded">
                    <option>Select artstyle...</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row items-end justify-end w-full gap-2">
                <button className="px-2 border rounded bg-primary text-backgroundColor">
                  Upload
                </button>
                <button className="px-2 border rounded opacity-50">
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
