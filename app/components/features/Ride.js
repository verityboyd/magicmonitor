//? !isOpen return "Ride Closed" : {ride.wait}

export default function Ride({ ride }) {
  return (
    <div>
      {ride.name} — {ride.wait} min
    </div>
  );
}
