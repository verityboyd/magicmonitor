import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="font-medium m-5 pb-4 flex justify-center">
      <Link href="https://queue-times.com/" className="hover:underline">
        Powered by Queue-Times.com
      </Link>
    </footer>
  );
}
