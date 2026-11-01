import React from "react";
import Image from "next/image";
import { galleryConfig } from "@/config/gallery";

const DesignsGallery = () => {
	return (
		<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-5 gap-3">
			{galleryConfig.map((item) => (
				<div
					key={item.id}
					className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-border "
				>
					<div className="relative overflow-hidden group rounded-xl ">
						<video
							src={item.media.preview}
							muted
							loop
							autoPlay
							playsInline
							preload="metadata"
							className="block w-full h-auto"
						/>

						{/* Creator profile */}
						{item.creator.avatar && (
							<div className="absolute bottom-3 left-3">
								<Image
									src={item.creator.avatar}
									alt={item.creator.name}
									width={24}
									height={24}
									unoptimized
									className="size-5 rounded-full object-cover"
								/>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default DesignsGallery;
