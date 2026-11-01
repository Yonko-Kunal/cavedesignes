import React from "react";
import Link from "next/link";
import Container from "@/Components/container";

const Navbar = () => {
	const navItems = [
		{ title: "Home", href: "/" },
		{ title: "Categories", href: "/categories" },
		{ title: "Collections", href: "/collections" },
		{ title: "Pricing", href: "/pricing" },
	];

	return (
		<nav className="h-12">
			<Container className="border-l border-r border-border flex items-center justify-center py-0 px-0 h-full">
				<div className="relative h-full w-[30%]">
					<svg
						className="absolute inset-0 size-full"
						viewBox="0 0 400 48"
						preserveAspectRatio="none"
					>
						<path
							d="M0 0 H400 V0 Q400 0 400 0 V16 Q400 48 368 48 H32 Q0 48 0 16 V0 Q0 0 0 0 Z"
							fill="currentColor"
						/>
					</svg>

					<div className="relative z-10 flex h-full items-center justify-around px-6">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm font-medium text-background"
							>
								{item.title}
							</Link>
						))}
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
