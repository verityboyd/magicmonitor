"use client";
import { useFetchDisneyParks } from "./utils/queueTimes";
import { useFavourites } from "./contexts/FavouritesContext";
import FavouritePark from "./components/features/FavouritePark";
import Loading from "./components/features/Loading";
import { useUserAuth } from "./contexts/AuthContext";
import UnAuth from "./components/features/UnAuth";
import { Icon } from "@iconify/react";
import { SparklesText } from "./components/ui/sparkles-text";
import Welcome from "./components/features/Welcome";

export default function Page() {
  const { parks, loading } = useFetchDisneyParks();
  const { favourites } = useFavourites();
  const { user } = useUserAuth();

  if (loading) return <Loading />;

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <Welcome />
      {!user && <UnAuth message="Please log in to view your favourites." />}
      {user && !favourites.length && (
        <div className="p-10">
          <h2 className="text-2xl font-semibold text-center">
            No favourites yet...
          </h2>

          <div className="flex flex-row text-xl">
            Click the
            <Icon
              icon="ion:star"
              width="26"
              height="26"
              className="text-[#ffa534]"
            />
            icon next to a ride to add it to your favourites.
          </div>
        </div>
      )}
      {user && favourites.length > 0 && (
        <>
          <SparklesText className="text-4xl font-semibold text-center py-10">
            Your Favourites
          </SparklesText>
          <div>
            {parks?.parks?.map((park) => (
              <FavouritePark key={park.id} park={park} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
