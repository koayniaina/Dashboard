import React from "react";
import styles from "@/styles/Home.module.css";
import MyCards from "../components/MyCards";
import MyArea from "../components/rechart/MyArea";
import MyPies from "../components/rechart/MyPies";

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
          <div>
            <h2>All Exam Result</h2>
            <p className={styles.text}>Teacher & Student</p>
          </div>
          <div><MyArea /></div>
        </aside>
        <aside className={styles.deals}>
          <div>
            <MyCards />
          </div>
        </aside>
      </section>
    </main>
  );
}
