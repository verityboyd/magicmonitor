"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useFavourites } from "./FavouritesContext";
import { toast } from "sonner";

const NotifyContext = createContext();

export function NotifyProvider({ children }) {
  const { favourites } = useFavourites();

  const [notified, setNotified] = useState({});

  useEffect(() => {
    if (!favourites.length) return;

    const interval = setInterval(async () => {
      const parks = [...new Set(favourites.map((f) => f.parkId))];

      for (const parkId of parks) {
        const res = await fetch(`/api/queue/${parkId}`);
        const data = await res.json();

        let rides = [];
        if (data.lands && data.lands.length > 0) {
          rides = data.lands.flatMap((land) => land.rides);
        } else if (data.rides && data.rides.length > 0) {
          rides = data.rides;
        }

        rides.forEach((ride) => {
          const fave = favourites.find((fav) => fav.id === ride.id);

          if (!fave) return;

          const wait = ride.wait_time;
          const open = ride.is_open;

          const sendNotif =
            fave.threshold &&
            wait <= fave.threshold &&
            open &&
            !notified[ride.id];

          if (sendNotif) {
            toast(`Ride now! ${ride.name} is ${wait} minutes!`);

            setNotified((prev) => ({
              ...prev,
              [ride.id]: true,
            }));
          }
        });
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [favourites, notified]);

  return <NotifyContext.Provider value={{}}>{children}</NotifyContext.Provider>;
}

export const useNotify = () => useContext(NotifyContext);
