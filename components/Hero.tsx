"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { personal } from "@/data/site";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-32 sm:px-6 lg:pt-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-10 top-56 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
            <Sparkles size={16} />
            Available for freelance projects
          </div>

          <h1 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">Suhaib</span>.
            <br />
            I build scalable APIs and Telegram bots.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            {personal.title}. I create secure backend systems, REST APIs, admin panels,
            database-driven apps and automation tools using C#, Python, PHP Laravel,
            ASP.NET Core and PostgreSQL.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="rounded-xl bg-sky-400 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-sky-300">
              Contact Me
            </a>
            <a href="#projects" className="rounded-xl border border-white/15 px-6 py-3 text-center font-bold transition hover:border-sky-400 hover:text-sky-300">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="glass rounded-3xl p-5 shadow-2xl sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-sky-400/10 p-3 text-sky-300">
              <Code2 />
            </div>
            <div>
              <p className="font-bold">developer.ts</p>
              <p className="text-sm text-slate-400">clean backend profile</p>
            </div>
          </div>

          <pre className="overflow-x-auto break-words whitespace-pre-wrap text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300 bg-black/30 p-4 rounded-2xl">
          {`const developer = {
            name: "Suhaib Matin",
            role: "Backend Engineer",
            focus: [ "Backend Development", "REST API Engineering","Telegram Bot Development", "Business Process Automation", "Database Architecture", "Cloud Deployment" ],
            stack: ["C#", "ASP.NET Core", "Python", "PHP Laravel", "PostgreSQL","MySQL", "MongoDB", "Docker", "Linux", "Git"],
            values: ["Clean Code", "Security", "Scalability", "Maintainability", "Performance", "Reliability"],
          };`}</pre>
        </motion.div> */}


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Blue glow */}
            <div className="absolute -inset-3 rounded-3xl bg-sky-500/20 blur-2xl"></div>

            {/* Card */}
            <div className="glass relative rounded-3xl p-6">

              <Image
                src="/images/profile-placeholder.png"
                alt="Profile"
                width={420}
                height={520}
                className="rounded-3xl object-cover"
                priority
              />

              <div className="mt-6 text-center">

                <h3 className="text-2xl font-bold">
                  Suhaib Matin
                </h3>

                <p className="mt-2 text-slate-400">
                  Backend Engineer
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">

                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
                    C#
                  </span>

                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
                    Python
                  </span>

                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
                    php
                  </span>

                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
                    .net
                  </span>

                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
                    Laravel
                  </span>

                </div>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
