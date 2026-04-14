import { Icon } from "@iconify/react";
import { useFavourites } from "@/app/contexts/FavouritesContext";
import { useState } from "react";

export default function StarIcon({ active }) {
  return (
    <Icon
      icon={active ? "ion:star" : "ion:star-outline"}
      width="26"
      height="26"
      className="text-[#ffa534] cursor-pointer hover:scale-110 transition"
    />
  );
}
