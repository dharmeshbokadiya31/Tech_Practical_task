import React, { useState } from "react";
import { useRestaurantHook } from "../../hooks/restaurant";
import Filter from "../Filter";
import Header from "../Header";
import Loader from "./../../common/Loader"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { data, setFilter, loader, open, setOpen } = useRestaurantHook();
  const flatCategory = data?.length ? [
    ...new Set(
      data
        ?.map((x) => JSON.parse(x.restaurantCategory))
        .reduce((a, b) => a.concat(...b), [])
    ),
  ] : [];

  const flatCuisine = data?.length ? [
    ...new Set(
      data
        ?.map((x) => JSON.parse(x.restaurantCuisine))
        .reduce((a, b) => a.concat(...b), [])
    ),
  ] : [];

  const openNow = (id) => {
    navigate(`/home/${id}`)
  }
  
  return (
    <div className="h-screen p-8 overflow-auto relative">
      {loader && <Loader relative />}
      <div className="mb-8">
        <Header setOpen={setOpen} />
      </div>
      {flatCategory?.length ? <>
        <div className="mb-8 text-3xl font-bold">Category</div>
        <div className="flex items-center gap-10 mb-8">
          {flatCategory?.map((x) => (
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-light-gray">
                <img src="/images/burger-king.png" alt="category" />
              </div>
              <p className="text-lg font-semibold">{x}</p>
            </div>
          ))}
        </div>
      </> : ""}
      <div className="mb-8 text-3xl font-bold">Restaurants</div>
      <div className="grid grid-cols-3 gap-8">
        {data?.length ? data?.map((item) => (
          <div key={item.id}>
            <img
              src={item?.restaurantImage}
              className="w-full rounded-lg"
              alt=""
              style={{ height: "220px" }}
            />
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">{item.restaurantName}</h4>
                <div className="px-2 py-1 text-sm rounded bg-purple">
                  {item.isOpen ? (
                    <button
                      className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded cursor-pointer"
                      onClick={() => openNow(item.id)}
                    >
                      Open Now
                    </button>
                  ) : (
                    <p className="px-2 py-1 text-xs font-medium text-orange-700 bg-orange-100">
                      Closed
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm line-clamp-3">
                {item.restaurantDescription}
              </p>
            </div>
          </div>
        )) : "No Data Found!"}
      </div>
      <Filter open={open} setOpen={setOpen} flatCuisine={flatCuisine} setFilter={setFilter} loader={loader} />
    </div>
  );
};

export default Home;
