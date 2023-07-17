<script>
	import Calender from '../assets/calender/calender.svelte';
	import Article from '../assets/carousel/article.svelte';
	import Carousel from '../assets/carousel/carousel.svelte';
	import DebianImage from '../assets/svg/emerald-fg.svelte';
	import Heartbeat from '../assets/svg/heartbeat.svelte';
	import LifeRing from '../assets/svg/life-ring.svelte';
	import List from '../assets/svg/list.svelte';
	import Security from '../assets/svg/security.svelte';
	import Trophy from '../assets/svg/trophy.svelte';
	import UserPlus from '../assets/svg/user-plus.svelte';
	import Users from '../assets/svg/users.svelte';
	import Items from './Items.svelte';
</script>

<div class="flex flex-col">
	<div class="flex flex-col w-full bg-debian-background h-28">
		<a href="/" class="flex items-center justify-center w-full bg-center bg-no-repeat h-28">
			<DebianImage />
		</a>
	</div>
	<div
		class="grid items-center justify-between grid-cols-4 gap-3 text-center text-white sm:pt-2 md:flex md:w-full md:flex-row bg-debian-background md:px-4 md:justify-evenly"
	>
		<a
			href="/"
			id="Debian"
			class="relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>Debian</a
		>
		<a
			href="/"
			id="Blog"
			class="relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>Blog</a
		>
		<div
			class="flex justify-around order-5 col-span-4 gap-1 px-4 mx-4 my-2 text-white bg-gray-400 outline-none md:order-none bg-debian-background placeholder:text-gray-200 bg-opacity-60 rounded-3xl"
		>
			<input
				placeholder="Search"
				type="text"
				class="w-full py-2 bg-transparent outline-none md:my-1"
			/>
			<a href="/" id="search" class="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-search"
					><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
				>
			</a>
		</div>
		<a
			href="/"
			id="micronews"
			class="relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>Micronews</a
		>
		<a
			href="/"
			id="planet"
			class="relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>Planet</a
		>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="flex flex-col">
			<p class="text-center uppercase tracking-[6px] text-2xl font-semibold my-6">
				Die Gemeinschaft
			</p>
			<p class="text-center mb-2">Debian ist eine Gemeinschaft von Menschen</p>
			<div class="flex mx-auto">
				<Carousel>
					<Article
						title="DebConf22-Gruppenfoto"
						src="/debconf22_group_photo.jpg"
						alt="DC22-Gruppenfoto"
						position="bottom-right"
					/>
					<Article
						src="/mini-dc23-hamburg.jpg"
						alt="Group photo of the Debian Reunion Hamburg 2023"
						title="Debian Reunion Hamburg 2023"
					/>
					<Article
						title="MiniDebConf Brasília 2023"
						src="/mini-dc23-brasilia.jpg"
						alt="Group photo of the MiniDebConf Brasília 2023"
					/>
					<Article
						title="Bildschirmfoto des Calamares-Installationsprogramms"
						src="/calamares-bookworm.png"
						alt="Bildschirmfoto vom Calamares-Installationsprogramm"
					/>
					<Article
						title="Debian ist wie ein Schweizer Taschenmesser"
						src="/debian-swiss-knife-hands-1024x576.jpg"
						alt="Debian ist wie ein Schweizer Taschenmesser"
					/>
					<Article
						title="Menschen haben Spaß mit Debian"
						src="/debian-funny-people-1024x576.jpg"
						alt="Debian Leute haben wirklich Spaß auf der Debconf18 in Hsinchu"
					/>

					<!-- <Article title="" src="" alt="" /> -->
				</Carousel>
			</div>
			<div class="px-4">
				<Items title="Menschen" description="Wer wir sind und was wir tun"><Users /></Items>
				<Items title="Unsere Philosophie" description="Warum und wie wir es tun"><UserPlus /></Items
				>
				<Items
					title="Mach mit, du kannst etwas beitragen!"
					description="Wie du ein Teil von Debian werden kannst."><Heartbeat /></Items
				>
				<Items title="Mehr ..." description="Weitere Informationen über die Debian-Gemeinschaft"
					><List /></Items
				>
			</div>
		</div>
		<div class="flex flex-col px-4">
			<p class="text-center uppercase tracking-[6px] text-2xl font-semibold my-6">
				Das Betriebssystem
			</p>
			<p class="text-center">Debian ist ein völlig freies Betriebssystem</p>
			<div class="relative flex">
				<img class="my-4" src="/debian-logo-1024x576.png" alt="Debian-Logo" />
				<button
					class="absolute bottom-4 bg-[#090909C0] text-white p-2 rounded-xl left-1/2 -translate-x-1/2 text-2xl"
					>Herunterladen</button
				>
			</div>
			<Items title="Warum Debian?" description="Was macht Debian so besonders?"><Trophy /></Items>
			<Items title="Unterstützung der Benutzer" description="Hilfe und Dokumentation anfordern"
				><LifeRing /></Items
			>
			<Items
				title={'Sicherheits-aktualisierungen'}
				description="Debian Sicherheitsankündigungen (DSA)"><Security /></Items
			>
			<Items title="Mehr..." description="Weitere Links zum Herunterladen und zur Software"
				><List /></Items
			>
		</div>
	</div>
	<div class="flex flex-col">
		<p class="text-center uppercase tracking-[6px] text-2xl font-semibold mt-6 mb-3 px-4">
			PROJEKT-NACHRICHTEN
		</p>
		<p class="text-center">Neuigkeiten und Ankündigungen über Debian</p>

		<div class="grid-cols-1 gap-8 px-8 my-6 md:grid-cols-2 md:grid lg:grid-cols-3 lg:mt-4">
			<div
				class="grid items-center grid-cols-3 md:grid-cols-4 gap-8 mt-4 text-sm text-ellipsis lg:text-justify"
			>
				<Calender year={2023} month="Juni" date={10} />
				<a
					href="/"
					class="col-span-2 md:col-span-3 w-fit font-medium relative before:bg-black before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
					>Debian 12 Bookworm veröffentlicht</a
				>
			</div>
			<div
				class="grid items-center grid-cols-3 md:grid-cols-4 gap-8 mt-4 text-sm text-ellipsis lg:text-justify"
			>
				<Calender year={2023} month="April" date={29} />
				<a
					href="/"
					class="col-span-2 md:col-span-3 w-fit font-medium relative before:bg-black before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
					>Debian 11 aktualisiert: 11.7 veröffentlicht</a
				>
			</div>
			<div
				class="grid items-center grid-cols-3 md:grid-cols-4 gap-8 mt-4 text-sm text-ellipsis lg:text-justify"
			>
				<Calender year={2022} month="September" date={10} />
				<a
					href="/"
					class="col-span-2 md:col-span-3 w-fit font-medium relative before:bg-black before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
					>Debian 10 aktualisiert: 10.13 veröffentlicht</a
				>
			</div>
			<div
				class="grid items-center grid-cols-3 md:grid-cols-4 gap-8 mt-4 text-sm text-ellipsis lg:text-justify"
			>
				<Calender year={2022} month="August" date={7} />
				<a
					href="/"
					class="col-span-2 md:col-span-3 w-fit font-medium relative before:bg-black before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
					>Besitz der Domain debian.community</a
				>
			</div>
			<div class="grid items-center grid-cols-3 md:grid-cols-4 gap-8 mt-4 text-sm lg:text-justify">
				<Calender year={2022} month="Juli" date={24} />
				<a
					href="/"
					class="col-span-2 md:col-span-3 w-fit font-medium relative before:bg-black before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
				>
					DebConf22 schließt in Prizren, Datum der DebConf23 bekanntgegeben
				</a>
			</div>
		</div>
		<div class="flex items-center mb-8 justify-evenly">
			<a
				href="/"
				class="text-xl relative before:bg-black before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex font-semibold"
				>Alle Neuigkeiten</a
			>
			<a
				class="bg-orange-400 p-1 hover:bg-transparent relative before:bg-black before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex rounded-md"
				href="/">RSS</a
			>
		</div>
	</div>

	<div class="px-4 pt-4 text-white bg-debian-background">
		<p>Diese Seite gibt es auch in den folgenden Sprachen:</p>
		<div class="flex flex-wrap items-center grid-cols-1 gap-2 my-4 md:grid md:grid-cols-4">
			<a href="/" class="hover:no-underline underline w-max">بية (Arabiya)</a>
			<a href="/" class="hover:no-underline underline w-max">Български (Bəlgarski)</a>
			<a href="/" class="hover:no-underline underline w-max">català</a>
			<a href="/" class="hover:no-underline underline w-max">dansk</a>
			<a href="/" class="hover:no-underline underline w-max">Ελληνικά (Ellinika)</a>
			<a href="/" class="hover:no-underline underline w-max">English</a>
			<a href="/" class="hover:no-underline underline w-max">español</a>
			<a href="/" class="hover:no-underline underline w-max">فارسی (Farsi)</a>
			<a href="/" class="hover:no-underline underline w-max">français</a>
			<a href="/" class="hover:no-underline underline w-max">Galego</a>
			<a href="/" class="hover:no-underline underline w-max">Հայերեն (hayeren)</a>
			<a href="/" class="hover:no-underline underline w-max">Indonesia</a>
			<a href="/" class="hover:no-underline underline w-max">Italiano</a>
			<a href="/" class="hover:no-underline underline w-max">한국어 (Korean)</a>
			<a href="/" class="hover:no-underline underline w-max">magyar</a>
			<a href="/" class="hover:no-underline underline w-max">Nederlands</a>
			<a href="/" class="hover:no-underline underline w-max">norsk (bokmål)</a>
			<a href="/" class="hover:no-underline underline w-max">polski</a>
			<a href="/" class="hover:no-underline underline w-max">Português</a>
			<a href="/" class="hover:no-underline underline w-max">Русский (Russkij)</a>
			<a href="/" class="hover:no-underline underline w-max">suomi</a>
			<a href="/" class="hover:no-underline underline w-max">svenska</a>
			<a href="/" class="hover:no-underline underline w-max">Tiếng</a>
			<a href="/" class="hover:no-underline underline w-max">Việt</a>
			<a href="/" class="hover:no-underline underline w-max">українська (ukrajins'ka)</a>
			<a href="/" class="hover:no-underline underline w-max">中文(简)</a>
			<a href="/" class="hover:no-underline underline w-max">中文(HK)</a>
			<a href="/" class="hover:no-underline underline w-max">中文(繁)</a>
		</div>
	</div>
	<div class="p-2 pb-4 text-white bg-debian-background">
		Schauen Sie auf unsere <a class="underline" href="/"> Kontaktseite</a>, um mit uns in Verbindung
		zu treten. Der Quelltext der Website ist öffentlich
		<a class="underline" href="/">verfügbar</a>.<br />
		Zuletzt geändert: Sonntag den 24. Jul 2022 um 21:14:58 Uhr UTC <br />
		Zuletzt gebaut: Samstag den 1. Jul 2023 um 04:13:29 Uhr UTC <br />
		Copyright © 1997-2023 <a class="underline" href="/">SPI</a> und andere; weiteres in den
		<a class="underline" href="/">Lizenzbestimmungen</a>. <br />
		Debian ist ein eingetragenes <a class="underline" href="/">Warenzeichen</a> der Software in the Public
		Interest, Inc.
	</div>
</div>
