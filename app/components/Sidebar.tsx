import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React from "react";


const items = [
  {
    href: "/",
    label: "Dashboard",
    icon: <LayoutDashboard />,
  },

  {
    href: "/teacher",
    label: "Teacher",
    icon: <LayoutDashboard />,
  },

  {
    href: "/student",
    label: "Student",
    icon: <LayoutDashboard />,
  },
]

export default function Sidebar() {
  return (
    <div>
      {
        items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="text-gray-500 dark:text-gray-400 ">
              {item.icon}
            </span>
            <span className="hidden lg:block">{item.label}</span>
          </Link>
        ))
      }
    </div>
       
  );
}
