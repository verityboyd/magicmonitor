"use client";
import { useState } from "react";

export const useFetchDisneyParks = () => {
  const { result, loading } = useFetch("/api/queue");

  const parks = (result ?? []).find((dest) => dest.id === 2);

  return { parks, loading };
};

export const useFetchParkData = (parkId) => {
  const { result, loading } = useFetch(`/api/queue/${parkId}`);

  if (loading || !result) {
    return { lands: [], loading: true };
  }

  let lands = [];

  if (result.lands && result.lands.length > 0) {
    lands = result.lands.map((land) => ({
      id: land.id,
      name: land.name,
      rides: (land.rides || []).map((ride) => ({
        id: ride.id,
        name: ride.name,
        wait: ride.wait_time,
        isOpen: ride.is_open,
        parkId,
        landId: land.id,
        landName: land.name,
      })),
    }));
  } else if (result.rides && result.rides.length > 0) {
    lands = [
      {
        id: "all-rides",
        name: "All Rides",
        rides: result.rides.map((ride) => ({
          id: ride.id,
          name: ride.name,
          wait: ride.wait_time,
          isOpen: ride.is_open,
          parkId,
          landId: null,
          landName: "All Rides",
        })),
      },
    ];
  }

  return { lands, loading: false };
};

export const useFetch = (url) => {
  const [called, setCalled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  const callFetch = async () => {
    const fetchResult = await fetch(url);
    const resultJson = await fetchResult.json();
    setResult(resultJson);
    setLoading(false);
  };

  if (!called) {
    callFetch();
    setCalled(true);
  }
  console.log(result);
  return { loading, result };
};
