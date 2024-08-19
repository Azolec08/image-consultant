import { SidebarDemo } from "@/components/sidebar-component";
// import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#ede5f0] flex items-center justify-center">
      <section className="w-full h-full container flex items-center justify-center ">
        <div className="w-full h-full">
          <SidebarDemo />
        </div>
      </section>
    </main>
  );
}
