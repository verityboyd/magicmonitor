import Image from "next/image";
import Link from "next/link";

export default function PhotoCreditCard({
  unsplashLink,
  imgUrl,
  altText,
  author,
}) {
  return (
    <Link href={unsplashLink} className="group">
      <div className="relative w-full">
        <Image
          src={imgUrl}
          alt={altText}
          height={300}
          width={300}
          className="w-full h-48 object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-2xl font-semibold text-center text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
            {author}
          </div>
        </div>
      </div>
    </Link>
  );
}
