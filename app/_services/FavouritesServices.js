//add/remove/get faves from firestore collection
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../utils/firebase";

export const favouritesService = {
  async getFavourites(userId) {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", userId, "favourites"),
      );
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error reading favourites: ", userId, error);
      return [];
    }
  },

  async addFavourite(userId, rideId) {
    try {
      const newDoc = await addDoc(
        collection(db, "users", userId, "favourites"),
        ride.id.toString(),
      );
      return newDoc.id;
    } catch (error) {
      console.error("Error adding favourite", error);
    }
  },

  async removeFavorite(userId, rideId) {
    try {
      await deleteDoc(
        doc(db, "users", userId, "favourites", rideId.toString()),
      );
    } catch (error) {
      console.error("Error removing favourite", error);
    }
  },
};
