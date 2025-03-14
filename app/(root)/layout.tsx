import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Itumeleng', lastName: "Guest" };

  return (
    <main className="flex h-screen w-full font">
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={300} alt="menu-icon" />
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>

    </main>
  );
}
