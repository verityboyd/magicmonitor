"use client";
import { useFetchParkData } from "@/app/utils/queueTimes";
import { useFavourites } from "@/app/contexts/FavouritesContext";
import Park from "./Park";

export default function FavouritePark({ park }) {
  const { lands } = useFetchParkData(park.id);
  const { favourites } = useFavourites();

  if (!lands.length) return null;

  const filteredLands = lands
    .map((land) => ({
      ...land,
      rides: land.rides.filter((ride) =>
        favourites.some((fave) => fave.id === ride.id),
      ),
    }))
    .filter((land) => land.rides.length > 0);

  if (!filteredLands.length) return null;

  return (
    <div>
      <h2 className="text-2xl text-center font-bold">{park.name}</h2>
      <Park lands={filteredLands} />
    </div>
  );
}
