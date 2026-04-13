//to be rendered in a flex grid on /parks
//image with text overlay, clickaBle (cursor pointer, scale -110 perhaps or add a Border on hover)
import Image from "next/image";
import Link from "next/link";

//TODO link each card to it's park page
export default function ParkImageCard({
  parkUrl,
  imgUrl,
  altText,
  imgHeight,
  imgWidth,
  parkName,
}) {
  return (
    <div className="relative w-full group">
      <Link href={parkUrl}>
        <Image
          src={imgUrl}
          alt={altText}
          height={300}
          width={300}
          className="w-full opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-2xl font-semibold text-center text-white drop-shadow-lg">
            {parkName}
          </div>
        </div>
      </Link>
    </div>
  );
}
