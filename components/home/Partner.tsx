import { asset, partners } from "../../lib/data";

export function PartnerRail() {
  const logos = [...partners, ...partners];

  return (
    <section className="relative overflow-hidden bg-white border-y border-gray-100 py-10">

      <div className="container-page mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Trusted Universities
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Learn with India's Leading Institutions
        </h2>
      </div>

      <div className="group relative overflow-hidden">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent"></div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent"></div>

        <div className="flex w-max animate-partner-scroll group-hover:[animation-play-state:paused]">

          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-4 flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
            <img
  src={asset(`universities/${logo}`, 384, 100)}
  alt="University partner"
  className="max-h-11 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
/>
            </div>
          ))}

        </div>
      </div>
      
    </section>
  );
}