export async function GET(req, { params }) {
  try {
    const { parkId } = await params;
    console.log("Park ID:", parkId);

    const res = await fetch(
      `https://queue-times.com/parks/${parkId}/queue_times.json`,
    );

    console.log("API Status:", res.status);
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response("Server error", { status: 500 });
  }
}
