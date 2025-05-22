import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

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
      <section className="w-[96vw] bg-gray-300">
        <Header/>
        {children}
       </section>
    </main>
  );
}
