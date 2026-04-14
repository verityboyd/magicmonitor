//tracks user's favourites (global)
//favourite state
//add remove faves using _services exports
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { favouritesService } from "../_services/FavouritesServices";
import { useUserAuth } from "./AuthContext";

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const { user } = useUserAuth();
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const loadFavourites = async () => {
      setLoading(true);
      const data = await favouritesService.getFavourites(user.uid);
      setFavourites(data);
      setLoading(false);
    };

    loadFavourites();
  }, [user]);

  const safeFavourites = user ? favourites : [];

  const addFavourite = async (ride) => {
    if (!user) return;
    if (favourites.some((fave) => fave.id === ride.id)) return;
    setFavourites((prev) => [...prev, ride]);
    try {
      await favouritesService.addFavourite(user.uid, ride);
    } catch (error) {
      console.error(error);
      setFavourites((prev) => prev.filter((fave) => fave.id !== ride.id));
    }
  };

  const removeFavourite = async (rideId) => {
    if (!user) return;
    setFavourites((prev) => prev.filter((fave) => fave.id !== rideId));
    try {
      await favouritesService.removeFavourite(user.uid, rideId);
    } catch (error) {
      console.error(error);
    }
  };

  const isFavourite = (rideId) => {
    return favourites.some((fave) => fave.id === rideId);
  };

  const toggleFavourite = (ride) => {
    if (isFavourite(ride.id)) {
      removeFavourite(ride.id);
    } else {
      addFavourite(ride);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites: safeFavourites,
        loading,
        addFavourite,
        removeFavourite,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export const useFavourites = () => useContext(FavouritesContext);
