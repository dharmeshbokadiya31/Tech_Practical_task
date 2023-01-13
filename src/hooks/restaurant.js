import { useState, useEffect } from "react";
import { fetchRestaurantData } from "../services/restaurant";

export const useRestaurantHook = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState();
  const [open, setOpen] = useState(false)

  const getData = async () => {
    try {
      await setLoader(true)
      await fetchRestaurantData(filter).then((res) => {
        setData(res?.allRestaurants || [])
        setOpen(false)
      })
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getData()
  }, [filter])

  return { data, loader, setFilter, open, setOpen };
};

