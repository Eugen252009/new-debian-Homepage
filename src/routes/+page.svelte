<script>
	import Calender from '../assets/calender/calender.svelte';
	import DebianImage from '../assets/svg/emerald-fg.svelte';
	import Heartbeat from '../assets/svg/heartbeat.svelte';
	import LifeRing from '../assets/svg/life-ring.svelte';
	import List from '../assets/svg/list.svelte';
	import Security from '../assets/svg/security.svelte';
	import Trophy from '../assets/svg/trophy.svelte';
	import UserPlus from '../assets/svg/user-plus.svelte';
	import Users from '../assets/svg/users.svelte';
	import Items from './Items.svelte';
	//
	let search = '';
	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }} event
	 */
	function clicked(event) {
		console.log(event?.target?.id ?? '');
		console.log(event?.target?.value ?? '');
	}
</script>

<div />

<div class="flex flex-col">
	<div class="flex flex-col w-full bg-debian-background h-28">
		<div class="flex items-center justify-center w-full bg-center bg-no-repeat h-28">
			<DebianImage />
		</div>
	</div>
	<div class="flex items-center justify-between w-full px-12 text-white bg-debian-background">
		<button
			id="Debian"
			on:click={clicked}
			class="relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>Debian</button
		>
		<button
			id="Blog"
			on:click={clicked}
			class="relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>Blog</button
		>
		<div
			class="relative bg-debian-background flex px-4 text-white bg-gray-400 outline-none placeholder:text-gray-200 bg-opacity-60 rounded-3xl my-2 gap-1"
		>
			<input
				bind:value={search}
				placeholder="Search"
				type="text"
				class="bg-transparent outline-none py-2 my-1"
			/>
			<button id="search" on:click={clicked} class="">
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
			</button>
		</div>
		<button
			id="micronews"
			on:click={clicked}
			class="relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>Micronews</button
		>
		<button
			id="planet"
			on:click={clicked}
			class="relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>Planet</button
		>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="">
			<p class="text-center uppercase tracking-[6px] text-2xl font-semibold my-6">
				Die Gemeinschaft
			</p>
			<p class="text-center">Debian ist eine Gemeinschaft von Menschen</p>
			<div>
				<img class="p-4" src="/calamares-bookworm.png" alt="" />
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
		<div class="">
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
			<Items title="Sicherheitsaktualisierungen" description="Debian Sicherheitsankündigungen (DSA)"
				><Security /></Items
			>
			<Items title="Mehr..." description="Weitere Links zum Herunterladen und zur Software"
				><List /></Items
			>
		</div>
	</div>
	<div class="flex flex-col">
		<p class="text-center uppercase tracking-[6px] text-2xl font-semibold mt-6 mb-3">
			PROJEKT-NACHRICHTEN
		</p>
		<p class="text-center">Neuigkeiten und Ankündigungen über Debian</p>

		<div class="grid grid-cols-2 gap-4 px-8 my-6">
			<div class="grid items-center grid-cols-3 gap-4">
				<Calender year={2023} month="Juni" date={10} />
				<p class="col-span-2">Debian 12 Bookworm veröffentlicht</p>
			</div>
			<div class="grid items-center grid-cols-3 gap-4">
				<Calender year={2023} month="April" date={29} />
				<p class="col-span-2">Debian 11 aktualisiert: 11.7 veröffentlicht</p>
			</div>
			<div class="grid items-center grid-cols-3 gap-4">
				<Calender year={2022} month="September" date={10} />
				<p class="col-span-2">Debian 10 aktualisiert: 10.13 veröffentlicht</p>
			</div>
			<div class="grid items-center grid-cols-3 gap-4">
				<Calender year={2022} month="August" date={7} />
				<p class="col-span-2">Besitz der Domain debian.community</p>
			</div>
			<div class="grid items-center grid-cols-3 gap-4">
				<Calender year={2022} month="Juli" date={24} />
				<p class="col-span-2">DebConf22 schließt in Prizren, Datum der DebConf23 bekanntgegeben</p>
			</div>
		</div>
		<div class="flex items-center justify-evenly mb-8">
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

	<div class="px-4 bg-debian-background text-white pt-4">
		<p>Diese Seite gibt es auch in den folgenden Sprachen:</p>
		<div class="grid items-center grid-cols-5 gap-4 my-4">
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				بية (Arabiya)
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Български
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				(Bəlgarski)
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				català
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				dansk
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Ελληνικά (Ellinika)
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				English
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				español
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				فارسی (Farsi)
			</p>

			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				français
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Galego
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Հայերեն (hayeren)
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Indonesia
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Italiano
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				한국어 (Korean)
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				magyar
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Nederlands
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				norsk (bokmål)
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				polski
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Português
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Русский (Russkij)
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				suomi
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				svenska
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Tiếng
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				Việt
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				українська (ukrajins'ka)
			</p>

			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				中文(简)
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				中文(HK)
			</p>
			<p
				class=" w-max relative before:bg-white before:absolute before:scale-0 before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:hover:scale-100 before:duration-200 before:flex"
			>
				中文(繁)
			</p>
		</div>
	</div>
	<div class="bg-debian-background text-white p-2">
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
