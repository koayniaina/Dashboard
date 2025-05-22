import styles from "@/styles/Sidebar.module.css";

import Sidebar from "../components/Sidebar";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen flex max-w-full">
      <section className="w-[4vw]">
        <Sidebar/>
      </section>
      <section className="w-[96vw] bg-blue-300">
        {children}
       </section>
    </main>
  );
}
