import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdNavBar from "../components/AdNavBar";
import AdArtworkList from "../components/AdArtworkList";

function AdMyDumpsterPage({ user, artworks, onDelete, onEdit, onLogout }) {
  return (
    <>
      <div className="w-full h-screen overflow-hidden pt-14 bg-backgroundColor">
        <h1 className="w-full p-4 text-3xl font-bold text-primary">
          My Dumpster
        </h1>

        <div className="h-[calc(100vh-100px)] overflow-y-auto">
          <AdArtworkList
            user={user}
            artworks={artworks}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      </div>

      <AdNavBar user={user} onLogout={onLogout} />
    </>
  );
}

export default AdMyDumpsterPage;
