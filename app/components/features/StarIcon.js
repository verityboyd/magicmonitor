import { Icon } from "@iconify/react";
import { useState } from "react";
export default function StarIcon() {
  const [isStarred, setIsStarred] = useState(false);

  function toggleStar() {
    setIsStarred((prev) => !prev);
  }
  return (
    <button onClick={toggleStar}>
      {isStarred ? (
        <Icon
          icon="ion:star"
          width="26"
          height="26"
          className="text-[#ffa534] cursor-pointer hover:scale-110"
        />
      ) : (
        <Icon
          icon="ion:star-outline"
          width="26"
          height="30"
          className="text-[#ffa534] cursor-pointer hover:scale-110"
        />
      )}
    </button>
  );
}
