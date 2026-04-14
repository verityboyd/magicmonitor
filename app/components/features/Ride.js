//? !isOpen return "Ride Closed" : {ride.wait}
//li items?

import FavouriteButton from "./FavouriteButton";

export default function Ride({ ride }) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-2">
        <FavouriteButton ride={ride} />
        <div className="text-lg">{ride.name}</div>
      </div>

      <div>
        {ride.isOpen ? (
          <div className="text-lg">{ride.wait} min</div>
        ) : (
          <div className="text-gray-400 text-lg">Ride Closed</div>
        )}
      </div>
    </div>
  );
}
