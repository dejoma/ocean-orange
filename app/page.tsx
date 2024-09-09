import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { TextEffect } from "./components/text-effect";

const navigation = [{ name: "Contact", href: "/contact" }];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in" // Changed z-10 back to -z-10
				quantity={300}
				staticity={30}
				ease={20}
				color="#ffffff"
			/>

			<nav className="my-16 animate-fade-in z-20">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-zinc-200 hover:underline"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 z-10 animate-fade-in" // Changed -z-10 to z-10
				quantity={300}
				staticity={30} // Add this line to make particles more responsive
				ease={20} // Add this line to make movement smoother
			/>
			<h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				ocean orange
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-md text-zinc-200 ">
					<TextEffect delay={3.1} per="char" preset="fade">
						Fresh solutions for a sea of opportunities.
					</TextEffect>
				</h2>
			</div>
		</div>
	);
}
