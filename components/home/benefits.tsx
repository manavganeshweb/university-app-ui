import { asset, benefits } from "../../lib/data";
import { SectionTitle } from "../section-title";

export function Benefits() {
  return (
    <section className="section-space bg-white">
      <div className="container-page">

        <SectionTitle
          label="WHY ONLINE?"
          title="Learning that works around your life"
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">

          {benefits.map(([label, image]) => (
            <article
              key={label}
              className="group rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">

                <img
                  src={asset(`images/${image}`, 96, 96)}
                  alt={label}
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />

              </div>

              <h3 className="mt-5 text-sm font-semibold leading-6 text-zinc-800">
                {label}
              </h3>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}