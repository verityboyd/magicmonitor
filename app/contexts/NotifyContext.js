//watch and deliver notifications once below threshold (threshold logic here i suppose?)
//put notification in here
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

        const rides = data.lands?.flatMap((l) => l.rides) || [];

        rides.forEach((ride) => {
          const fav = favourites.find((f) => f.id === ride.id);

          if (!fav) return;

          const wait = ride.wait_time;

          const sendNotif =
            fav.threshold && wait <= fav.threshold && !notified[ride.id];

          if (sendNotif) {
            console.log(`${ride.name} is now ${wait} min!`);

            toast(`Ride now! ${ride.name} is now ${wait} minutes!`);

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
