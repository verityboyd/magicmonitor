export async function GET() {
  const res = await fetch("https://queue-times.com/parks.json");
  const data = await res.json();
  return Response.json(data);
}
