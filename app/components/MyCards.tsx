import React from "react";
import styles from "@/styles/Home.module.css";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";

export default function MyCards() {
  return (
    <main>
      <section className={styles.grid}>
        <div className={styles.card}>
          <aside>
            <span>Student</span>
            <h2 className={styles.chiffre}>15.00k</h2>
          </aside>
          <div className={styles.icon}>
            <PiStudentFill />
          </div>
        </div>
        <div className={styles.card}>
          <aside>
            <span>Teacher</span>
            <h2 className={styles.chiffre}>2.00k</h2>
          </aside>
          <div className={styles.icon}>
          <FaChalkboardTeacher />
          </div>
        </div>
        <div className={styles.card}>
          <aside>
            <span>Parent</span>
            <h2 className={styles.chiffre}>5.06k</h2>
          </aside>
          <div className={styles.icon}>
          <RiParentFill />
          </div>
        </div>
        <div className={styles.card}>
          <aside>
            <span>Earnings</span>
            <h2 className={styles.chiffre}>$ 19.3k</h2>
          </aside>
          <div className={styles.icon}>
          <GrMoney />
          </div>
        </div>
      </section>
    </main>
  );
}
