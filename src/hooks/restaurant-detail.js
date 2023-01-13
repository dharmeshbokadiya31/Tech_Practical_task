import { useState, useEffect } from "react";
import { fetchRestaurantDetails, fetchMenuDetails } from "../services/restaurant";
import { useParams } from 'react-router-dom';
import qs from "qs"

export const useRestaurantDetailHook = () => {
  const { id } = useParams()
  const [data, setData] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [menuCategory, setMenuCategory] = useState(null);
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState();

  const getData = async () => {
    try {
      await setLoader(true)
      await fetchRestaurantDetails(id, filter).then((res) => {
        setData(res?.restaurantDetail || {})
      })
    } finally {
      setLoader(false)
    }
  }

  const getMenuData = async () => {
    try {
      // const fil = {
      //   restaurantName: ["Burger Mania"]
      // }
      // let detail = qs.stringify({filter: fil})
      await setLoader(true)
      await fetchMenuDetails().then((res) => {
        setMenuData(res?.menu || [])
        const menuCategories = res?.menu?.length &&
            res?.menu
              ?.map((x) => JSON.parse(x.itemCategory))
              .reduce((a, b) => a.concat(...b), []).reduce((acc, curr) => {
                if (!acc[curr]) {
                  acc[curr] = { name: curr, count: 1 };
                } else {
                  acc[curr].count++;
                }
                return acc;
              }, {});
              setMenuCategory(Object.values(menuCategories))
      })
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getData()
    getMenuData()
  }, [filter])

  return { data, loader, filter, setFilter, menuData, menuCategory };
};

