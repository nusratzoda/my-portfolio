import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="section">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">Services</p>
      <h2 className="mb-8 text-3xl font-black sm:text-4xl">How I can help you</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/50">
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
