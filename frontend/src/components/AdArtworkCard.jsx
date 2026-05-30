import React from "react";

function AdArtworkCard({ artwork }) {
  return (
    <>
      <div>
        <img
          src={`http://localhost:5000/${artwork.image_url}`}
          alt={artwork.title}
        />

        <h2>{artwork.title}</h2>
        <p>{artwork.description}</p>

        <p>{artwork.tool_name}</p>
        <p>{artwork.artstyle_name}</p>
      </div>
    </>
  );
}

export default AdArtworkCard;
