<script>
</script>

<div class="wrapper">
	<input checked={true} type="radio" name="slider" id="slide1" />
	<input type="radio" name="slider" id="slide2" />
	<input type="radio" name="slider" id="slide3" />
	<input type="radio" name="slider" id="slide4" />
	<input type="radio" name="slider" id="slide5" />
	<input type="radio" name="slider" id="slide6" />
	<div class="slider-wrapper">
		<div class="inner">
			<slot />
		</div>
		<!-- .inner -->
	</div>
	<!-- .slider-wrapper -->
	<div class="slider-prev-next-control">
		<label for="slide1" />
		<label for="slide2" />
		<label for="slide3" />
		<label for="slide4" />
		<label for="slide5" />
		<label for="slide6" />
	</div>
	<!-- .slider-prev-next-control -->
	<div class="slider-dot-control">
		<label for="slide1" />
		<label for="slide2" />
		<label for="slide3" />
		<label for="slide4" />
		<label for="slide5" />
		<label for="slide6" />
	</div>
	<!-- .slider-dot-control -->
</div>
