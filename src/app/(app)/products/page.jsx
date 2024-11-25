import React from "react";

export const metadata = {
  title: "Products & Services",
};

export default function ProductsPage() {
  return (
    <section>
      <div className="h-[300px] relative">
        <div
          className="absolute inset-0 bg-[url('/images/eco-batteries.jpg')] bg-cover bg-center brightness-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-6xl font-bold">
              Products & Services
            </h1>
            <p className="text-white text-xl mt-2 font-extralight tracking-widest">
              Ecomobilus Technologies Limited
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
