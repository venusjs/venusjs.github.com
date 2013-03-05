$(document).ready(function() {

	// Add click handlers to steps under "Quick Launch" section
	$('.step').click(function(evt) {
		var $activeStep    = $('.step.active'),
			  activeNumber   = $activeStep.attr('data-step-number'),
			  $activeCommand = $('.command.active'),
			  $newStep       = $(this),
			  newNumber      = $newStep.attr('data-step-number'),
			  newAnchor      = $newStep.find('a').attr('href'),
			  $newCommand    = $(newAnchor);

		evt.preventDefault();

		// Change active step
		if (activeNumber !== newNumber) {

			// Remove active states
			$activeStep.removeClass('active');
			$activeCommand.removeClass('active');

			// Add active states
			$newStep.addClass('active');
			$newCommand.addClass('active');
		};
	});
})