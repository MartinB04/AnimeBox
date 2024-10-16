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

interface AnimeContextType {
  animeData: AnimeData | null;
  setAnimeData: (data: AnimeData | null) => void;
}

export const AnimeContext = createContext<AnimeContextType | undefined>(undefined);

export const AnimeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [animeData, setAnimeData] = useState<AnimeData | null>(null);

  return (
    <AnimeContext.Provider value={{ animeData, setAnimeData }}>
      {children}
    </AnimeContext.Provider>
  );
};