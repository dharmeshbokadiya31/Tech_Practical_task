import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import ClockIcon from "../../common/clockIcon";
import HomeIcon from "../../common/homeIcon";
import ChevronUpDownIcon from "../../common/chevronUpDownIcon";
import CancelIcon from "../../common/cancelIcon";
import OrderIcon from "../../common/orderIcon";
import EmailIcon from "../../common/emailIcon";
import HelpIcon from "../../common/helpIcon";
import SettingIcon from "../../common/settingIcon";
import { useLocation } from 'react-router-dom';

const SidebarComponent = () => {
  const location = useLocation()

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
          <div className="flex items-center gap-4 mb-6 justify-center">
            <img src="/images/logo.png" />
            <h3 className="font-bold">Pomo & Co</h3>
          </div>
        <Menu>
          <MenuItem 
            icon={<HomeIcon />}
            className={location.pathname?.split("/")[1] === "home" ? "transition bg-primary text-white rounded-lg" : ""}
          >Home</MenuItem>
          <MenuItem icon={<OrderIcon />}>Orders</MenuItem>
          <MenuItem icon={<EmailIcon />}>
            <div className="flex items-center justify-between">
              <div>Notification</div>
              <div className="text-white bg-primary px-2 rounded-full">2</div>
            </div>  
          </MenuItem>
          <MenuItem icon={<HelpIcon />}>Help & Support</MenuItem>
          <MenuItem icon={<SettingIcon />}>Setting</MenuItem>
          <div className="mt-auto ">
            <div className="relative mb-16">
              <button className="absolute cancel-order-status">
                <CancelIcon />
              </button>
              <div className="z-[2] order-bg1"></div>
              <div className="order-bg2"></div>
              <div className="p-6 text-center bg-white order-status relative z-[10]">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-opacity-50 rounded-lg bg-light-orange">
                  <ClockIcon />
                </div>
                <p className="mt-4 text-sm font-medium text-center">
                  Your Order is now Ready
                </p>
                <div className="mt-6 mb-6 text-sm text-gray-600">
                  <p>Splint Doumo</p>
                  <p>Order Id: #ED564F</p>
                </div>
                <button className="w-full p-2 text-center text-white rounded-lg bg-primary justify-center flex items-center relative">
                  Details
                  <img src="/images/rightArrow.png" className="absolute" style={{ top: "15px", right: "" }}/>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <h5>Mark Clarke</h5>
                <p className="text-gray-500">markclarke@gmail.com</p>
              </div>
              <ChevronUpDownIcon />
            </div>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
