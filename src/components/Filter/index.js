import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CancelIcon from "../../common/cancelIcon";
import DownIcon from "../../common/downIcon";
import qs from "qs"
import ButtonLoader from "../../common/Loader/buttonLoader";

const Filter = ({ open = false, setOpen = () => false, flatCuisine = [], setFilter, loader }) => {
  const [openFilter, setOpenFilter] = useState()
  const [cuisineFilter, setCuisineFilter] = useState([])

  const applyFilter = () => {
    let filterdata = {
      isOpen: openFilter,
      restaurantCuisine: cuisineFilter
    }

    setFilter(qs.stringify({filter: filterdata}))
  }

  const filterCuisine = (element) => {
    const arr = cuisineFilter?.includes(element)
    ? [...cuisineFilter.filter(e => e !== element)]
    : [...cuisineFilter, element];
    setCuisineFilter(arr)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
            style={{ filter: "blure(4px)" }}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative w-screen max-w-md pointer-events-auto">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                    </div>
                  </Transition.Child>
                  <div
                    className="flex flex-col h-full py-6 overflow-y-auto bg-white rounded shadow-xl"
                    style={{ borderRadius: "16px 0 0 16px" }}
                  >
                    <div className="flex items-center justify-between px-4 sm:px-6">
                      <Dialog.Title className="text-2xl font-bold text-gray-900">
                        Search Filters
                      </Dialog.Title>
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white bg-light-gray"
                        onClick={() => setOpen(false)}
                      >
                        <CancelIcon />
                      </button>
                    </div>
                    <div className="relative flex-1 px-4 mt-6 sm:px-6">
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="mt-6 text-2xl font-bold text-gray-900">
                          Sort By
                        </div>
                        <div className="flex items-center gap-2 mt-6">
                          <button onClick={() => setOpenFilter(!openFilter)}>
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-light-gray">
                              <img src="/images/burger-king.png" alt="category" />
                            </div>
                            <p className={`text-lg font-semibold ${openFilter ? "text-orange-700" : ""}`}>Open</p>
                          </button>
                        </div>
                        {flatCuisine?.length ? <>
                          <div className="mt-6 text-2xl font-bold text-gray-900">
                            Cuisine
                          </div>
                          <div className="flex flex-wrap gap-2 mt-6">
                            {flatCuisine?.map((cui) => (
                              <div key={cui.id} className={`cursor-pointer p-2 rounded-lg ${cuisineFilter?.includes(cui) ? "bg-light-orange text-orange-700" : "bg-light-gray"}`} onClick={() => filterCuisine(cui)}>
                                {cui}
                              </div>
                            ))}
                          </div>
                        </> : ""}
                        <button className="flex items-center justify-between w-full mt-4 text-orange">
                          <span>See more</span>
                          <DownIcon />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end flex-shrink-0 px-6">
                      <button
                        type="submit"
                        className="gap-2 items-center flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => applyFilter()}
                      >
                        {loader && <ButtonLoader />}
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Filter;
