const home = () => {
	return (
		<section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
			{/* Background Glow */}
			<div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
			<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

			<div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
				<div className="max-w-3xl">
					<div className="mb-4 inline-flex items-center rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm text-slate-300 backdrop-blur">
						Full Stack Developer
					</div>

					<h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
						Hi, I'm{' '}
						<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
							Rubana
						</span>
					</h1>

					<h2 className="mb-6 text-2xl text-slate-300 md:text-3xl">
						Building scalable web applications and enterprise solutions.
					</h2>

					<p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-400">
						Currently working at Codingmart Technologies,
						specializing in React, Fastify, PostgreSQL,
						Prisma, and TypeScript.
					</p>

					<div className="mb-10 flex flex-wrap gap-3">
						{[
							'React',
							'Fastify',
							'PostgreSQL',
							'Prisma',
							'TypeScript',
						].map((tech) => (
							<span
								key={tech}
								className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
							>
								{tech}
							</span>
						))}
					</div>

					<div className="flex flex-wrap gap-4">
						<button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
							View Projects
						</button>

						<button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-900">
							Contact Me
						</button>
					</div>

					<div className="mt-12 flex gap-10">
						<div>
							<h3 className="text-3xl font-bold">1+</h3>
							<p className="text-slate-400">Years Experience</p>
						</div>

						<div>
							<h3 className="text-3xl font-bold">5+</h3>
							<p className="text-slate-400">Core Technologies</p>
						</div>

						<div>
							<h3 className="text-3xl font-bold">1</h3>
							<p className="text-slate-400">Enterprise Product</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default home;