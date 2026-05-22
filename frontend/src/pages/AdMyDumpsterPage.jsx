import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdNavBar from "../components/AdNavBar";
import { useFetchUserById } from "../hooks/useFetchUserById";

function AdMyDumpsterPage({ user, artworks, onLogout }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen full-screen pt-14">
        <h1>My Dumpster Page</h1>

        {artworks?.length > 0 ? (
          artworks.map((artwork) => (
            <div key={artwork.artwork_id}>
              <img
                className="w-40 h-40 object-cover"
                src={`http://localhost:5000/uploads/${artwork.image_url}`}
                alt={artwork.title}
              />
            </div>
          ))
        ) : (
          <p className="opacity-60">No artworks yet</p>
        )}
      </div>

      <AdNavBar user={user} onLogout={onLogout} />
    </>
  );
}

export default AdMyDumpsterPage;
