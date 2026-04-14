//individual parks pages with wait times for each land and sorting functionality
//consider components needed here - card? each list iteration would Be a card? each land would Be a card? already made a favourite Button
//put all components in a fixed width div
"use client";
import { useParams } from "next/navigation";
import { useFetchParkData, useFetchDisneyParks } from "@/app/utils/queueTimes";
import Park from "@/app/components/features/Park";
import Loading from "@/app/components/features/Loading";

export default function Page() {
  const { parkId } = useParams();
  const id = Number(parkId);

  const { parks } = useFetchDisneyParks();

  const { lands, loading } = useFetchParkData(id);

  const parkName = parks?.parks?.find((park) => park.id === id)?.name;

  if (loading) return <Loading />;

  return (
    <div className="w-full flex justify-center">
      <div>
        <h1 className="text-3xl text-center font-bold pt-10">{parkName}</h1>

        <Park lands={lands} />
      </div>
    </div>
  );
}
