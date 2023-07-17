<script>
	export let year = 2023;
	export let month = 'Juni';
	export let date = 12;
</script>

<div class="flex flex-col w-full bg-gray-100 p-0.5">
	<div class="px-8 w-full text-center bg-gradient-to-br from-[#b60109] to-[#a00] text-white">
		{month}
	</div>
	<div class="bg-gradient-to-br from-[#fff] to-[#eee]">
		<div class="px-8 w-full text-xl font-semibold text-center">{date}</div>
		<div class="px-8 w-full text-center">{year}</div>
	</div>
</div>
