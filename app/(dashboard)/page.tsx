import React from "react";
import styles from "@/styles/Home.module.css";
import MyCards from "../components/MyCards";
import MyArea from "../components/rechart/MyArea";


export default function Home() {
  return (
    <main className={styles.container}>
      <section>
        <aside className={styles.content}>
          <div className={styles.logo}>
            <span>Admin Dashboard</span>
          </div>
        </aside>
      </section>
      <section className={styles.mycards}>
        <aside className={styles.bare}>
          <div className={styles.bareTitle}>
            <h2>All Exam Result</h2>
            <p className={styles.text}>Teacher & Student</p>
          </div>
          <MyArea />
        </aside>
        <aside className={styles.grid }>
          <div>
           <MyCards />
          
          </div>
          
        </aside>
      </section>
    </main>
  );
}
