//home page - welcome message, display favourites:
//if !user -> display "log in to see your faves"
//if user -> display faves/"go to parks(clickaBle) to start adding favourites"
//consider Breaking out signed in/out into components to render conditionally
"use client";
import { useFetchDisneyParks } from "./utils/queueTimes";
import { useFavourites } from "./contexts/FavouritesContext";
import FavouritePark from "./components/features/FavouritePark";
import Loading from "./components/features/Loading";
import { useUserAuth } from "./contexts/AuthContext";

export default function Page() {
  const { parks, loading } = useFetchDisneyParks();
  const { favourites } = useFavourites();
  const { user } = useUserAuth();

  if (loading) return <Loading />;
  if (!user) return <div>Please log in to view your favourites.</div>;
  if (!favourites.length) {
    return (
      <div>
        Click the star icon next to a ride(link to parks here) to add it to your
        favourites.
      </div>
    );
  }

  return (
    <main>
      <h1>Your Favourites</h1>
      <div>
        {parks?.parks?.map((park) => (
          <FavouritePark key={park.id} park={park} />
        ))}
      </div>
    </main>
  );
}
