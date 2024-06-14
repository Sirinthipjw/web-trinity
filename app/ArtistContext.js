"use client";
import React, { createContext, useState } from "react";

export const ArtistContext = createContext();

const ArtistProvider = ({ children }) => {
  const [artist, setArtist] = useState("Porsche01");

  return (
    <ArtistContext.Provider value={{ artist, setArtist }}>
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistProvider;
