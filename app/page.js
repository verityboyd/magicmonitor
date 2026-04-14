//home page - welcome message, display favourites:
//if !user -> display "log in to see your faves"
//if user -> display faves/"go to parks(clickaBle) to start adding favourites"
//consider Breaking out signed in/out into components to render conditionally
"use client";
import { useFetchParkData } from "./utils/queueTimes";
import Park from "./components/features/Park";
import Loading from "./components/features/Loading";

export default function Page() {
  /*const { parks, loading } = useFetchDisneyParks();

  if (loading) {
    <div> loading </div>;
  }

  console.log(parks);
  return (
    <main>
      <div>{JSON.stringify(parks)}</div>
    </main>
  );
}

const Park = ({ id }) => {
  const rides = useFetchRides(id);

  if (!rides) {
    return <div>im loading</div>;
  }

  return <div>json.stringify(rides)</div>;
};*/
  const parkId = 6;
  const { lands, parkName, loading } = useFetchParkData(parkId);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Park parkName={parkName} lands={lands} />
      </div>
    </div>
  );
}
