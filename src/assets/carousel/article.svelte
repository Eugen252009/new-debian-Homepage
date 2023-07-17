<script>
	export let title = 'Debian Reunion Hamburg 2023';
	export let src = '/mini-dc23-hamburg.jpg';
	export let alt = 'Group photo of the Debian Reunion Hamburg 2023';
	export let position = 'top-left';
</script>

<article class="">
	<div class={`info ${position}`}>
		<h3>{title}</h3>
	</div>
	<img loading="lazy" {src} {alt} />
</article>
