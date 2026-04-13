import Ride from "./Ride";

export default function Land({ land }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{land.name}</h2>

      {land.rides.map((ride) => (
        <Ride key={ride.id} ride={ride} />
      ))}
    </div>
  );
}
