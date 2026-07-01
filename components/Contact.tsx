import { Mail, MessageCircle, Send } from "lucide-react";
import { personal } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="glass rounded-3xl p-8 text-center sm:p-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">Contact</p>
        <h2 className="text-3xl font-black sm:text-4xl">Let&apos;s build something great</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
          Available for Telegram bot development, backend APIs, database design and automation projects.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a href={`mailto:${personal.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-sky-300">
            <Mail size={18} /> Email
          </a>
          <a href={personal.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-bold transition hover:border-sky-400 hover:text-sky-300">
            <Send size={18} /> Telegram
          </a>
          <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-bold transition hover:border-sky-400 hover:text-sky-300">
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 font-bold transition hover:border-sky-400 hover:text-sky-300">
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 font-bold transition hover:border-sky-400 hover:text-sky-300">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
