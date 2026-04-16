"use client";
import { useParams } from "next/navigation";
import { useFetchParkData, useFetchDisneyParks } from "@/app/utils/queueTimes";
import Park from "@/app/components/features/Park";
import Loading from "@/app/components/features/Loading";
import { useUserAuth } from "@/app/contexts/AuthContext";
import UnAuth from "@/app/components/features/UnAuth";
import { useState } from "react";

export default function Page() {
  const { parkId } = useParams();
  const { user } = useUserAuth();
  const id = Number(parkId);

  const [sortOrder, setSortOrder] = useState("low");
  const [filter, setFilter] = useState("all");

  const { parks } = useFetchDisneyParks();

  const { lands, loading } = useFetchParkData(id);

  const parkName = parks?.parks?.find((park) => park.id === id)?.name;

  if (loading) return <Loading />;
  if (!user)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <UnAuth
          message={
            "Please log in to view rides and add them to your favourites."
          }
        />
      </div>
    );

  const filteredLands = lands.map((land) => {
    let rides = [...land.rides];
    rides = rides.filter((ride) => {
      if (filter === "open") return ride.isOpen;
      if (filter === "closed") return !ride.isOpen;
      return true;
    });

    rides.sort((a, b) => {
      if (!a.isOpen && b.isOpen) return 1;
      if (a.isOpen && !b.isOpen) return -1;
      if (sortOrder === "low") return a.wait - b.wait;
      if (sortOrder === "high") return b.wait - a.wait;
      return 0;
    });

    return {
      ...land,
      rides,
    };
  });

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xl lg:max-w-3xl px-4">
        <h1 className="text-3xl text-center font-bold pt-10">{parkName}</h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 pt-15">
          <div className="flex items-center gap-2">
            <div className="text-lg">Sort By:</div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border p-2 rounded-lg"
            >
              <option value="low">Wait: Low to High</option>
              <option value="high">Wait: High to Low</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg">Filter By:</div>
            <div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border p-2 rounded-lg"
              >
                <option value="all">All Rides</option>
                <option value="open">Open Only</option>
                <option value="closed">Closed Only</option>
              </select>
            </div>
          </div>
        </div>

        <Park lands={filteredLands} />
      </div>
    </div>
  );
}
