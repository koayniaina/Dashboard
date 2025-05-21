"use client";

import Link from "next/link";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import {
  MdDashboard,
  MdOutlineGrade,
  MdScreenRotationAlt,
  MdSubject,
} from "react-icons/md";
import styles from "@/styles/Sidebar.module.css";
import { SiGoogleclassroom } from "react-icons/si";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GoSidebarCollapse } from "react-icons/go";

const SHEET_SIDES = ["left"] as const;
type SheetSide = (typeof SHEET_SIDES)[number];

export default function Sidebar() {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <span>
              <GoSidebarCollapse />
            </span>
          </SheetTrigger>
          <SheetContent side={side} className="w-[200px] bg">
            <SheetHeader>
              <SheetTitle>Student</SheetTitle>
            </SheetHeader>
            <div className={styles.sidbare}>
              <li>
                <Link href="/" className="tooltip-right" data-tip="dashboard">
                  <span className={styles.icon}>
                    <MdDashboard />
                  </span>
                  <span className={styles.label}>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/teacher">
                  <span className={styles.icon}>
                    <FaChalkboardTeacher />
                  </span>
                  <span>Teacher</span>
                </Link>
              </li>
              <li>
                <Link href="/student">
                  <span className={styles.icon}>
                    <IoIosSchool />
                  </span>
                  <span>Student</span>
                </Link>
              </li>
              <li>
                <Link href="/grade">
                  <span className={styles.icon}>
                    <MdOutlineGrade />
                  </span>
                  <span>Grade</span>
                </Link>
              </li>
              <li>
                <Link href="/subject">
                  <span className={styles.icon}>
                    <MdSubject />
                  </span>
                  <span>Subject</span>
                </Link>
              </li>
              <li>
                <Link href="/class">
                  <span className={styles.icon}>
                    <SiGoogleclassroom />
                  </span>
                  <span>Class</span>
                </Link>
              </li>
              <li>
                <Link href="/enrollment">
                  <span className={styles.icon}>
                    <MdScreenRotationAlt />
                  </span>
                  <span>Enrollment</span>
                </Link>
              </li>
            </div>
        
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
