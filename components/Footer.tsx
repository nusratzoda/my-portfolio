export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Suhaib Matin. Built with Next.js and Tailwind CSS.
    </footer>
  );
}
