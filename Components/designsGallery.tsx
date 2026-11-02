import React, { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";

import { galleryConfig } from "@/config/gallery";

const DesignsGallery = () => {
	const videosList = [...galleryConfig].reverse();

	return (
		<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-5 2xl:gap-3 xl:gap-2">
			{videosList.map((item) => (
				<div
					key={item.id}
					className="2xl:mb-3 xl:mb-2 break-inside-avoid overflow-hidden rounded-xl border border-border"
				>
					<Link
						href={`/design/${item.id}`}
						className="block group cursor-pointer focus:outline-none"
					>
						<ViewTransition
							name={`design-video-${item.id}`}
							share="morph"
							default="none"
						>
							<div className="relative overflow-hidden rounded-xl bg-neutral-100">
								<video
									src={item.media.preview}
									muted
									loop
									autoPlay
									playsInline
									preload="metadata"
									className="block w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
								/>

								{/* Creator badge on hover/display */}
								{item.creator.avatar && (
									<div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full py-1 px-2 text-white transition-all">
										<Image
											src={item.creator.avatar}
											alt={item.creator.name}
											width={20}
											height={20}
											unoptimized
											className="size-4 rounded-full object-cover shrink-0"
										/>

									</div>
								)}


							</div>
						</ViewTransition>
					</Link>
				</div>
			))}
		</div>
	);
};

export default DesignsGallery;

