"use client";

import { useFavourites } from "@/app/contexts/FavouritesContext";
import StarIcon from "./StarIcon";
import ThresholdDialog from "./ThresholdDialog";

export default function FavouriteButton({ ride }) {
  const { isFavourite, removeFavourite } = useFavourites();

  const fav = isFavourite(ride.id);

  if (fav) {
    return (
      <button onClick={() => removeFavourite(ride.id)}>
        <StarIcon active />
      </button>
    );
  }

  return <ThresholdDialog ride={ride} />;
}
