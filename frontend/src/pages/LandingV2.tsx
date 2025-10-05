import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SparklesCore } from "../components/ui/sparkles";

const LandingV2: React.FC = () => {
	return (
		<div className="relative w-full overflow-x-hidden bg-black">
		<main className="relative h-screen w-full overflow-hidden bg-black">
			{/* Animated gradient background */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20 mix-blend-overlay" />
			</div>

			{/* Sparkles effect */}
			<SparklesCore
				id="sparkles-landing"
				background="transparent"
				minSize={0.4}
				maxSize={1.2}
				particleDensity={80}
				className="absolute inset-0 z-0"
				particleColor="#FFFFFF"
			/>

			{/* Gradient orbs */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
					animate={{
						x: [0, 100, 0],
						y: [0, -50, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
					animate={{
						x: [0, -100, 0],
						y: [0, 50, 0],
						scale: [1, 1.3, 1],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
					animate={{
						x: [0, 50, 0],
						y: [0, -30, 0],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 18,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 flex h-full items-center justify-center px-6">
				<div className="max-w-6xl text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
							Your Second Brain
						</h1>
					</motion.div>

					<motion.p
						className="mx-auto mb-12 max-w-3xl text-xl text-gray-300 sm:text-2xl md:text-3xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Capture ideas, organize knowledge, and unlock insights with AI-powered
						intelligence. Your digital mind palace awaits.
					</motion.p>

					<motion.div
						className="flex flex-col items-center justify-center gap-6 sm:flex-row"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<Link
							to="/login"
							className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-16 py-5 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 sm:text-2xl"
						>
							<span className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							<span className="relative">Login</span>
						</Link>

						<a
							href="#learn-more"
							className="group inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-16 py-5 text-xl font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/10 sm:text-2xl"
						>
							<span>Learn More</span>
							<svg
								className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
					</motion.div>

					<motion.div
						className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<div className="flex items-center gap-2">
							<svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							<span>Free to start</span>
						</div>
						<div className="flex items-center gap-2">
							<svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							<span>No credit card</span>
						</div>
						<div className="flex items-center gap-2">
							<svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							<span>Setup in 2 minutes</span>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Bottom gradient fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
		</main>

		{/* Learn More Section */}
		<section id="learn-more" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24">
			<div className="container mx-auto px-6 lg:px-12">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
						Why Second Brain?
					</h2>
					<p className="mx-auto max-w-3xl text-lg text-gray-400 sm:text-xl">
						Transform how you capture, organize, and rediscover knowledge with AI-powered intelligence.
					</p>
				</motion.div>

				{/* Features Grid */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Feature 1 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
					>
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
							<svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<h3 className="mb-3 text-2xl font-bold text-white">Instant Capture</h3>
						<p className="text-gray-400">
							Save ideas, articles, videos, and tweets in seconds. Never lose a thought again with our browser extension and mobile apps.
						</p>
					</motion.div>

					{/* Feature 2 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
					>
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
							<svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</div>
						<h3 className="mb-3 text-2xl font-bold text-white">Smart Search</h3>
						<p className="text-gray-400">
							Find anything instantly with AI-powered semantic search. Search by meaning, not just keywords, across all your content.
						</p>
					</motion.div>

					{/* Feature 3 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/20"
					>
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
							<svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
							</svg>
						</div>
						<h3 className="mb-3 text-2xl font-bold text-white">AI Insights</h3>
						<p className="text-gray-400">
							Discover connections you never knew existed. Our AI surfaces related ideas and generates summaries automatically.
						</p>
					</motion.div>

					{/* Feature 4 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20"
					>
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
							<svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
							</svg>
						</div>
						<h3 className="mb-3 text-2xl font-bold text-white">Smart Tags</h3>
						<p className="text-gray-400">
							Organize effortlessly with auto-tagging. Create custom collections and let AI suggest relevant tags as you add content.
						</p>
					</motion.div>

					{/* Feature 5 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						viewport={{ once: true }}
						className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/20"
					>
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
							<svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
							</svg>
						</div>
						<h3 className="mb-3 text-2xl font-bold text-white">Share & Collaborate</h3>
						<p className="text-gray-400">
							Share your knowledge with the world. Create public brain pages, export notes, and collaborate with your team seamlessly.
						</p>
					</motion.div>

					{/* Feature 6 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
						className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20"
					>
						<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
							<svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
							</svg>
						</div>
						<h3 className="mb-3 text-2xl font-bold text-white">Privacy First</h3>
						<p className="text-gray-400">
							Your data is encrypted and secure. We never sell your information. You own your knowledge, completely and forever.
						</p>
					</motion.div>
				</div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.7 }}
					viewport={{ once: true }}
					className="mt-20 text-center"
				>
					<div className="mx-auto max-w-3xl rounded-3xl border border-gray-800 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-12 backdrop-blur-sm">
						<h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
							Ready to Build Your Second Brain?
						</h3>
						<p className="mb-8 text-lg text-gray-300">
							Join thousands of knowledge workers, creators, and learners who trust SecondBrain.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Link
								to="/signup"
								className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-10 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-purple-500/50"
							>
								Get Started Free
							</Link>
							<Link
								to="/login"
								className="inline-flex items-center justify-center rounded-full border border-gray-600 bg-white/5 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-gray-400 hover:bg-white/10"
							>
								Sign In
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
		</div>
	);
};

export default LandingV2;