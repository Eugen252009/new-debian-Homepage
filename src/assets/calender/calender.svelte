<script>
	export let year = 2023;
	export let month = 'Juni';
	export let date = 12;
</script>

<div class="flex flex-col w-full min-w-[10ch] shadow-md rounded-md">
	<div
		class="text-center bg-gradient-to-br from-[#b60109] to-[#a00] rounded-t-md text-white text-sm"
	>
		{month}
	</div>
	<div class="bg-gradient-to-br from-[#fff] to-[#eee] rounded-b-md">
		<div class="w-full md:text-xl font-semibold text-center">{date}</div>
		<div class="w-full text-center rounded-b-md">{year}</div>
	</div>
</div>
