import React, { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
	galleryConfig,
	getGalleryItem,
	getAdjacentGalleryItems,
} from "@/config/gallery";
import DesignDetailActions from "@/Components/designDetailActions";
import Container from "@/Components/container";

interface PageProps {
	params: Promise<{ id: string }>;
}

export function generateStaticParams() {
	return galleryConfig.map((item) => ({
		id: item.id,
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { id } = await params;
	const item = getGalleryItem(id);

	if (!item) {
		return {
			title: "Design Not Found - Cave Designs",
		};
	}

	return {
		title: `${item.title} by ${item.creator.name} - Cave Designs`,
		description: item.description,
		openGraph: {
			title: item.title,
			description: item.description,
			videos: [
				{
					url: item.media.full,
				},
			],
		},
	};
}

export default async function DesignDetailPage({ params }: PageProps) {
	const { id } = await params;
	const item = getGalleryItem(id);

	if (!item) {
		notFound();
	}

	const { prevItem, nextItem } = getAdjacentGalleryItems(id);

	return (
		<div className="w-full min-h-full flex flex-col lg:flex-row border-t border-b border-border bg-background">
			<Container className="border-l border-r border-border flex flex-col lg:flex-row p-0">
				{/* Left / Center Video Stage: Full screen centered */}
				<main className="flex-1 min-h-[50vh] lg:min-h-0 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12 relative">
					{/* Floating back button on mobile/desktop screen corner */}
					<Link
						href="/"
						className="absolute top-4 left-4 z-20 flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-sm text-neutral-600 hover:text-foreground transition-all hover:scale-105"
					>
						<svg
							className="size-3.5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path d="M19 12H5M12 19l-7-7 7-7" />
						</svg>
						<span>Back</span>
					</Link>

					{/* Shared Element Transition wrapper for the video */}
					<ViewTransition
						name={`design-video-${item.id}`}
						share="morph"
						default="none"
					>
						<div className="relative max-h-[82vh] max-w-full rounded-2xl overflow-hidden border border-border flex items-center justify-center group">
							<video
								src={item.media.full}
								autoPlay
								muted
								loop
								playsInline
								preload="auto"
								className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain block"
							/>
						</div>
					</ViewTransition>
				</main>

				{/* Right Sidebar: Metadata Panel */}
				<aside className="w-full lg:w-[380px] xl:w-[300px] 2xl:w-[460px] shrink-0 border-t lg:border-t-0 lg:border-l border-border bg-background flex flex-col justify-between p-6 sm:p-8 overflow-y-hidded max-h-none lg:max-h-[calc(100vh-3rem)]">
					<div className="space-y-6">
						{/* Top Header info */}
						<div className="flex items-center justify-between gap-3">
							<span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md border border-border">
								{item.category}
							</span>
							<span className="text-xs text-neutral-400 font-mono">
								#{item.id}
							</span>
						</div>

						{/* Title & Description */}
						<div>
							<h1 className="xl:text-[16px] font-bold tracking-tight text-foreground">
								{item.title}
							</h1>
							<p className="mt-2.5 xl:text-[12px] leading-relaxed text-neutral-600">
								{item.description}
							</p>
						</div>

						{/* Tags */}
						{item.tags && item.tags.length > 0 && (
							<div>
								<div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
									Tags
								</div>
								<div className="flex flex-wrap gap-1.5">
									{item.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 border border-border font-medium"
										>
											#{tag}
										</span>
									))}
								</div>
							</div>
						)}

						<hr className="border-border" />

						{/* Creator Section */}
						<div className="space-y-2.5">
							<div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
								Creator
							</div>
							<div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-neutral-50/70">
								<div className="flex items-center gap-3 min-w-0">
									{item.creator.avatar && (
										<Image
											src={item.creator.avatar}
											alt={item.creator.name}
											width={40}
											height={40}
											unoptimized
											className="size-10 rounded-full object-cover border border-border shrink-0"
										/>
									)}
									<div className="min-w-0">
										<div className="text-sm font-semibold text-foreground truncate">
											{item.creator.name.trim()}
										</div>
										{item.creator.username && (
											<div className="text-xs text-neutral-500 truncate">
												{item.creator.username}
											</div>
										)}
									</div>
								</div>

								{item.creator.link && (
									<a
										href={item.creator.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs font-medium px-3 py-1.5 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity shrink-0 ml-2"
									>
										Profile ↗
									</a>
								)}
							</div>
						</div>

						{/* Source Section */}
						<div className="space-y-2.5">
							<div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
								Source
							</div>
							<div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-neutral-50/70">
								<div className="flex items-center gap-3 min-w-0">
									<div className="size-9 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
										{item.source.platform.toUpperCase() === "X" ? (
											<svg className="size-4 fill-current" viewBox="0 0 24 24">
												<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
											</svg>
										) : (
											<span className="font-bold text-xs">
												{item.source.platform.slice(0, 2)}
											</span>
										)}
									</div>
									<div className="min-w-0">
										<div className="text-sm font-semibold text-foreground truncate">
											{item.source.platform}
										</div>
										<div className="text-xs text-neutral-500 truncate">
											Original Post
										</div>
									</div>
								</div>

								{item.source.link && (
									<a
										href={item.source.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs font-medium px-3 py-1.5 rounded-lg border border-border hover:bg-neutral-100 transition-colors flex items-center gap-1 shrink-0 ml-2"
									>
										<span>View</span>
										<svg
											className="size-3 text-neutral-500"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
											<polyline points="15 3 21 3 21 9" />
											<line x1="10" y1="14" x2="21" y2="3" />
										</svg>
									</a>
								)}
							</div>
						</div>
					</div>

					{/* Bottom Interactive Actions (Share link, next/prev design) */}
					<DesignDetailActions
						designId={item.id}
						prevId={prevItem?.id}
						nextId={nextItem?.id}
					/>
				</aside>
			</Container>
		</div>
	);
}
