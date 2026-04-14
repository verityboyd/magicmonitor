//to be rendered in a flex grid on /parks
//image with text overlay, clickaBle (cursor pointer, scale -110 perhaps or add a Border on hover)
import Image from "next/image";
import Link from "next/link";

//TODO link each card to it's park page
export default function ParkImageCard({ parkId, imgUrl, altText, parkName }) {
  return (
    <Link href={`/parks/${parkId}`} className="group">
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
            {parkName}
          </div>
        </div>
      </div>
    </Link>
  );
}
