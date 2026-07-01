import { experiences } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">Experience</p>
      <h2 className="mb-8 text-3xl font-black sm:text-4xl">Work experience</h2>

      <div className="grid gap-5">
        {experiences.map((item) => (
          <div key={item.company} className="glass rounded-3xl p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">{item.role}</h3>
                <p className="text-sky-300">{item.company}</p>
              </div>
              <p className="text-sm text-slate-400">{item.date}</p>
            </div>

            <ul className="mt-5 space-y-2 text-slate-300">
              {item.points.map((point) => <li key={point}>• {point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
