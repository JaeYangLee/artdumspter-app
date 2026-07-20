import AdNavBar from "../components/AdNavBar";
import { BsCloudArrowUp } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import AdSuccessModal from "../components/AdSuccessModal";
import AdErrorModal from "../components/AdErrorModal";

function AdAddAnArtworkPage({ user, onUpload, onLogout }) {
  const [artworkPreview, setArtworkPreview] = useState(null);
  const [image_url, setImageUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tool_id, setToolId] = useState("");
  const [tool, setTool] = useState([]);
  const [artstyle_id, setArtStyleId] = useState("");
  const [artstyle, setArtstyle] = useState([]);
  const fileInputRef = useRef(null);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

  useEffect(() => {
    fetchAllTools();
    fetchAllArtStyles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!image_url || !title || !description || !tool_id || !artstyle_id) {
        console.error("Missing fields!");
        setErrorModalOpen(true);
        return;
      }

      await onUpload(title, description, image_url, tool_id, artstyle_id);

      setSuccessModalOpen(true);

      setImageUrl(null);
      setArtworkPreview(null);
      setTitle("");
      setDescription("");
      setToolId("");
      setArtStyleId("");
    } catch (err) {
      console.error(
        "[POST /AdAddAnArtworkPage.jsx]: Error submitting artwork",
        err.message,
      );
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageUrl(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setArtworkPreview(imageUrl);
    }
  };

  const handleResetFields = async (e) => {
    e.preventDefault();

    try {
      setArtworkPreview(null);
      setImageUrl(null);
      setTitle("");
      setDescription("");
      setToolId("");
      setArtStyleId("");
    } catch (err) {
      console.error(
        "[/AdAddAnArtworkPage.jsx]: Error resetting all fields!",
        err.message,
      );
    }
  };

  const fetchAllTools = async () => {
    try {
      const res = await axios.get("https://localhost:7000/artDumpster/tools");
      setTool(res.data.data);
    } catch (err) {
      console.error("[GET /AddAnArtworkPage.jsx]: Error fetching all tools!");
    }
  };

  const fetchAllArtStyles = async () => {
    try {
      const res = await axios.get(
        "https://localhost:7000/artDumpster/artStyles",
      );
      setArtstyle(res.data.data);
    } catch (err) {
      console.error(
        "[GEt /AddAnArtworkPage.jsx]: Error fetching all Art styles!",
      );
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen pt-14 text-textColor bg-backgroundColor">
        <div className="flex flex-col w-full p-2 item-start bg-gray">
          <h1 className="p-2 text-2xl font-bold text-primary">
            Add an artwork
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start w-full gap-4 p-2 md:flex-row md:items-center"
          >
            <section className="flex flex-col items-start h-full gap-2 px-2">
              <label className="items-start w-full">Upload artwork:</label>
              {artworkPreview ? (
                <img
                  src={artworkPreview}
                  alt="Artwork Preview"
                  className="inline-block object-contain flex-col items-center justify-center border-black/30 bg-backgroundColor border-dashed border rounded w-full h-[40vh] md:h-[54vh]"
                />
              ) : (
                <div className="flex flex-col items-center justify-center border-black/30 bg-backgroundColor border-dashed border rounded w-full h-[40vh] md:h-full lg:w-[60vw]">
                  <BsCloudArrowUp className="size-16 opacity-40" />
                  <p className="font-light opacity-60">Drop files to upload</p>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <p className="font-light text-textColor/60">or</p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <p
                      onClick={handleUploadClick}
                      className="font-light underline transition duration-200 cursor-pointer text-primary hover:text-textColor"
                    >
                      browse
                    </p>
                  </div>
                </div>
              )}

              <input
                required
                onChange={handleFileChange}
                type="file"
                accept="image/*"
                className="border rounded w-[80vw] md:w-[40vw] shadow-[2px_2px_0px_0px] order file:px-2 file:border-black file:rounded file:bg-primary file:text-backgroundColor lg:w-[60vw] cursor-pointer file:cursor-pointer"
              />
            </section>

            <section className="flex flex-col items-start w-full gap-4 px-2">
              <div className="flex flex-col w-full gap-2">
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
                    value={tool_id}
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
                    value={artstyle_id}
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
                  onClick={handleSubmit}
                  className="px-2 border rounded bg-primary text-backgroundColor shadow-textColor border-black shadow-[2px_2px_0px_0px] cursor-pointer hover:bg-textColor hover:text-backgroundColor transition duration-200"
                >
                  Upload
                </button>
                <button
                  onClick={handleResetFields}
                  className="px-2 border rounded opacity-50 shadow-textColor border-textColor shadow-[2px_2px_0px_0px] cursor-pointer hover:bg-gray-400 transition duration-200 hover:text-backgroundColor"
                >
                  Clear
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>

      <AdNavBar onLogout={onLogout} user={user} />
      <AdSuccessModal
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={() => setSuccessModalOpen(false)}
        title={"Upload Successful!"}
        message={"Your masterpiece is successfully uploaded!"}
      />
      <AdErrorModal
        isErrorModalOpen={isErrorModalOpen}
        onErrorModalClose={() => setErrorModalOpen(false)}
        title={"Error uploading artwork!"}
        message={"Oops there is an error uploading your masterpiece..."}
      />
    </>
  );
}

export default AdAddAnArtworkPage;
