import Sidebar from "../components/Sidebar";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[12%] xl:-[14%] sideleft ">
        <Sidebar />
      </div>

      <div className="w-[86%] md:w-[92%] lg:w-[88%] xl:-[86%]">{children}</div>
    </div>
  );
}
