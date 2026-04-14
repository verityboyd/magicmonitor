"use client";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import StarIcon from "./StarIcon";
import { useState } from "react";
import { useFavourites } from "@/app/contexts/FavouritesContext";

export default function ThresholdDialog({ ride }) {
  const { toggleFavourite, isFavourite } = useFavourites();

  const [threshold, setThreshold] = useState(15);

  const fave = isFavourite(ride.id);

  const handleAdd = () => {
    toggleFavourite({
      ...ride,
      threshold: Number(threshold),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button">
          <StarIcon active={fave} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add Ride to Favourites</DialogTitle>
          <DialogDescription>
            Select a desired wait time in minutes and be notified when this ride
            drops below that wait time.
          </DialogDescription>
        </DialogHeader>
        <select
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          className="px-1 py-2 border"
        >
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
          <option value="25">25 minutes</option>
          <option value="30">30 minutes</option>
        </select>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleAdd} className="bg-[#ffa534]">
            Add Favourite
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
