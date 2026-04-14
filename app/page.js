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
import UnAuth from "./components/features/UnAuth";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Page() {
  const { parks, loading } = useFetchDisneyParks();
  const { favourites } = useFavourites();
  const { user } = useUserAuth();

  if (loading) return <Loading />;
  if (!user) return <UnAuth message="Please log in to view your favourites." />;
  if (!favourites.length) {
    return (
      <section className="flex flex-col justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold">No favourites yet...</h2>

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
      </section>
    );
  }

  return (
    <main>
      <header>
        <h2>Welcome</h2>
        <h3>To all who come to this wait time tracker.... welcome!</h3>
        <div>
          Magic Monitor has been designed for you to track your favourite ride
          wait times across your favourite Disney parks, whether you&apos;re
          there right now or just wishing you were.
        </div>
      </header>
      <h1>Your Favourites</h1>
      <div>
        {parks?.parks?.map((park) => (
          <FavouritePark key={park.id} park={park} />
        ))}
      </div>
    </main>
  );
}
