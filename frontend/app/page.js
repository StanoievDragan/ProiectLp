"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section className="relative w-full h-[900px] overflow-hidden">
      <img
        src="/images/lpproiecthome.png"
        alt="Home Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          20% REDUCERE LA ȚINUTELE DE VARĂ
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white">
          Cele mai bune alegeri pentru antrenamentele tale. Care aduc un plus de energie la fiecare repetare!
        </p>

        <div className="flex space-x-4">
          <Link href="/products">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Cumpără acum
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
