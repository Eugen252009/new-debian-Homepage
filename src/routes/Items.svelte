<script>
	export let title = '';
	export let description = '';
	export let href = '/';
</script>

<a
	{href}
	class="grid items-center gap-4 lg:w-full grid-cols-4 p-4 my-1 max-w-[20ch]:break-all duration-200 rounded-md justify-evenly hover:bg-gray-200 group md:items-center overflow-ellipsis"
>
	<div class="items-center my-2 lg:col-span-1 md:ml-auto xs:flex md:w-12 md:h-12">
		<slot />
	</div>
	<div class="flex flex-col md:mr-auto col-span-2 justify-evenly w-fit md:w-auto">
		<!-- <div class="w-fit"> -->
		<p
			class="text-xl w-fit relative font-semibold before:bg-black before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:origin-left before:scale-0 before:group-hover:scale-100 before:duration-200 before:flex"
		>
			{title}
		</p>
		<!-- </div> -->
		<p class="text-sm text-gray-700 md:w-auto mt-1">{description}</p>
	</div>
</a>
