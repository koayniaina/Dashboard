import Header from "@/components/Header";
import styles from "@/styles/Sidebar.module.css";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full  ">
      <div className={styles.asidebar}>
        <main className="shadow-md"> 
          <Header />
        </main>
        {children}
      </div>
    </div>
  );
}
