import type { ReactNode } from "react";

export type GalleryItem = {
	id: string;
	title: string;
	description: string;
	category: string;
	tags: string[];

	media: {
		preview: string;
		full: string;
		// poster: string;
	};

	creator: {
		name: string;
		username?: string;
		avatar?: string;
		link?: string;
	};

	source: {
		platform: string;
		link: string;
	};
};

export const galleryConfig: GalleryItem[] = [
	{
		id: "design-001",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/001/preview/AdityaSur11-2116088350071558294-video-360x360.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/001/full/AdityaSur11-2116088350071558294-video-1080x1080.mp4",
			// poster: "https://YOUR-R2-URL/posters/design-001.webp",
		},

		creator: {
			name: "AdityaSur11",
			username: "@AdityaSur11",
			avatar:
				"https://pbs.twimg.com/profile_images/2008066661841248256/XJttc16H_400x400.jpg",
			link: "https://x.com/AdityaSur11",
		},

		source: {
			platform: "X",
			link: "https://x.com/AdityaSur11/status/2116088350071558294",
		},
	},
	{
		id: "design-002",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/002/preview/itsluneri-2116674589719675144-video-480x360.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/002/full/itsluneri-2116674589719675144-video-1280x960.mp4",
			// poster: "https://YOUR-R2-URL/posters/design-001.webp",
		},

		creator: {
			name: " itsluneri",
			username: "@itsluneri",
			avatar:
				"https://pbs.twimg.com/profile_images/2101369391594065920/zUwc8h8M_400x400.jpg",
			link: "https://x.com/itsluneri",
		},

		source: {
			platform: "X",
			link: "https://x.com/itsluneri/status/2116674589719675144",
		},
	},
	{
		id: "design-003",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/003/preview/benjitaylor-2113329116716179759-video-540x540.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/003/full/benjitaylor-2113329116716179759-video-1080x1080.mp4",
		},

		creator: {
			name: " benjitaylor",
			username: "@benjitaylor",
			avatar:
				"https://pbs.twimg.com/profile_images/1485350275372048384/FwGgXuTk_400x400.png",
			link: "https://x.com/benjitaylor",
		},

		source: {
			platform: "X",
			link: "https://x.com/benjitaylor/status/2113329116716179759",
		},
	},
	{
		id: "design-004",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/004/preview/evilrabbit_-2115922658089111996-video-522x356.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/004/full/evilrabbit_-2115922658089111996-video-522x356.mp4",
		},

		creator: {
			name: " evilrabbit_",
			username: "@evilrabbit_",
			avatar:
				"https://pbs.twimg.com/profile_images/1998237655063257088/o5zyt_vG_400x400.jpg",
			link: "https://x.com/evilrabbit_",
		},

		source: {
			platform: "X",
			link: "https://x.com/evilrabbit_/status/2115922658089111996",
		},
	},
	{
		id: "design-005",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/005/preview/evilrabbit_-2116186171424563665-video-540x540.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/005/full/evilrabbit_-2116186171424563665-video-1080x1080.mp4",
		},

		creator: {
			name: " evilrabbit_",
			username: "@evilrabbit_",
			avatar:
				"https://pbs.twimg.com/profile_images/1998237655063257088/o5zyt_vG_400x400.jpg",
			link: "https://x.com/evilrabbit_",
		},

		source: {
			platform: "X",
			link: "https://x.com/evilrabbit_/status/2116186171424563665",
		},
	},
	{
		id: "design-006",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/006/preview/nitishkmrk-2116859073081860392-video-540x540.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/006/full/nitishkmrk-2116859073081860392-video-1080x1080.mp4",
		},

		creator: {
			name: " nitishkmrk",
			username: "@nitishkmrk",
			avatar:
				"https://pbs.twimg.com/profile_images/2114749300446277632/8dBrnhaG_400x400.jpg",
			link: "https://x.com/nitishkmrk",
		},

		source: {
			platform: "X",
			link: "https://x.com/nitishkmrk/status/2116859073081860392",
		},
	},
	{
		id: "design-007",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/007/preview/details_so-2116610024336236879-video-576x360.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/007/full/details_so-2116610024336236879-video-1154x720.mp4",
		},

		creator: {
			name: " details_so",
			username: "@details_so",
			avatar:
				"https://pbs.twimg.com/profile_images/2090140261879779328/xYIgiQ4a_400x400.jpg",
			link: "https://x.com/details_so",
		},

		source: {
			platform: "X",
			link: "https://x.com/details_so/status/2116610024336236879",
		},
	},
	{
		id: "design-008",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/008/preview/basit_designs-2116188547883610418-video-498x360.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/008/full/basit_designs-2116188547883610418-video-1498x1080.mp4",
		},

		creator: {
			name: " basit_designs",
			username: "@basit_designs",
			avatar:
				"https://pbs.twimg.com/profile_images/2035703029631201280/MiiHz_yG_400x400.jpg",
			link: "https://x.com/basit_designs",
		},

		source: {
			platform: "X",
			link: "https://x.com/basit_designs/status/2116188547883610418",
		},
	},
	{
		id: "design-009",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/009/preview/bestsaasdesigns-2116734175646806411-video-480x360.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/009/full/bestsaasdesigns-2116734175646806411-video-960x720.mp4",
		},

		creator: {
			name: "BestSaaSWebDesigns",
			username: "@bestsaasdesigns",
			avatar:
				"https://pbs.twimg.com/profile_images/2084952755605794816/_feGYVbI_400x400.png",
			link: "https://x.com/bestsaasdesigns",
		},

		source: {
			platform: "X",
			link: "http://x.com/bestsaasdesigns/status/2116734175646806411",
		},
	},
	{
		id: "design-010",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/010/preview/nikkbadlani-2116886220383121920-video-482x360.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/010/full/nikkbadlani-2116886220383121920-video-1448x1080.mp4",
		},

		creator: {
			name: "Nikk Badlani",
			username: "@nikkbadlani",
			avatar:
				"https://pbs.twimg.com/profile_images/2112219015749988352/5MLX-ud8_400x400.jpg",
			link: "https://x.com/nikkbadlani",
		},

		source: {
			platform: "X",
			link: "https://x.com/nikkbadlani/status/2116886220383121920",
		},
	},
	{
		id: "design-011",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/011/preview/benchodev-2113744773848682633-video-450x360.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/011/full/benchodev-2113744773848682633-video-900x720.mp4",
		},

		creator: {
			name: "Bencho",
			username: "@benchodev",
			avatar:
				"https://pbs.twimg.com/profile_images/2104302427960741888/T3q2Cr_E_400x400.jpg",
			link: "https://x.com/benchodev",
		},

		source: {
			platform: "X",
			link: "https://x.com/benchodev/status/2113744773848682633",
		},
	},
	{
		id: "design-012",
		title: "Creative Motion Design",
		description: "An experimental motion design project.",
		category: "Motion Design",
		tags: ["Motion", "3D", "Animation"],

		media: {
			preview:
				"https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/012/preview/bestdesignsonx-2116923222008717514-video-576x360.mp4",
			full: "https://pub-de9f658926a44ddea5def1ffec9091c6.r2.dev/videos/012/full/bestdesignsonx-2116923222008717514-video-1728x1080.mp4",
		},

		creator: {
			name: "Best Designs On X",
			username: "@bestdesignsonx",
			avatar:
				"https://pbs.twimg.com/profile_images/1934875138325114880/nQu2Kv5H_400x400.jpg",
			link: "https://x.com/bestdesignsonx",
		},

		source: {
			platform: "X",
			link: "https://x.com/bestdesignsonx/status/2116923222008717514",
		},
	},
];
