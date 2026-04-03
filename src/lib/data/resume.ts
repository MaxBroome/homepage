import { CodeIcon, Github, Globe, HomeIcon, Youtube, Mail, MapPin, Calendar, Server } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import AquinasImg from '$lib/imgs/Aquinas.png';
import GarminImg from '$lib/imgs/Garmin.webp';
import UNKImg from '$lib/imgs/UNK.png';

import ScoreScrapeImg from '$lib/imgs/ScoreScrape.png';
import PromptyImg from '$lib/imgs/Prompty.png';
import SaintoftheDayImg from '$lib/imgs/SaintOfTheDay.png';

import RackImg from '$lib/imgs/RackImg.png';
import RackDiagram from '$lib/imgs/RackDiagram.png';


export const DATA = {
	name: 'Broomfield Max',
	initials: 'MB',
	url: 'https://github.com/MaxBroome',
	img: 'https://avatars.githubusercontent.com/u/56701581',
	location: 'Overland Park, KS',
	locationLink: 'https://www.google.com/maps/place/Overland+Park,+KS',
	birthday: new Date('2006-05-16T06:13:00-05:00'),
	description:
		'Aspiring Network Engineer. I love building things and helping people. Currently looking for work.',
	icons: {
		location: MapPin,
		age: Calendar
	},
	summary:
		'I wear a lot of hats. Everything from code, to hardware, to a mixture of both at times.  I like to solve difficult problems; as well as optimize and make systems more efficient. I\'m currently learning by building a real-time live scoreboard data solution for broadcasts called [ScoreScrape](#projects).',
	avatarUrl: 'https://avatars.githubusercontent.com/u/56701581',
	skills: [
		'DNS',
		'STP',
		'OSPF',
		'BGP',
		'Wireless',
		'Routing',
		'IPv4/IPv6',
		'VLANs',
		'Active Directory',
		'WireGaurd',
		'Linux',
		'Proxmox',
		'Git',
		'CI/CD',
		'Ansible',
		'Python',
		'Svelte',
		'Go',
		'Postgres',
		'Docker',
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		// { href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#projects', icon: CodeIcon, label: 'Projects' },
		{ href: '#homelab', icon: Server, label: 'Homelab' },
		{ href: '/contact', icon: Mail, label: 'Contact' }
	],
	contact: {
		email: 'max@broomfeldhomelab.net',
		tel: 'null',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/MaxBroome',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/max-broomfield',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
		}
	},
	work: [
		{
			company: 'Saint Thomas Aquinas High School',
			href: 'https://stasaints.net',
			badges: [],
			location: 'Overland Park, KS',
			title: 'Systems Infrastructure Engineer',
			logoUrl: AquinasImg,
			start: 'May 2022',
			end: 'August 2025',
			positions: [
				{
					title: 'Systems Infrastructure Engineer',
					start: 'May 2024',
					end: 'August 2025',
					description:
						'Led infrastructure modernization initiatives including network architecture redesign, server virtualization, and disaster recovery. Managed enterprise systems including Active Directory, virtulization clusters, network and security infrastructure. Used technologies such as DNS, STP, SIP, and 802.1x in various projects.'
				},
				{
					title: 'Information Technology Staff',
					start: 'May 2022',
					end: 'May 2024',
					description:
						'Installed wireless access points, switches, and ran over 10,000ft of CAT6 and fiber cabling to expand network capacity. Upgraded print server infrastructure and deployed automated printer provisioning via group policies. Built and maintained Mac and Windows computer labs, installed classroom A/V systems, and created Windows provisioning packages to streamline new machine deployments.'
				}
			]
		},
		{
			company: 'Garmin International',
			badges: [],
			href: 'https://garmin.com',
			location: 'Olathe, KS',
			title: 'Software Engineering Intern',
			logoUrl: GarminImg,
			start: 'January 2025',
			end: 'May 2025',
			description:
				'Contributed to Garmin\'s Connect IQ Apps team by improving, debugging, and porting applications in Monkey C, as well as delivering low-level performance improvements impacting millions of users. Collaborated within an enterprise engineering workflow using Git, Jira, and Confluence while actively participating in sprints, team meetings and issue triages.'
		}
	],
	education: [
		{
			school: 'University of Nebraska at Kearney',
			href: 'https://www.unk.edu',
			degree: 'Bachelor of Science in IT and Networking',
			logoUrl: UNKImg,
			start: '2025',
			end: '2029'
		}
	],
	projects: [
		{
			title: 'ScoreScrape',
			href: 'https://scorescrape.io/?utm_source=broomfieldhomelab.net',
			dates: 'Feb 2023 - Present',
			active: true,
			description:
				'Developed a easy-to-use product for broadcasters to get live score data into their broadcasts straight from the scoreboard.',
			technologies: [
				'MQTT',
				'AWS',
				'Go',
				'PostgreSQL',
				'Stripe',
				'Docker',
				'ESP-IDF',
				'Svelte',
				'TypeScript',
				'Serial Data'
			],
			links: [
				{
					type: 'Website',
					href: 'https://scorescrape.io/?utm_source=broomfieldhomelab.net',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				},
				{
					type: 'Repo',
					href: 'https://github.com/ScoreScrape',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: ScoreScrapeImg,
			video: ''
		},
		{
			title: 'UniFi Auto-Inform',
			href: 'https://github.com/MaxBroome/UniFiAuto-Inform',
			dates: 'May 2023',
			active: true,
			description: 'A simple automated script to help find UniFi devices on a local network and adopt them via SSH to a hosted controller.',
			technologies: [
				'Python',
				'PyQt5',
				'Nmap',
				'Paramiko'
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/MaxBroome/UniFiAuto-Inform',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: 'https://raw.githubusercontent.com/MaxBroome/UniFiAuto-Inform/main/tool.gif',
			video: ''
		},
		{
			title: 'Prompty',
			href: 'https://github.com/MaxBroome/prompty',
			dates: 'January 2024 - April 2024',
			active: true,
			description:
				'Built a teleprompter application that uses Python and the Google Documents API to automatically import scripts from Google Docs and display them in a customizable web interface with speed control, formatting options, and remote control functionality.',
			technologies: [
				'Python',
				'Google Cloud Platform',
				'Google Documents API',
				'JavaScript',
				'HTML/CSS'
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/MaxBroome/prompty',
					icon: Github
				}
			],
			image: PromptyImg,
			video: ''
		},
		{
			title: 'Saint of the Day',
			href: 'https://saintoftheday.stasaints.net/',
			dates: 'April - May 2025',
			active: true,
			description:
				'Used Python to web scrape an online database of saints, summaries, and images. Then used the Gemini API to shorten the summaries to <200 characters for easier viewing on hallway digital signage screens, that refresh daily.',
			technologies: [
				'Svelte',
				'Python',
				'Gemini',
				'Beautiful Soup',
				'TypeScript',
				'Cloudflare Pages'
			],
			links: [
				{
					type: 'Website',
					href: 'https://saintoftheday.stasaints.net',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://github.com/MaxBroome/STA-SaintOfTheDay',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: SaintoftheDayImg,
			video: ''
		}
	],
	homelab: {
		title: 'My Homelab Setup',
		description: 'An overview of my homelab. Drag the slider to compare the rack schematic with the actual setup.',
		schematicImage: RackDiagram,
		photoImage: RackImg,
		specs: [
			{
				label: 'Hardware',
				value: '56 Cores, 276GB RAM total'
			},
			{
				label: 'Virtualization',
				value: '5 Proxmox nodes'
			},
			{
				label: 'Storage',
				value: '18TB ZFS Array'
			},
			{
				label: 'Networking',
				value: 'Cisco and Juniper'
			}
		],
		details: 'My homelab is a space where I experiment with various technologies, services, and things i\'m imtrested in. I\'m able to replicate real-world enviroments; and learn new things in the process.'
	},
	funstuff: [
		{
			title: 'Hack Western 5',
			dates: 'November 23rd - 25th, 2018',
			location: 'London, Ontario',
			description:
				'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'Hack The North',
			dates: 'September 14th - 16th, 2018',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mobile application which delivers university campus wide events in real time to all students.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'FirstNet Public Safety Hackathon',
			dates: 'March 23rd - 24th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
			// icon: "public",
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
			links: []
		},
		{
			title: 'DeveloperWeek Hackathon',
			dates: 'February 3rd - 4th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
			links: [
				{
					title: 'Github',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/cryptotrends/cryptotrends'
				}
			]
		},
		{
			title: 'HackDavis',
			dates: 'January 20th - 21st, 2018',
			location: 'Davis, California',
			description:
				'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
			win: 'Best Data Hack',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/my6footprint'
				},
				{
					title: 'ML',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/my6footprint-machine-learning'
				},
				{
					title: 'iOS',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/CarbonWallet'
				},
				{
					title: 'Server',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/wallet6-server'
				}
			]
		},
		{
			title: 'ETH Waterloo',
			dates: 'October 13th - 15th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
			links: [
				{
					title: 'Organization',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/ethdocnet'
				}
			]
		},
		{
			title: 'Hack The North',
			dates: 'September 15th - 17th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a virtual reality application allowing users to see themselves in third person.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Streamer Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/justinmichaud/htn2017'
				},
				{
					title: 'Client Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/RTSPClient'
				}
			]
		},
		{
			title: 'Hack The 6ix',
			dates: 'August 26th - 27th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/ShareShip/ShareShip'
				},
				{
					title: 'Site',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://share-ship.herokuapp.com/'
				}
			]
		},
		{
			title: 'Stupid Hack Toronto',
			dates: 'July 23rd, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/nsagirlfriend/nsagirlfriend'
				}
			]
		},
		{
			title: 'Global AI Hackathon - Toronto',
			dates: 'June 23rd - 25th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Article',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/'
				},
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/TinySamosas/'
				}
			]
		},
		{
			title: 'McGill AI for Social Innovation Hackathon',
			dates: 'June 17th - 18th, 2017',
			location: 'Montreal, Quebec',
			description: 'Developed realtime facial microexpression analyzer using AI',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
			links: []
		},
		{
			title: 'Open Source Circular Economy Days Hackathon',
			dates: 'June 10th, 2017',
			location: 'Toronto, Ontario',
			description:
				"Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/genecis'
				}
			]
		},
		{
			title: "Make School's Student App Competition 2017",
			dates: 'May 19th - 21st, 2017',
			location: 'International',
			description: 'Improved PocketDoc and submitted to online competition',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
			win: 'Top 10 Finalist | Honourable Mention',
			links: [
				{
					title: 'Medium Article',
					icon: Github,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a'
				},
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: Youtube,
					// icon: <Icons.youtube className="h-4 w-4" />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: Github,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		},
		{
			title: 'HackMining',
			dates: 'May 12th - 14th, 2017',
			location: 'Toronto, Ontario',
			description: 'Developed neural network to optimize a mining process',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
			links: []
		},
		{
			title: 'Waterloo Equithon',
			dates: 'May 5th - 7th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
			links: [
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: Youtube,
					// icon: <Icons.youtube className="h-4 w-4" />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		},
		{
			title: 'SpaceApps Waterloo',
			dates: 'April 28th - 30th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/earthwatch'
				}
			]
		},
		{
			title: 'MHacks 9',
			dates: 'March 24th - 26th, 2017',
			location: 'Ann Arbor, Michigan',
			description:
				'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/threejs-planes'
				}
			]
		},
		{
			title: 'StartHacks I',
			dates: 'March 4th - 5th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
			win: '1st Place Winner',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/mattBlackDesign/recipic-ionic'
				},
				{
					title: 'Source (Server)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/mattBlackDesign/recipic-rails'
				}
			]
		},
		{
			title: 'QHacks II',
			dates: 'February 3rd - 5th, 2017',
			location: 'Kingston, Ontario',
			description: 'Developed a mobile game which enables city-wide manhunt with random lobbies',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/human-huntr-react-native'
				},
				{
					title: 'Source (API)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/mattBlackDesign/human-huntr-rails'
				}
			]
		},
		{
			title: 'Terrible Hacks V',
			dates: 'November 26th, 2016',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mock of Windows 11 with interesting notifications and functionality',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11'
				}
			]
		},
		{
			title: 'Portal Hackathon',
			dates: 'October 29, 2016',
			location: 'Kingston, Ontario',
			description:
				"Developed an internal widget for uploading assignments using Waterloo's portal app",
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/UWPortalSDK/crowmark'
				}
			]
		}
	]
};