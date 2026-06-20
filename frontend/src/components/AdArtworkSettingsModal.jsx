import { useState } from "react";
import AdValidatorModal from "./AdValidatorModal";
import AdUpdateArtworkModal from "./AdUpdateArtworkModal";

function AdArtworkSettingsModal({
  artwork,
  onDelete,
  onEdit,
  isArtworkSettingsOpen,
  onArtworkSettings,
}) {
  const [isValidatorModalOpen, setValidatorModalOpen] = useState(false);
  const [isUpdateArtworkModalOpen, setUpdateArtworkModalOpen] = useState(false);

  if (!isArtworkSettingsOpen) return null;

  return (
    <>
      <div
        onClick={onArtworkSettings}
        className="fixed inset-0 top-0 flex flex-col items-center justify-center w-screen h-screen px-8 z-80 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[30vw] rounded bg-backgroundColor text-textColor animate-modal-scale"
        >
          <ul className="flex flex-col items-center justify-center">
            <li
              onClick={() => setValidatorModalOpen(true)}
              className="w-full px-4 py-2 text-center text-red-500 border-b border-black cursor-pointer hover:shadow-[inset_0_-4px_4px_rgba(0,0,0,0.3)] transition duration-200 active:bg-gray-300"
            >
              Delete
            </li>
            <li
              onClick={() => setUpdateArtworkModalOpen(true)}
              className="w-full px-4 py-2 text-center border-b cursor-pointer hover:shadow-[inset_0_-4px_4px_rgba(0,0,0,0.3)] transition duration-200 active:bg-gray-300"
            >
              Edit
            </li>
            <li
              onClick={onArtworkSettings}
              className="w-full px-4 py-2 text-center cursor-pointer hover:shadow-[inset_0_-4px_4px_rgba(0,0,0,0.3)] transition duration-200 active:bg-gray-300"
            >
              Cancel
            </li>
          </ul>
        </div>
      </div>

      <AdUpdateArtworkModal
        artwork={artwork}
        onEdit={onEdit}
        isUpdateArtworkModalOpen={isUpdateArtworkModalOpen}
        onUpdateArtworkModalClose={() => setUpdateArtworkModalOpen(false)}
      />

      <AdValidatorModal
        artwork={artwork}
        isValidatorModalOpen={isValidatorModalOpen}
        title={"Are you sure?"}
        subject={"artwork"}
        message={"This artwork will be deleted.."}
        onDelete={() => onDelete(artwork.artwork_id)}
        onValidatorModalClose={() => setValidatorModalOpen(false)}
      />
    </>
  );
}

export default AdArtworkSettingsModal;
