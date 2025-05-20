import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[12%] md:w-[8%] lg:w-[12%] xl:-[12%] sideleft ">
        <Sidebar />
      </div>

      <div className="w-[88%] md:w-[92%] lg:w-[88%] xl:-[88%]">
        <main>
          <Header />
        </main>
        {children}
      </div>
    </div>
  );
}
