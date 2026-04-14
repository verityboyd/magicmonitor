//individual parks pages with wait times for each land and sorting functionality
//consider components needed here - card? each list iteration would Be a card? each land would Be a card? already made a favourite Button
//put all components in a fixed width div
"use client";
import { useParams } from "next/navigation";
import { useFetchParkData, useFetchDisneyParks } from "@/app/utils/queueTimes";
import Park from "@/app/components/features/Park";
import Loading from "@/app/components/features/Loading";
import { useUserAuth } from "@/app/contexts/AuthContext";
import UnAuth from "@/app/components/features/UnAuth";

export default function Page() {
  const { parkId } = useParams();
  const { user } = useUserAuth();
  const id = Number(parkId);

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

  return (
    <div className="w-full flex justify-center">
      <div>
        <h1 className="text-3xl text-center font-bold pt-10">{parkName}</h1>

        <Park lands={lands} />
      </div>
    </div>
  );
}
