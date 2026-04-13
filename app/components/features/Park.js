import Land from "./Land";

export default function Park({ lands }) {
  return (
    <div>
      {lands.map((land) => (
        <Land key={land.id} land={land} />
      ))}
    </div>
  );
}
