(function($) {

	$(document).ready(function () {
		var standardsData;

		/**
		 * Load APFT json data.
		 */
		$.getJSON('standards.json', function (data) {
			standardsData = data;
		}).done(function( data ) {
			$('html').addClass('application-loaded');
		});

		/**
		 * Calculate score.
		 */
		$('#calculator').submit(function () {
			var g = $('#gender').val();
			var a = $('#age').val();
			var pu = $('#pu').val();
			var su = $('#su').val();
			var t = $('#min').val() + $('#sec').val();

			// change object keys to arrays for easier sorting
			var puArr = Object.keys(standardsData[g]['push-ups']);
			var suArr = Object.keys(standardsData[g]['sit-ups']);
			var timeArr = Object.keys(standardsData[g]['run']);

			// filter user reps to be within available range
			var puFinal = getNextLowestKey(puArr, pu);
			var suFinal = getNextLowestKey(suArr, su);

			// filter user run time to be taken from available time
			var runFinal = getNextHighestKey(timeArr, t);

			// grab the score from the json data
			var puScore = standardsData[g]['push-ups'][puFinal][0][a];
			var suScore = standardsData[g]['sit-ups'][suFinal][0][a];
			var runScore = standardsData[g]['run'][runFinal][0][a];

			// total all exercise scores
			var totalScore = puScore + suScore + runScore;

			// clear pass fail
			$('[class*="apft-result-"]').removeClass('pass fail');

			var puPF = getPassFail(puScore);
			var suPF = getPassFail(suScore);
			var runPF = getPassFail(runScore);

			// output results
			$('.apft-result-pu-score').text(puScore).addClass(puPF);
			$('.apft-result-su-score').text(suScore).addClass(suPF);
			$('.apft-result-run-score').text(runScore).addClass(runPF);
			$('.apft-result-total-score').text(totalScore);

			// Get total score pass or fail
			if ($('[class*="apft-result-"]').hasClass('fail')) {
				$('.apft-result-total-score').addClass('fail');
			} else {
				$('.apft-result-total-score').addClass('pass');
			}

			$('#results').removeClass('hidden');
			$('#results')[0].scrollIntoView(true);

			return false; // prevent form submission
		});

		function getPassFail(number) {
			if (number >= 60) {
				return 'pass';
			} else {
				return 'fail';
			}
		}

		/**
		 * Keep keys within range and pick the next lowest if it doesn't exist.
		 */
		function getNextLowestKey(arr, val) {
			var min = arr[0];
			var max = arr[arr.length - 1];

			for (var i = 0; i < arr.length; i++) {
				var item = +arr[i];

				if (item === val) {
					return val;
				} else if (min > +val) {
					return min;
				} else if (item > +val) {
					return arr[i - 1];
				} else if (item >= max) {
					return max;
				}
			}
		}

		/**
		 * Keep keys within range and pick the next highest if it doesn't exist.
		 */
		function getNextHighestKey(arr, val) {
			var max = arr[arr.length - 1];

			for (var i = 0; i < arr.length; i++) {
				var item = +arr[i];

				if (item === +val) {
					return val;
				} else if (item > +val) {
					return arr[i];
				} else if (item >= max) {
					return max;
				}
			}
		}

		/**
		 * Reset form.
		 */
		$('#reset').click(function () {
			$(this).closest('#calculator').find('input[type=number], input[type=text]').val('');
			$('.apft-pu-score').text('');
			$('.apft-su-score').text('');
			$('.apft-run-score').text('');
			$('.apft-total-score').text('');
			$('#results').addClass('hidden');

			return false; // prevent form submission
		});

	});

})(jQuery);
