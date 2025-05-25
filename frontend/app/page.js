"use client";

import Link from "next/link";
import { Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
     
      <div className="fixed top-0 left-0 w-full bg-gray-300 text-black py-2 px-4 flex items-center justify-center z-50 text-sm gap-2 mt-20">
      <Truck size={18} className="inline-block" />
       <span className="font-extrabold">Livrare gratuită la comenzile de peste 200 de lei</span>
        </div>

      
      <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden pt-[40px] mt-[59px]">
        <img
          src="/images/lpproiecthome.png"
          alt="Home Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/10 z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            20% REDUCERE LA ȚINUTELE DE VARĂ
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-xl">
            Cele mai bune alegeri pentru antrenamentele tale. Care aduc un plus de energie la fiecare repetare!
          </p>

          <Link href="/products">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Cumpără acum
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
