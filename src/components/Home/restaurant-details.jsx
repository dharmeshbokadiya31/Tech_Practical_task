import React from "react";
import BackIcon from "../../common/backIcon";
import CartIcon from "../../common/cartIcon";
import ClockIcon from "../../common/clockIcon";
import { useRestaurantDetailHook } from "../../hooks/restaurant-detail";
import { routes } from "../../routes/routes";
import Loader from "./../../common/Loader"
import { useNavigate } from "react-router-dom";

const RestaurantDetail = () => {
  const navigate = useNavigate()
  const { data, setFilter, filter, loader, menuData, menuCategory } = useRestaurantDetailHook();

  return (
    <div className="relative w-full h-screen p-8 overflow-auto">
      {loader && <Loader relative />}
      <div className="flex items-center justify-between w-full">
        <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary" onClick={() => navigate(routes.home)}>
          <BackIcon />
        </button>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange">
            <CartIcon />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-span-6">
          <h3 className="mb-3 text-2xl font-bold">{data?.restaurantName}</h3>
          <p className="text-sm text-gray-600">
           {data?.restaurantDescription}
          </p>
          <div className="grid gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" fill="rgba(113,128,150,1)"/></svg>
              <div>
                <p>{data?.openingHours}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img src="/images/phone.svg" />
              <div>
                <p>{data?.contactNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img src="/images/vector.svg" />
              <div>
                <p>{data?.websiteUrl}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <img
            src={data?.restaurantImage}
            className="object-cover w-full detail-photo"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4 mt-10">
          <button className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary">
            <p>All</p>
          </button>
          {menuCategory?.map(detail => 
            <button key={detail.name} className="px-4 py-2 text-sm rounded-lg bg-light-gray">
              <p>{detail.name} ({detail.count})</p>
            </button>
          )}
        </div>
        <h3 className="my-6 text-2xl font-bold">Menu</h3>
        <div className="grid grid-cols-3 gap-6">
          {menuData?.length ? menuData?.map(item => 
            <div>
              <img
                src={item?.itemPhoto}
                className="w-full rounded-lg"
                alt=""
                style={{ height: "220px" }}
              />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold">{item?.itemName}</h4>
                  <p className="text-primary">${item?.itemCost}</p>
                </div>
              </div>
            </div>
          ) : "No Data Found.!"}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
