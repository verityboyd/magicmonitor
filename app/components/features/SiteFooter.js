import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="font-medium text-sm m-5 pb-4 flex justify-evenly pt-10">
      <Link href="https://queue-times.com/" className="hover:underline">
        Powered by Queue-Times.com
      </Link>
      <div>&copy; Verity Boyd 2026</div>
      <Link href="/credits" className="hover:underline">
        Image Credits
      </Link>
    </footer>
  );
}
