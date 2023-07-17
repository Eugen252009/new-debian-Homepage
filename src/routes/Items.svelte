<script>
	export let title = '';
	export let description = '';
</script>

<div
	class="grid items-center grid-cols-4 gap-4 p-4 m-4 my-1 break-words duration-200 rounded-md justify-evenly hover:bg-gray-200 group"
>
	<div class="items-center mx-8 my-2 hidden md:flex">
		<slot />
	</div>
	<div class="flex flex-col col-span-3 justify-evenly">
		<!-- <div class="relative"> -->
		<p
			class="text-xl w-fit relative font-semibold before:bg-black before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:scale-0 before:group-hover:scale-100 before:duration-200 before:flex"
		>
			{title}
		</p>
		<!-- </div> -->
		<p class="text-sm text-gray-700">{description}</p>
	</div>
</div>
