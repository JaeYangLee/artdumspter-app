import AdNavBar from "../components/AdNavBar";
import { BsCloudArrowUp } from "react-icons/bs";

import { useFetchUserById } from "../hooks/useFetchUserById";
import { useEffect, useState } from "react";
import axios from "axios";

function AdAddAnArtworkPage({ onUpload, onLogout }) {
  const user = useFetchUserById();
  const [artwork, setArtwork] = useState(null);
  const [artworkPreview, setArtworkPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toolId, setToolId] = useState("");
  const [tool, setTool] = useState([]);
  const [artstyleId, setArtStyleId] = useState("");
  const [artstyle, setArtstyle] = useState([]);

  useEffect(() => {
    fetchAllTools();
    fetchAllArtStyles();
  }, []);

  const fetchAllTools = async () => {
    try {
      const res = await axios.get("http://localhost:5000/artDumpster/tools");
      setTool(res.data.data);
    } catch (err) {
      console.error("[GET /AddAnArtworkPage.jsx]: Error fetching all tools!");
    }
  };

  const fetchAllArtStyles = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/artDumpster/artStyles"
      );
      setArtstyle(res.data.data);
    } catch (err) {
      console.error(
        "[GEt /AddAnArtworkPage.jsx]: Error fetching all Art styles!"
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setArtwork(null);
      setArtworkPreview(null);
      setTitle("");
      setDescription("");
      setToolId("");
      setArtStyleId("");
    } catch (err) {
      console.error("[POST /AddAnArtWorkPage.jsx]: Error adding an artwork!");
      setArtwork(null);
      setArtworkPreview(null);
      setTitle("");
      setDescription("");
      setToolId("");
      setArtStyleId("");
    }
  };

  const handleResetFields = (e) => {
    e.preventDefault();
    setArtwork(null);
    setArtworkPreview(null);
    setTitle("");
    setDescription("");
    setToolId("");
    setArtStyleId("");
  };

  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen pt-14 text-textColor">
        <div className="flex flex-col w-full p-2 item-start bg-gray">
          <h1 className="p-2 text-2xl font-bold text-primary">
            Add an artwork
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start w-full gap-4 p-2 md:flex-row md:items-center"
          >
            <section className="flex flex-col items-start gap-2 px-2">
              <label>Upload artwork:</label>
              {artworkPreview ? (
                <img
                  src={artworkPreview}
                  alt="Artwork Preview"
                  className="inline-block object-contain flex-col items-center justify-center border-black/30 bg-gray-100 border-dashed border rounded w-full h-[40vh]"
                />
              ) : (
                <div className="flex flex-col items-center justify-center border-black/30 bg-gray-100 border-dashed border rounded w-full h-[40vh]">
                  <BsCloudArrowUp className="size-16 opacity-40" />
                  <p className="font-light opacity-60">Drop files to upload</p>
                  <p className="font-light text-textColor/60">
                    or{" "}
                    <span className="font-normal underline opacity-100 text-primary">
                      browse
                    </span>
                  </p>
                </div>
              )}

              <input
                required
                onChange={(e) => {
                  const file = e.target.files[0];
                  setArtwork(file);

                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setArtworkPreview(imageUrl);
                  }
                }}
                type="file"
                accept="image/*"
                className="border rounded w-[80vw] md:w-[40vw] shadow-[2px_2px_0px_0px] order file:px-2 file:border-black file:rounded file:bg-primary file:text-backgroundColor"
              />
            </section>

            <section className="flex flex-col items-start w-full gap-4 px-2">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <label>Enter Artwork title:</label>
                  <input
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="md:w-full w-[80vw] px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Enter description:</label>
                  <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="md:w-full h-[30vh] border rounded shadow-[2px_2px_0px] px-2"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label>Tool:</label>
                  <select
                    required
                    value={toolId}
                    onChange={(e) => setToolId(e.target.value)}
                    className="md:w-full px-2 border rounded shadow-[2px_2px_0px]"
                  >
                    <option>Select tool...</option>
                    {tool.map((tool) => (
                      <option key={tool.tool_id} value={tool.tool_id}>
                        {tool.tool_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Artstyle:</label>
                  <select
                    required
                    value={artstyleId}
                    onChange={(e) => setArtStyleId(e.target.value)}
                    className="md:w-full px-2 border rounded shadow-[2px_2px_0px]"
                  >
                    <option>Select artstyle...</option>
                    {artstyle.map((artstyle) => (
                      <option
                        key={artstyle.artstyle_id}
                        value={artstyle.artstyle_id}
                      >
                        {artstyle.artstyle_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-row items-end justify-end w-full gap-2">
                <button
                  type="submit"
                  className="px-2 border rounded bg-primary text-backgroundColor shadow-textColor border-black shadow-[2px_2px_0px_0px]"
                >
                  Upload
                </button>
                <button
                  onClick={handleResetFields}
                  className="px-2 border rounded opacity-50 shadow-textColor border-textColor shadow-[2px_2px_0px_0px]"
                >
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
