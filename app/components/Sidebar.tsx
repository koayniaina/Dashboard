import Link from "next/link";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

const items = [
  {
    href: "/",
    label: "Dashboard",
    icon: <MdDashboard />,
  },

  {
    href: "/teacher",
    label: "Teacher",
    icon: <FaChalkboardTeacher />,
  },

  {
    href: "/student",
    label: "Student",
    icon: <IoIosSchool />,
  },
];

export default function Sidebar() {
  return (
    <div>
      <li>
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white  dark:hover:bg-gray-700 group"
          >
            <span className="text-gray-500 dark:text-gray-400 icons ">
              {item.icon}
            </span>
            <span className="hidden lg:block">{item.label}</span>
          </Link>
        ))}
      </li>
    </div>
  );
}
