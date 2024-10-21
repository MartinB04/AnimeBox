import React, { createContext, useState, ReactNode } from 'react';

export interface AnimeData {
  id_anime: number;
  nombre: string;
  sinopsis: string;
  precuela: string;
  secuela: string;
  status_emision: string;
  tipo_contenido: string;
  popularidad: number;
  imagen: string;
  total_episodios: number;
}

export interface ArrayAnimeData {
  id_anime: number,
  nombre: string,
  imagen: string,
}

export interface AnimeDataId{
  id_anime: number,
}

interface AnimeContextType {
  animeData: AnimeData | null;
  setAnimeData: (data: AnimeData | null) => void;
  arrayAnimeData: ArrayAnimeData | null;
  setArrayAnimeData: (data: ArrayAnimeData | null) => void;
  animeDataId: AnimeDataId | null;
  setAnimeDataId: (data: AnimeDataId | null) => void;
}

export const AnimeContext = createContext<AnimeContextType | undefined>(undefined);

export const AnimeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [animeData, setAnimeData] = useState<AnimeData | null>(null);
  const [arrayAnimeData, setArrayAnimeData] = useState<ArrayAnimeData | null> (null);
  const [animeDataId, setAnimeDataId] = useState<AnimeDataId | null>(null);

  return (
    <AnimeContext.Provider value={{ animeData, setAnimeData, arrayAnimeData, setArrayAnimeData, animeDataId, setAnimeDataId}}>
      {children}
    </AnimeContext.Provider>
  );
};