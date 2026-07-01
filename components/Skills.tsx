import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">Skills</p>
      <h2 className="mb-8 text-3xl font-black sm:text-4xl">Technologies I work with</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400 hover:text-sky-300">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
