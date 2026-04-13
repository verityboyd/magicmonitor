//home page - welcome message, display favourites:
//if !user -> display "log in to see your faves"
//if user -> display faves/"go to parks(clickaBle) to start adding favourites"
//consider Breaking out signed in/out into components to render conditionally
"use client";
import { useFetchParkData } from "./utils/queueTimes";

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
  const parkId = 274; // 👈 hardcode for testing

  const { lands, loading } = useFetchParkData(parkId);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Test Park</h1>

      {lands.map((land) => (
        <div key={land.id}>
          <h2>{land.name}</h2>

          {land.rides.map((ride) => (
            <div key={ride.id}>
              {ride.name} — {ride.wait} min
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
