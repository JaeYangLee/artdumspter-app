import React, { useEffect, useState } from "react";
import axios from "axios";
import AdSuccessModal from "./AdSuccessModal";

function AdUpdateArtworkModal({
  artwork = null,
  onEdit,
  isUpdateArtworkModalOpen,
  onUpdateArtworkModalClose,
}) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTools, setNewTools] = useState([]);
  const [tool_id, setToolId] = useState("");
  const [newArtStyles, setNewArtStyles] = useState([]);
  const [artstyle_id, setArtStylesID] = useState("");
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  useEffect(() => {
    fetchAllTools();
    fetchAllArtStyles();
    if (artwork) {
      setNewTitle(artwork.title);
      setNewDescription(artwork.description);
      setNewTools(artwork.tool_id);
      setNewArtStyles(artwork.artstyle_id);
    }
  }, [artwork]);

  const fetchAllTools = async () => {
    try {
      const allTools = await axios.get(
        `http://localhost:5000/artDumpster/tools`,
      );
      setNewTools(allTools.data.data);
    } catch (err) {
      console.error(
        "[GET /UpdateArtworkModal.jsx]: Error fetching all tools!",
        err.message,
      );
    }
  };

  const fetchAllArtStyles = async () => {
    try {
      const allArtstyles = await axios.get(
        `http://localhost:5000/artDumpster/artStyles`,
      );
      setNewArtStyles(allArtstyles.data.data);
    } catch (err) {
      console.error(
        "[GET /UpdateArtworkModal.jsx]: Error fetching all art styles!",
        err.message,
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !newTitle.trim() ||
        !newDescription.trim() ||
        !tool_id ||
        !artstyle_id
      ) {
        return;
      }

      await onEdit(
        artwork.artwork_id,
        newTitle,
        newDescription,
        tool_id,
        artstyle_id,
      );

      setSuccessModalOpen(true);
    } catch (err) {
      console.error(
        "[PUT /UpdateArtworkModal.jsx]: Error updating artwork!",
        err.message,
      );
    }
  };

  if (!isUpdateArtworkModalOpen) return null;

  return (
    <>
      <div
        onClick={onUpdateArtworkModalClose}
        className="fixed inset-0 top-0 flex flex-col items-center justify-center w-screen h-screen z-100 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-backgroundColor rounded-lg shadow-[4px_4px_0px_0px]"
        >
          <section className="flex flex-row items-center justify-between rounded-t bg-primary">
            <header className="px-2">
              <h1 className="font-bold text-left text-backgroundColor">
                Edit artwork
              </h1>
            </header>

            <div className="flex flex-row items-center justify-center gap-2 px-2">
              <p className="text-xs text-green-500">●</p>
              <p className="text-xs text-yellow-400">●</p>
              <p
                onClick={onUpdateArtworkModalClose}
                className="text-xs text-red-500"
              >
                ●
              </p>
            </div>
          </section>

          <hr className="w-full" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-4">
            <section className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label className="">Edit title:</label>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  type="text"
                  className="px-2  border rounded shadow-[2px_2px_0px_0px]"
                />
              </div>

              <div className="flex flex-col">
                <label>Edit description:</label>
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="border h-[20vh]  px-2 italic rounded shadow-[2px_2px_0px_0px] placeholder:opacity-20"
                ></textarea>
              </div>

              <div className="flex flex-col">
                <label className="">Edit tools used:</label>
                <select
                  value={tool_id}
                  onChange={(e) => setToolId(e.target.value)}
                  className=" border rounded shadow-[2px_2px_0px_0px]"
                >
                  <option value="">Select your tool</option>
                  {newTools.map((tools) => (
                    <option key={tools.tool_id} value={tools.tool_id}>
                      {tools.tool_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="">Edit art style:</label>
                <select
                  value={artstyle_id}
                  onChange={(e) => setArtStylesID(e.target.value)}
                  className=" border rounded shadow-[2px_2px_0px_0px]"
                >
                  <option value="">Select your art style:</option>
                  {newArtStyles.map((artstyles) => (
                    <option
                      key={artstyles.artstyle_id}
                      value={artstyles.artstyle_id}
                    >
                      {artstyles.artstyle_name}
                    </option>
                  ))}
                </select>
              </div>
            </section>
            <section className="flex flex-row items-end justify-end w-full gap-2 p-2">
              <button
                type="submit"
                className="px-2 border rounded shadow-textColor shadow-[2px_2px_0px_0px] bg-primary text-backgroundColor border-textColor"
              >
                Submit
              </button>
              <button
                type="button"
                className="px-2 border rounded shadow-[2px_2px_0px_0px] text-textColor/50 border-textColor/50 shadow-textColor/50"
              >
                Cancel
              </button>
            </section>
          </form>
        </div>
      </div>

      <AdSuccessModal
        title={"Artwork Updated!"}
        message={"Artwork updated successfully!"}
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={() => setSuccessModalOpen(false)}
      />
    </>
  );
}

export default AdUpdateArtworkModal;
