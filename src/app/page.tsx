import { SidebarDemo } from "@/components/sidebar-component";
// import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#ede5f0] md:flex items-center justify-center">
      <section className="w-full h-full lg:container ">
        <SidebarDemo />
      </section>
    </main>
  );
}
