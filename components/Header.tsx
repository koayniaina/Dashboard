import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <div className="flex py-2 px-4 justify-between items-center headers">
      <div className="flex items-center searchs">
        <input
          type="search"
          placeholder="Search..."
          className="border-0 outline-0 w-[150px]"
        />
        <CiSearch />
      </div>

      <div className="flex justify-between gap-4 font">
        <span>
          <IoNotificationsOutline />
        </span>
        <span>
          <LuMessageSquareMore />
        </span>
        <span>
          <RxAvatar />
        </span>
        <span>
          <Sidebar />
        </span>
      </div>
    </div>
  );
}
