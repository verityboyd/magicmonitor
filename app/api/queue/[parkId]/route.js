export async function GET(req, { params }) {
  try {
    const { parkId } = await params;

    const res = await fetch(
      `https://queue-times.com/parks/${parkId}/queue_times.json`,
    );
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response("Server error", { status: 500 });
  }
}
