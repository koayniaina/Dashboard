import Header from "../components/home/Header";
import Sidebar from "../components/home/Sidebar";


export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen flex max-w-full">
      <section className="w-[4vw]">
        <Sidebar />
      </section>
      <section className="w-[96vw]">
        <Header />
        {children}
      </section>
    </main>
  );
}
