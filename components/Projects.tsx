import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">Projects</p>
      <h2 className="mb-8 text-3xl font-black sm:text-4xl">Selected projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/50">
            <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-sky-400/20 via-indigo-500/20 to-purple-500/20 p-5">
              <div className="flex h-full items-end rounded-xl border border-white/10 bg-black/20 p-4">
                <span className="text-sm text-slate-300">Project Preview</span>
              </div>
            </div>

            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
