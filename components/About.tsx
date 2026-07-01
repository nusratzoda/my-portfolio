export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">About</p>
          <h2 className="text-3xl font-black sm:text-4xl">Backend developer focused on real business solutions.</h2>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8">
          <p className="leading-8 text-slate-300">
            I am a Backend Developer with experience designing and developing scalable web applications,
            building REST APIs, and working with relational and non-relational databases. I have worked
            on LMS platforms, marketplace applications, medical systems, API integrations and backend
            performance optimization.
          </p>
          <p className="mt-5 leading-8 text-slate-300">
            My goal is to deliver clean, secure and scalable solutions while maintaining clear communication and on-time delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
