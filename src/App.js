import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SidebarComponent from "./components/Sidebar";
import Home from "./pages/home";
import RestaurantDetailIndex from "./pages/restaurant-detail";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full h-screen">
        <SidebarComponent />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.restaurantDetails} element={<RestaurantDetailIndex />} />
          <Route path="*" element={<Navigate to={routes.home} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
