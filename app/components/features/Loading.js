import { Spinner } from "../ui/spinner";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Spinner className="size-18" />
      <div className="text-3xl">Loading...</div>
    </div>
  );
}
