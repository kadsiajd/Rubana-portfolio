import { useState, useEffect } from "react";

const NAV = ["About", "Projects", "Skills", "Contact"];

const PROJECTS: {
	id: string;
	name: string;
	role: string;
	short: string;
	desc: string;
	what: string;
	stack: string[];
	stackRole: Record<string, string>;
	tagBg: string;
} [] = [
	{
		id: "01",
		name: "QConnect",
		role: "Full Stack Developer",
		short: "Academic workflow platform for college staff.",
		desc: "QConnect is an internal platform built for college staff to streamline academic operations — from assigning assessments and tests to coordinating placement activities. Staff can manage student workflows, track submissions, and handle placement scheduling all in one place.",
		what: "Think of it like an admin dashboard your college staff uses — instead of paper forms and WhatsApp messages, everything from test assignments to placement coordination happens digitally in one system.",
		stack: ["Astro", "Fastify", "Prisma", "PostgreSQL"],
		stackRole: {
			Astro: "Fast, lightweight web pages",
			Fastify: "Server & API logic",
			Prisma: "Database communication layer",
			PostgreSQL: "Data storage",
		},
		tagBg: "bg-violet-50 text-violet-700 border border-violet-100",
	},
	{
		id: "02",
		name: "Credit Right",
		role: "Full Stack Developer",
		short: "B2B credit & invoice-to-cash management platform.",
		desc: "Credit Right is an end-to-end platform that helps businesses manage their entire invoice-to-cash cycle. It handles credit assessments, automated payment follow-ups (dunning), accounts receivable forecasting, early warning signals for risky buyers, and connects businesses with lenders — all in one unified system.",
		what: "Imagine a business sends invoices to clients. Credit Right tracks who hasn't paid, automatically follows up with reminders, predicts cash flow issues before they happen, and even helps find financing options if the business needs working capital. It replaces spreadsheets and manual phone calls.",
		stack: ["React", "Fastify", "Prisma", "PostgreSQL"],
		stackRole: {
			React: "Interactive user interface",
			Fastify: "High-performance API server",
			Prisma: "Database ORM layer",
			PostgreSQL: "Relational data storage",
		},
		tagBg: "bg-amber-50 text-amber-700 border border-amber-100",
	},
];

const SKILLS = [
	{ name: "React", type: "Frontend", icon: "⚛" },
	{ name: "Astro", type: "Frontend", icon: "🚀" },
	{ name: "Fastify", type: "Backend", icon: "⚡" },
	{ name: "Node.js", type: "Runtime", icon: "🟢" },
	{ name: "Prisma", type: "ORM", icon: "🔷" },
	{ name: "PostgreSQL", type: "Database", icon: "🐘" },
];

export default function Portfolio() {
	//   const [active, setActive] = useState(null);
	const [active, setActive] = useState<string | null>(null);
	//   const [showPlain, setShowPlain] = useState({});
	const [showPlain, setShowPlain] = useState<Record<string, boolean>>({});
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const togglePlain = (id: string) =>
		setShowPlain((p) => ({
			...p,
			[id]: !p[id],
		}));
	return (
		<div className="min-h-screen w-full bg-[#fafafa] text-gray-900 overflow-x-hidden">
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

			{/* NAV */}
			<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
				<div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
					<span className="font-syne text-xl font-extrabold tracking-tight text-gray-900">
						Rubana<span className="text-violet-600">.dev</span>
					</span>
					<nav className="hidden md:flex items-center gap-1">
						{NAV.map((n) => (
							<a key={n} href={`#${n.toLowerCase()}`}
								className="font-inter text-sm text-gray-500 hover:text-violet-600 px-4 py-2 rounded-full hover:bg-violet-50 transition-all">
								{n}
							</a>
						))}
					</nav>
					<button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							{menuOpen
								? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
								: <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
						</svg>
					</button>
				</div>
				{menuOpen && (
					<div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 shadow-sm">
						{NAV.map((n) => (
							<a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMenuOpen(false)}
								className="font-inter text-sm text-gray-600 hover:text-violet-600 py-1 transition-colors">
								{n}
							</a>
						))}
					</div>
				)}
			</header>

			{/* HERO */}
			<section id="about" className="min-h-screen flex items-center bg-white px-6 md:px-12 pt-16">
				<div className="max-w-6xl mx-auto w-full py-20 md:py-0">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div>
							<div className="flex items-center gap-2 mb-6">
								<div className="h-px w-8 bg-violet-400"></div>
								<span className="font-inter text-xs tracking-widest text-violet-500 uppercase">Full Stack Developer</span>
							</div>
							<h1 className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
								Hi, I'm<br />
								<span className="text-violet-600">Rubana</span>
							</h1>
							<p className="font-inter text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
								I build web applications end-to-end — from databases to interfaces. Currently at{" "}
								<span className="text-gray-800 font-medium">Codingmart Technologies</span>,
								Coimbatore, crafting products that solve real problems.
							</p>
							<div className="flex flex-wrap gap-3">
								<a href="#projects"
									className="font-inter text-sm font-medium bg-violet-600 text-white px-6 py-3 rounded-full hover:bg-violet-700 active:scale-95 transition-all">
									View Projects →
								</a>
								<a href="#contact"
									className="font-inter text-sm font-medium border border-gray-200 text-gray-700 px-6 py-3 rounded-full hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50 transition-all">
									Get in Touch
								</a>
							</div>
						</div>

						<div className="flex justify-center md:justify-end">
							<div className="bg-[#fafafa] border border-gray-100 rounded-3xl p-8 w-full max-w-sm">
								<p className="font-inter text-xs uppercase tracking-widest text-gray-400 mb-6">At a glance</p>
								<div className="space-y-0">
									{[
										{ label: "Experience", sub: "In the industry", value: "1 Year" },
										{ label: "Employer", sub: "Coimbatore, India", value: "Codingmart" },
										{ label: "Projects Shipped", sub: "Production applications", value: "2 Live" },
										{ label: "Tech Stack", sub: "Frontend to Database", value: "6+ Tools" },
									].map((s, i, arr) => (
										<div key={s.label} className={`flex items-center justify-between py-4 ${i !== arr.length - 1 ? "border-b border-gray-100" : ""}`}>
											<div>
												<p className="font-inter text-sm font-medium text-gray-700">{s.label}</p>
												<p className="font-inter text-xs text-gray-400 mt-0.5">{s.sub}</p>
											</div>
											<span className="font-syne text-base font-bold text-violet-600">{s.value}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* PROJECTS */}
			<section id="projects" className="min-h-screen flex items-center bg-[#fafafa] px-6 md:px-12">
				<div className="max-w-6xl mx-auto w-full py-24">
					<div className="flex items-center gap-3 mb-3">
						<div className="h-px w-8 bg-violet-400"></div>
						<span className="font-inter text-xs tracking-widest text-violet-500 uppercase">Work</span>
					</div>
					<h2 className="font-syne text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
						Projects I've Shipped
					</h2>
					<p className="font-inter text-gray-400 text-sm mb-12">Click a project to explore it in detail.</p>

					<div className="space-y-5">
						{PROJECTS.map((p) => (
							<div key={p.id}
								className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${active === p.id ? "border-violet-300 shadow-lg shadow-violet-50" : "border-gray-100 hover:border-gray-200 hover:shadow-md"}`}>

								<button
									onClick={() => setActive(active === p.id ? null : p.id)}
									className="w-full text-left px-8 py-7 flex items-center justify-between gap-4">
									<div className="flex items-center gap-5 flex-1 min-w-0">
										<span className="font-syne text-3xl font-extrabold text-gray-100 select-none shrink-0">{p.id}</span>
										<div className="min-w-0">
											<div className="flex items-center gap-3 flex-wrap mb-1">
												<h3 className="font-syne text-xl font-bold text-gray-900">{p.name}</h3>
												<span className={`font-inter text-xs px-2.5 py-0.5 rounded-full ${p.tagBg}`}>{p.role}</span>
											</div>
											<p className="font-inter text-sm text-gray-400">{p.short}</p>
										</div>
									</div>
									<div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${active === p.id ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-400"}`}>
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
											{active === p.id
												? <polyline points="18 15 12 9 6 15" />
												: <polyline points="6 9 12 15 18 9" />}
										</svg>
									</div>
								</button>

								{active === p.id && (
									<div className="px-8 pb-8 border-t border-gray-50">
										<div className="grid md:grid-cols-2 gap-8 mt-6">
											<div>
												<p className="font-inter text-xs uppercase tracking-widest text-gray-400 mb-3">What I built</p>
												<p className="font-inter text-sm text-gray-600 leading-relaxed mb-5">{p.desc}</p>
												<button
													onClick={() => togglePlain(p.id)}
													className="font-inter text-xs text-violet-600 border border-violet-200 px-3 py-1.5 rounded-full hover:bg-violet-50 transition-colors">
													{showPlain[p.id] ? "Hide explanation" : "🔍 Explain it simply"}
												</button>
												{showPlain[p.id] && (
													<div className="mt-3 bg-violet-50 border border-violet-100 rounded-xl px-4 py-3">
														<p className="font-inter text-xs font-medium text-violet-500 uppercase tracking-wide mb-1">In plain English</p>
														<p className="font-inter text-sm text-violet-900 leading-relaxed">{p.what}</p>
													</div>
												)}
											</div>
											<div>
												<p className="font-inter text-xs uppercase tracking-widest text-gray-400 mb-3">Tech Stack</p>
												<div className="space-y-2">
													{p.stack.map((t) => (
  <div
    key={t}
    className="flex items-center justify-between bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3"
  >
    <span className="font-inter text-sm font-medium text-gray-800">
      {t}
    </span>
    <span className="font-inter text-xs text-gray-400">
      {p.stackRole[t]}
    </span>
  </div>
))}
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SKILLS */}
			<section id="skills" className="min-h-screen flex items-center bg-white px-6 md:px-12">
				<div className="max-w-6xl mx-auto w-full py-24">
					<div className="flex items-center gap-3 mb-3">
						<div className="h-px w-8 bg-violet-400"></div>
						<span className="font-inter text-xs tracking-widest text-violet-500 uppercase">Toolkit</span>
					</div>
					<h2 className="font-syne text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
						Skills & Tools
					</h2>
					<p className="font-inter text-gray-400 text-base mb-14 max-w-md">
						Technologies I work with daily — from building user interfaces to designing databases.
					</p>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-14">
						{SKILLS.map((s) => (
							<div key={s.name}
								className="group flex flex-col items-center gap-2 bg-[#fafafa] border border-gray-100 rounded-2xl py-6 px-4 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md transition-all cursor-default">
								<span className="text-2xl mb-1">{s.icon}</span>
								<span className="font-syne text-sm font-bold text-gray-800 group-hover:text-violet-700 transition-colors">{s.name}</span>
								<span className="font-inter text-xs text-gray-400">{s.type}</span>
							</div>
						))}
					</div>
					<div className="grid md:grid-cols-3 gap-5">
						{[
							{ title: "Frontend", desc: "Building interfaces that are clean, fast, and easy to use — whether it's a complex dashboard or a simple landing page.", icon: "🖥" },
							{ title: "Backend", desc: "Writing server logic and APIs that handle real data reliably — fast, secure, and scalable from day one.", icon: "⚙" },
							{ title: "Database", desc: "Designing schemas and queries that store and retrieve data efficiently using Prisma and PostgreSQL.", icon: "🗄" },
						].map((c) => (
							<div key={c.title} className="border border-gray-100 rounded-2xl p-6 hover:border-violet-200 hover:shadow-sm transition-all">
								<span className="text-2xl block mb-3">{c.icon}</span>
								<h3 className="font-syne text-base font-bold text-gray-900 mb-2">{c.title}</h3>
								<p className="font-inter text-sm text-gray-500 leading-relaxed">{c.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CONTACT */}
			<section id="contact" className="min-h-screen flex items-center bg-[#fafafa] px-6 md:px-12">
				<div className="max-w-6xl mx-auto w-full py-24">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div>
							<div className="flex items-center gap-3 mb-3">
								<div className="h-px w-8 bg-violet-400"></div>
								<span className="font-inter text-xs tracking-widest text-violet-500 uppercase">Contact</span>
							</div>
							<h2 className="font-syne text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
								Let's connect.
							</h2>
							<p className="font-inter text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
								Whether it's a question about my work, a collaboration idea, or just saying hello — my inbox is open.
							</p>
							<div className="space-y-4">
								{[
									{
										label: "rubana@example.com", href: "mailto:rubana@example.com",
										icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>
									},
									{
										label: "linkedin.com/in/rubana", href: "https://linkedin.com",
										icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
									},
									{
										label: "github.com/rubana", href: "https://github.com",
										icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
									},
								].map((link) => (
									<a key={link.label} href={link.href} target="_blank" rel="noreferrer"
										className="flex items-center gap-3 font-inter text-sm text-gray-600 hover:text-violet-600 transition-colors group w-fit">
										<div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-violet-100 flex items-center justify-center transition-colors shrink-0">
											{link.icon}
										</div>
										{link.label}
									</a>
								))}
							</div>
						</div>

						<div className="bg-violet-600 rounded-3xl p-10 text-white">
							<p className="font-inter text-violet-300 text-xs uppercase tracking-widest mb-3">Currently at</p>
							<h3 className="font-syne text-2xl font-extrabold mb-1">Codingmart Technologies</h3>
							<p className="font-inter text-violet-200 text-sm mb-8">Full Stack Developer · Coimbatore</p>
							<div className="h-px bg-violet-500 mb-8"></div>
							<p className="font-inter text-violet-100 text-sm leading-relaxed mb-8">
								In my first year, I've shipped two production applications used by real businesses and institutions. I work across the entire stack — from database design to the final pixel.
							</p>
							<div className="grid grid-cols-2 gap-3">
								{[
									{ v: "1 Year", l: "Experience" },
									{ v: "2", l: "Live Projects" },
									{ v: "6+", l: "Technologies" },
									{ v: "Full Stack", l: "Expertise" },
								].map((s) => (
									<div key={s.l} className="bg-white/10 rounded-xl px-4 py-3">
										<p className="font-syne text-lg font-bold text-white">{s.v}</p>
										<p className="font-inter text-xs text-violet-300">{s.l}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer className="bg-white border-t border-gray-100 px-6 py-6">
				<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
					<span className="font-syne text-base font-bold text-gray-900">R<span className="text-violet-600">.</span></span>
					<p className="font-inter text-xs text-gray-400">© 2025 Rubana · Built with React & Tailwind CSS</p>
					<div className="flex items-center gap-4">
						<a href="https://github.com" className="font-inter text-xs text-gray-400 hover:text-violet-600 transition-colors">GitHub</a>
						<a href="https://linkedin.com" className="font-inter text-xs text-gray-400 hover:text-violet-600 transition-colors">LinkedIn</a>
					</div>
				</div>
			</footer>
		</div>
	);
}