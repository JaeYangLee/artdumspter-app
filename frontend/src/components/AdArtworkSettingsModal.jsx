import React from "react";

function AdArtworkSettingsModal({ isArtworkSettingsOpen, onArtworkSettings }) {
  if (!isArtworkSettingsOpen) return null;

  return (
    <>
      <div
        onClick={onArtworkSettings}
        className="fixed inset-0 top-0 flex flex-col items-center justify-center z-90 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-backgroundColor"
        >
          <ul className="flex flex-col items-center justify-center">
            <li onClick={onArtworkSettings}>close</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AdArtworkSettingsModal;
