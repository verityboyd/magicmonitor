import Land from "./Land";

//maybe need to add conditionals here for if it's an asian park = no lands, only rides
export default function Park({ lands }) {
  return (
    <div>
      {lands.map((land) => (
        <Land key={land.id} land={land} />
      ))}
    </div>
  );
}
