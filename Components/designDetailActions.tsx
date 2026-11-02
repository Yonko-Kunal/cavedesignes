"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface DesignDetailActionsProps {
	designId: string;
	prevId?: string;
	nextId?: string;
}

export default function DesignDetailActions({
	designId,
	prevId,
	nextId,
}: DesignDetailActionsProps) {
	const router = useRouter();
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				router.push("/");
			} else if (e.key === "ArrowLeft" && prevId) {
				router.push(`/design/${prevId}`);
			} else if (e.key === "ArrowRight" && nextId) {
				router.push(`/design/${nextId}`);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [router, prevId, nextId]);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy link: ", err);
		}
	};

	return (
		<div className="flex items-center justify-between gap-3 pt-6 border-t border-border mt-auto">
			{/* Copy link button */}
			<button
				onClick={handleCopy}
				type="button"
				className="flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-lg border border-border hover:bg-neutral-100 transition-colors cursor-pointer"
			>
				{copied ? (
					<>
						<svg
							className="size-3.5 text-emerald-600"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
						>
							<polyline points="20 6 9 17 4 12" />
						</svg>
						<span className="text-emerald-600 font-medium">Link Copied!</span>
					</>
				) : (
					<>
						<svg
							className="size-3.5 text-neutral-500"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
							<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
						</svg>
						<span>Share Link</span>
					</>
				)}
			</button>

			{/* Prev / Next navigation */}
			<div className="flex items-center gap-1.5">
				{prevId ? (
					<Link
						href={`/design/${prevId}`}
						title="Previous design (Left Arrow)"
						className="p-2 rounded-lg border border-border text-neutral-600 hover:text-foreground hover:bg-neutral-100 transition-colors"
					>
						<svg
							className="size-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<polyline points="15 18 9 12 15 6" />
						</svg>
					</Link>
				) : (
					<span className="p-2 rounded-lg border border-border text-neutral-300 cursor-not-allowed">
						<svg
							className="size-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<polyline points="15 18 9 12 15 6" />
						</svg>
					</span>
				)}

				{nextId ? (
					<Link
						href={`/design/${nextId}`}
						title="Next design (Right Arrow)"
						className="p-2 rounded-lg border border-border text-neutral-600 hover:text-foreground hover:bg-neutral-100 transition-colors"
					>
						<svg
							className="size-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<polyline points="9 18 15 12 9 6" />
						</svg>
					</Link>
				) : (
					<span className="p-2 rounded-lg border border-border text-neutral-300 cursor-not-allowed">
						<svg
							className="size-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<polyline points="9 18 15 12 9 6" />
						</svg>
					</span>
				)}
			</div>
		</div>
	);
}
