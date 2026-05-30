import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdNavBar from "../components/AdNavBar";
import { useFetchUserById } from "../hooks/useFetchUserById";
import AdArtworkList from "../components/AdArtworkList";

function AdMyDumpsterPage({ user, artworks, onLogout }) {
  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen pt-14">
        <h1 className="w-full p-2 text-3xl font-bold text-primary">
          My Dumpster
        </h1>

        <AdArtworkList artworks={artworks} />
      </div>

      <AdNavBar user={user} onLogout={onLogout} />
    </>
  );
}

export default AdMyDumpsterPage;
